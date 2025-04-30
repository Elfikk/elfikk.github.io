import "./ProjectSummary.css";

function ProjectSummary({projID, projDets, clickMethod}) {
    // Expects a provided projDets map to be passed on.

    return (
        <div id={projID} className="project-holder" onClick={clickMethod}>
            <h3 id={projID} className="generic-header">{projDets.projectName}</h3>
            <p id={projID} className="generic-short">{projDets.short}</p>
            <p id={projID} className="generic-tech">{"Tech: " + projDets.tech}</p>
        </div>
    );
}

export default ProjectSummary;