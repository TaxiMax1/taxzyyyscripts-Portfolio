import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    if (location.pathname === "/signup" || location.pathname === "/signin") {
        return null;
    }

    return (
        <header className="header-container">
            <nav className="navbar-container">
                <div className="nav-links" style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                    <a href=""><h1>Home</h1></a>
                    <a href="/about"><h1>About</h1></a>
                    <a href="/projects"><h1>Projects</h1></a>
                    <a href="/contact"><h1>Contact</h1></a>
                </div>
            </nav>

            <div className="sign-buttons">
                <a href="/signup"><button>Sign Up</button></a>
                <a href="/signin"><button>Sign In</button></a>
            </div>
        </header>
    );
};

export default Navbar;