import { useContext } from "react";
import MyContext from "../context/MyContext";
import { Link } from "react-router-dom";

function Nav() {
    const { mode, toggleMode } = useContext(MyContext);

    return (
        <div className={`relative flex items-center justify-between p-4 ${mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
            
            {/* Centro absoluto */}
            <div className="absolute left-1/2 transform -transzlate-x-1/2">
                <Link to="/">
                    <h1 className="text-5xl font-bold">Homaro</h1>
                </Link>
            </div>

            {/* Botón menú a la derecha */}
            <button 
                onClick={toggleMode} 
                className="ml-auto bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded hover:bg-opacity-80 transition"
            >
                Menú
            </button>
        </div>
    );
}

export default Nav;
