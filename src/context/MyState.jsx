import MyContext from "./MyContext";
import { useState, useEffect } from "react";

function MyState({ children }) {
    const [mode, setMode] = useState('light');
    const [offsetY, setOffsetY] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

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

    const handleScroll = () => setOffsetY(window.pageYOffset);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        handleResize(); // detectar si ya es desktop desde el inicio

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <MyContext.Provider value={{ 
            mode, 
            toggleMode,
            offsetY,
            isDesktop 
        }}>
            {children}
        </MyContext.Provider>
    );
}

export default MyState;
