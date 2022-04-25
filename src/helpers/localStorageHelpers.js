//Helpers for parsing json to string and back with localstorage
export const setLocalStorage = (key, value) => {
    const window = new Window();
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = (key) => {
    const window = new Window();
    JSON.parse(window.localStorage.getItem(key))
}