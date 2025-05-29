import "./ProjectShowcase.css";

function ProjectShowcase({projDets, clickMethod}) {

    return (
        <div className="project-showcase-holder" onClick={clickMethod}>
            <div className = "project-showcase-text">
                <h3 className="showcase-header">{projDets.projectName}</h3>
                <p className="showcase-short">{projDets.long}</p>
                <p className="showcase-tech">{"Tech: " + projDets.tech}</p>
            </div>
            {/* How does one dynamically link images passed as props */}
            {/* Its faffy */}
            <div className="project-photo-holder">
                <img src={projDets.imageDir} alt = "Is a Project" id = "project-photo"></img>
            </div>
        </div>
    );
}

export default ProjectShowcase;