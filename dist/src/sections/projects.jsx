import smod from "../assets/projects/smod.png";
import tsport from "../assets/projects/txzport.png";
import ts from "../assets/experience/taxzyyyscripts.png";
import smodlog from "../assets/experience/smodimg.png";

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="project-header">Projects</div>
            <a href="/projects">
                <div className="view-more">View More</div>
            </a>

            <div className="projects-grid">
                <div className="projects-box">
                    <img src={smod} alt="Project Image" />
                    <div className="project-header2">
                        <div className="project-info">
                            <div className="project-title">S Modifications</div>
                            <div className="project-desc">
                                S Modifications is a website where you can buy diverse GTA 5 products
                            </div>
                            <div className="project-who">
                                For <img src={smodlog} alt="S Modifications Logo" /> 
                                <a href="">smodfications.com</a>
                            </div>

                            <div className="project-tech-stack-apps">
                                <p>React</p>
                                <p>Vite</p>
                                <p>Javascript</p>
                                <p>Tailwind CSS</p>
                                <p>Supabase</p>
                            </div>
                        </div>
                        <button className="discover-button">
                            Discover
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-5 w-5">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="projects-box">
                    <img src={tsport} alt="Project Image" />
                    <div className="project-header2">
                        <div className="project-info">
                            <div className="project-title">Personal Portfolio v1</div>
                            <div className="project-desc">
                                This is my personal portfolio, where I showcase my projects and skills.
                            </div>
                            <div className="project-who">
                                For <img src={ts} alt="ts port" /> 
                                <a href="">taxzyyyscripts.xyz</a>
                            </div>

                            <div className="project-tech-stack-apps">
                                <p>React</p>
                                <p>Vite</p>
                                <p>Javascript</p>
                                <p>Tailwind CSS</p>
                            </div>
                        </div>
                        <button className="discover-button">
                            Discover
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-5 w-5">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;