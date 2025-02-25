const Navbar = () => {
    return (
        <header className="header-container">
            <nav className="navbar-container">
                <div className="nav-links">
                    <a href="/"><h1>Home</h1></a>
                    <a href="/about"><h1>About</h1></a>
                    <a href="/projects"><h1>Projects</h1></a>
                    <a href="https://discord.gg/5Y8hqr64fJ"><h1>Contact</h1></a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;