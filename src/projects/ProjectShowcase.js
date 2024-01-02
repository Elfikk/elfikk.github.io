import "./ProjectShowcase.css";

function ProjectShowcase({projDets, clickFunc}) {
    return (
        <div className="project-holder">           
            <h3 className="generic-header">{projDets.projectName}</h3>
            <p className="generic-short">{projDets.long}</p>
            <p className="generic-tech">{"Tech: " + projDets.tech}</p>
        </div>
    );
}

export default ProjectShowcase;