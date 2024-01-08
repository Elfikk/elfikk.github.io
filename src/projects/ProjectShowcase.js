import "./ProjectShowcase.css";

function ProjectShowcase({projDets, clickMethod}) {
    return (
        <div className="project-holder" onClick={clickMethod}>           
            <h3 className="generic-header">{projDets.projectName}</h3>
            <p className="generic-short">{projDets.long}</p>
            <p className="generic-tech">{"Tech: " + projDets.tech}</p>
        </div>
    );
}

export default ProjectShowcase;