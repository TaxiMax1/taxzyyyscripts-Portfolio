import { useState } from "react";
import taxzyyyscript from "../assets/experience/taxzyyyscripts.png";
import smodifications from "../assets/experience/smodifications.png";

const Experience = () => {
    const [selectedTab, setSelectedTab] = useState("work"); 

    return (
        <div className="experience-container">
            <div className="exp-header">Experience</div>

            <div className="experience-exp">
                <button 
                    className={`exp-button ${selectedTab === "work" ? "active" : ""}`}
                    onClick={() => setSelectedTab("work")}
                >
                    Work
                </button>
                <button 
                    className={`exp-button ${selectedTab === "studies" ? "active" : ""}`}
                    onClick={() => setSelectedTab("studies")}
                >
                    Studies
                </button>
            </div>

            <div className="work-container">
                {selectedTab === "work" && (
                    <div className="work-content"> 
                        <div className="divider" style={{ backgroundColor: '#fff', width: '1px', height: '25px', marginTop: '-10px', marginLeft: '40px' }}></div>

                        <div className="works-content">
                            <img src={taxzyyyscript} className="work-img" style={{ marginLeft: "-666px"}} />
                            <div className="work-infomation">
                                <div className="work-startdate" style={{ marginRight: "450px"}}>Apr 2024 - Present</div>
                                <div className="work-title" style={{ marginRight: "435px", marginTop: "5px"}}>Taxzyyy Scripts</div>
                                <div className="work-desc" style={{ marginRight: "378px", marginTop: "5px"}}>Frontend & Backend Developer</div>
                                <div className="work-exp" style={{ marginRight: "210px", marginTop: "5px"}}>Web Design; Web Development; FiveM Development.</div>
                            </div>
                        </div>

                        <div className="divider" style={{ backgroundColor: '#fff', width: '1px', height: '80px', marginTop: '-100px', marginLeft: '40px' }}></div>

                        <div className="works-content">
                            <img src={smodifications} className="work-img" style={{ marginLeft: "-666px"}} />
                            <div className="work-infomation">
                                <div className="work-startdate" style={{ marginRight: "450px"}}>Feb 2025 - Present</div>
                                <div className="work-title" style={{ marginRight: "435px", marginTop: "5px"}}>S-Modifications</div>
                                <div className="work-desc" style={{ marginRight: "378px", marginTop: "5px"}}>Frontend & Backend Developer</div>
                                <div className="work-exp" style={{ marginRight: "347px", marginTop: "5px"}}>Web Design; Web Development.</div>
                            </div>
                        </div>

                        <div className="divider" style={{ backgroundColor: '#fff', width: '1px', height: '60px', marginTop: '-85px', marginLeft: '40px', marginBottom: "-10px"}}></div>
                    </div>
                )}

                {selectedTab === "studies" && (
                    <h2>Cooming Soon!</h2>
                )}
            </div>
        </div>
    );
};

export default Experience;