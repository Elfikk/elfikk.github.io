import "./ProjectSummary.css";

function ProjectSummary({projDets, clickMethod}) {
    // Expects a provided projDets map to be passed on.
    
    return (
        <div id={projDets.projectName} className="project-holder" onClick={clickMethod}>
            <h3 className="generic-header">{projDets.projectName}</h3>
            <p className="generic-short">{projDets.short}</p>
            <p className="generic-tech">{"Tech: " + projDets.tech}</p>
        </div>
    );
}

export default ProjectSummary;