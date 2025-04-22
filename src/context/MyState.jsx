import MyContext from "./MyContext";
import { useState, useEffect } from "react";

function MyState({ children }) {
    const [mode, setMode] = useState('light');

    useEffect(() => {
        if (mode === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }, [mode]);

    const toggleMode = () => {
        setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
    };


    return (
        <MyContext.Provider value={{ mode, toggleMode }}>
            {children}
        </MyContext.Provider>
    );
}

export default MyState;
