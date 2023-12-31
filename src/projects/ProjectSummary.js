import "./ProjectSummary.css";

function ProjectSummary({projDets}) {
    // Expects a provided projDets map to be passed on.
    
    return (
        <div id={projDets.projectName} className="project-holder">
            <h3 className="generic-header">{projDets.projectName}</h3>
            <p className="generic-short">{projDets.short}</p>
            <p className="generic-tech">{"Tech: " + projDets.tech}</p>
        </div>
    );
}

export default ProjectSummary;