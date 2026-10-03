// app.js - page switching, form handling, and showing items.

const REQUIRED_FIELDS = ["name", "category", "description", "location", "date", "contact"];
const MAX_IMAGE_BYTES = 500 * 1024;

// ---------- 1. Switching between "pages" ----------
// All pages are <section class="view"> elements; we show one and hide the rest.
function showView(name, type) {
  document.querySelectorAll(".view").forEach((v) => (v.hidden = true));
  document.getElementById("view-" + name).hidden = false;

  if (name === "report") {
    document.getElementById("type").value = type;
    document.getElementById("form-title").textContent =
      type === "lost" ? "Report Lost Item" : "Report Found Item";
  }
  if (name === "browse") renderItems();
}

// Any element with data-view="..." works as a navigation button.
document.querySelectorAll("[data-view]").forEach((btn) => {
  btn.addEventListener("click", () => showView(btn.dataset.view, btn.dataset.type));
});

// ---------- 2. Submitting the form ----------
const form = document.getElementById("report-form");

// Returns true if all required fields are filled; shows messages otherwise.
function validateForm() {
  let valid = true;
  REQUIRED_FIELDS.forEach((field) => {
    const value = form.elements[field].value.trim();
    const errorBox = document.getElementById("error-" + field);
    errorBox.textContent = value ? "" : "This field is required.";
    if (!value) valid = false;
  });
  return valid;
}

// Turns the chosen image file into text (a "data URL") so it fits in localStorage.
function readImage(file) {
  return new Promise((resolve) => {
    if (!file) return resolve("");
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

const successBanner = document.getElementById("success-banner");
const closeSuccessBannerBtn = document.getElementById("close-success-banner");
let successBannerTimer = null;

function showSuccessBanner(message = "Report submitted successfully!") {
  if (!successBanner) return;
  const textEl = successBanner.querySelector("span");
  if (textEl) textEl.textContent = message;
  successBanner.hidden = false;
  if (successBannerTimer) clearTimeout(successBannerTimer);
  successBannerTimer = setTimeout(() => {
    hideSuccessBanner();
  }, 4000);
}

function hideSuccessBanner() {
  if (!successBanner) return;
  successBanner.hidden = true;
  if (successBannerTimer) {
    clearTimeout(successBannerTimer);
    successBannerTimer = null;
  }
}

if (closeSuccessBannerBtn) {
  closeSuccessBannerBtn.addEventListener("click", hideSuccessBanner);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // stop the browser from reloading the page
  if (!validateForm()) return;

  const file = form.elements.image.files[0];
  const imageError = document.getElementById("error-image");
  if (file && file.size > MAX_IMAGE_BYTES) {
    imageError.textContent = "Image is too large (max 500 KB).";
    return;
  }
  imageError.textContent = "";

  const item = {
    type: form.elements.type.value,
    image: await readImage(file),
  };
  REQUIRED_FIELDS.forEach((f) => (item[f] = form.elements[f].value.trim()));

  if (!addItem(item)) {
    imageError.textContent = "Could not save. Browser storage may be full.";
    return;
  }
  form.reset();
  showView("browse");
  showSuccessBanner();
});

// ---------- 3. Showing, searching and filtering items ----------
const listEl = document.getElementById("item-list");
const searchEl = document.getElementById("search");
const typeEl = document.getElementById("filter-type");
const categoryEl = document.getElementById("filter-category");
const locationEl = document.getElementById("filter-location");

// Fill the category dropdown from the form's own category list.
document.querySelectorAll("#category option").forEach((opt) => {
  if (opt.value || opt.textContent !== "Select...") {
    categoryEl.add(new Option(opt.textContent, opt.textContent));
  }
});

// Escape text so users can't inject HTML into the page.
function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Keep only the items that match the search box and all filters.
function getFilteredItems() {
  const search = searchEl.value.toLowerCase();
  const place = locationEl.value.toLowerCase();
  return getItems().filter((item) => {
    const text = (item.name + " " + item.description).toLowerCase();
    return (
      text.includes(search) &&
      (!typeEl.value || item.type === typeEl.value) &&
      (!categoryEl.value || item.category === categoryEl.value) &&
      item.location.toLowerCase().includes(place)
    );
  });
}

function renderItems() {
  const items = getFilteredItems();
  listEl.innerHTML = items.length ? "" : "<p>No items found.</p>";

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      ${item.image ? `<img src="${item.image}" alt="${escapeHTML(item.name)}">` : ""}
      <span class="badge ${item.type}">${item.type}</span>
      <span class="badge ${item.status === "resolved" ? "resolved" : ""}">${item.status}</span>
      <h3>${escapeHTML(item.name)}</h3>
      <p>${escapeHTML(item.location)} &middot; ${escapeHTML(item.date)}</p>`;
    card.addEventListener("click", () => showDetails(item.id));
    listEl.appendChild(card);
  });
}

[searchEl, typeEl, categoryEl, locationEl].forEach((el) =>
  el.addEventListener("input", renderItems)
);

// ---------- 4. Item details + status ----------
const dialog = document.getElementById("detail-dialog");
const detailEl = document.getElementById("detail-content");

function showDetails(id) {
  const item = getItems().find((i) => i.id === id);
  const nextStatus = item.status === "active" ? "resolved" : "active";
  detailEl.innerHTML = `
    ${item.image ? `<img src="${item.image}" alt="${escapeHTML(item.name)}">` : ""}
    <h2>${escapeHTML(item.name)}</h2>
    <p><span class="badge ${item.type}">${item.type}</span> Status: <strong>${item.status}</strong></p>
    <p><strong>Category:</strong> ${escapeHTML(item.category)}</p>
    <p><strong>Description:</strong> ${escapeHTML(item.description)}</p>
    <p><strong>Location:</strong> ${escapeHTML(item.location)}</p>
    <p><strong>Date:</strong> ${escapeHTML(item.date)}</p>
    <p><strong>Contact:</strong> ${escapeHTML(item.contact)}</p>
    <button class="btn" id="toggle-status">Mark as ${nextStatus}</button>`;

  document.getElementById("toggle-status").addEventListener("click", () => {
    updateItemStatus(id, nextStatus);
    dialog.close();
    renderItems();
  });
  dialog.showModal();
}

document.getElementById("close-dialog").addEventListener("click", () => dialog.close());

// Start on the home page.
showView("home");
