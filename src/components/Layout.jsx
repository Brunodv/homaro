import Nav from "./Nav";
import Footer from "./Footer";
import MyContext from '../context/MyContext';

function Layout({ children }) {

    return (
        < >
     <Nav />
            <div className="content">
                {children}
            </div>
    </>

    )
}

export default Layout;