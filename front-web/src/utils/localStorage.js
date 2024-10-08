export function setToLocalStorage(key, obj) {
  const jsonString = JSON.stringify(obj);
  localStorage.setItem(key, jsonString);
}

export function getFromLocalStorage(key) {
  const jsonString = localStorage.getItem(key);
  const userAuth = jsonString ? JSON.parse(jsonString) : null;
  return { userAuth };
}

export function clearFromLocalStorage() {
  localStorage.clear();
}
