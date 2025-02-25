import { techStackItems } from "../components/techstacks"; 

const Techstack = () => {
    return (
        <div className="tech-stack-container">
            <div className="tech-header">Tech Stack</div>

            <div className="tech-stack-apps-container">
                {techStackItems.map((item, index) => (
                    <div className="tech-stack-apps" key={index}>
                        <img src={item.icon} alt={`${item.name} Icon`} />
                        <div className="app-name">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Techstack;