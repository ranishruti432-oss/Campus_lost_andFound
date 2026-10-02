// storage.js - the only file that talks to localStorage.
// If we later switch to a real backend, only this file needs to change.

const STORAGE_KEY = "campusLostFoundItems";

// Read all items. Returns an empty array if nothing is saved yet.
function getItems() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (error) {
    return [];
  }
}

function saveItems(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    return true;
  } catch (error) {
    return false; // e.g. storage is full
  }
}

// Add a new item. Every item gets an id and the status "active".
function addItem(item) {
  const items = getItems();
  item.id = Date.now().toString();
  item.status = "active";
  items.unshift(item); // newest first
  return saveItems(items);
}

// Change the status of one item ("active" or "resolved").
function updateItemStatus(id, status) {
  const items = getItems();
  const item = items.find((i) => i.id === id);
  if (item) item.status = status;
  saveItems(items);
}
