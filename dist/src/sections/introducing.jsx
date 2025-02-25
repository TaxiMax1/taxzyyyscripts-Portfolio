import profilepic from '../assets/pfp.jpg';
import denmark from '../assets/danmark.png';

const Introducing = () => {
    return (
        <div className="intro-container">
            <div className="profile-container">
                <img src={profilepic} alt="profile picture" className="profile-pic" />
                <div className="intro-text">
                    <div className="intro-title">Lukas Feitosa</div>
                    <div className="intro-location">
                        <img src={denmark} alt="denmark icon" /> Denmark, Odense
                    </div>
                </div>
            </div>


            <div className="intro-stilling-container">
                <div className="intro-stilling">
                    FULLSTACK <br/> <span>DEVELOPER</span>
                </div>


                <div className="contact-wrapper">
                    <a href="">
                        <button className="contact-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send mr-2 h-4 w-4">
                                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                <path d="m21.854 2.147-10.94 10.939"></path>
                            </svg>
                            <span className="second-font">Contact me</span>
                        </button>
                    </a>
                </div>
            </div>


            <div className="socials-container">
                <a href="https://www.linkedin.com/in/lukas-feitosa-635012327/">
                    <button className="social-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </button>
                </a>

                <a href="https://www.facebook.com/share/15gcQNn74G/?mibextid=wwXIfr">
                    <button className="social-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    </button>
                </a>

                <a href="https://github.com/TaxiMax1">
                    <button className="social-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                            </path><path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                    </button>
                </a>

                <a href="https://discord.gg/5Y8hqr64fJ/">
                    <button className="social-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-discord">
                            <path d="M6 20s1.5-1 2-1.5c1.5.5 3 1 6 1s4.5-.5 6-1c.5.5 2 1.5 2 1.5M8 16c1.5 1 3.5 1 5 0M8 14.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM16 17c2.5-1 4-3 4-7 0-4-3-6-3-6a13 13 0 0 0-3-1s-1 0-2 1c-1-1-2-1-2-1a13 13 0 0 0-3 1s-3 2-3 6c0 4 1.5 6 4 7"></path>
                        </svg>
                    </button>
                </a>

                <a href="https://cal.com/lukas-feitosa">
                    <button className="social-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-clock">
                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h5"></path><path d="M17.5 17.5 16 16.3V14"></path>
                            <circle cx="16" cy="16" r="6"></circle>
                        </svg>
                    </button>
                </a>

                <a href="/coming-soon">
                    <button className="social-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text">
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>
                        </svg>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Introducing;