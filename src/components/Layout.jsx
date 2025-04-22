import Navbar from "./Nav";
import Footer from "./Footer";
import MyContext from '../context/MyContext';
import { useContext } from 'react';

function Layout({ children }) {

    const { mode, toggleMode } = useContext(MyContext);

    return (
        <div>
            <div className="content">
                {children}
            </div>
        </div>

    )
}

export default Layout;