export function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key) {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : null;
}