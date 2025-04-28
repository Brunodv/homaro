import MyContext from "./MyContext";
import { useState, useEffect } from "react";

function MyState({ children }) {
    const [mode, setMode] = useState('light');
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const toggleMode = () => {
        setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        if (mode === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }, [mode]);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
    
        const x = (clientX - innerWidth / 2) / (innerWidth / 2);
        const y = (clientY - innerHeight / 2) / (innerHeight / 2);
    
        setOffset({ x, y });
      };


    return (
        <MyContext.Provider value={{ 
            mode, 
            toggleMode,
            toggleMenu,
            isDesktop,
            offset, setOffset,isMenuOpen, setIsMenuOpen,handleMouseMove
        }}>
            {children}
        </MyContext.Provider>
    );
}

export default MyState;
