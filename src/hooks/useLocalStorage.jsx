import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn(error);
            return initialValue;
        }
    });
    const setValue = (value) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.warn(error);
            setStoredValue(initialValue);
        }
    };
    return [storedValue, setValue];
}
