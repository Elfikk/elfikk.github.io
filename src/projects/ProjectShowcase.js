import "./ProjectShowcase.css";

function ProjectShowcase({projDets, clickMethod}) {

    return (
        <div className="project-showcase-holder" onClick={clickMethod}>
            <div id = "textholder">
                <h3 className="generic-header">{projDets.projectName}</h3>
                <p className="generic-short">{projDets.long}</p>
                <p className="generic-tech">{"Tech: " + projDets.tech}</p>
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