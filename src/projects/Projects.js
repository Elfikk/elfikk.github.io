import ProjectSummary from "./ProjectSummary";
import ProjectShowcase from "./ProjectShowcase";
import "./Projects.css";
import {useState} from "react";

function Projects() {

    // I'm starting to love Hooks.
    const [opacityGrid, setGridOpacity] = useState(1);
    const [projID, setID] = useState(0);

    function expandProject(e) {
        setID(e.target.id);
        console.log("CLICK CLACK MOTHAFUCKA " + projID);
        console.log(e.target);

        setGridOpacity(0);
    }

    function backToGrid(e) {
        setGridOpacity(1);
    }

    // Map format - ID, ProjectName, Short, Long, Tech, Date, ImageDir
    // Short - Short description that must fit in a project summary container.
    // Long - Long form description of the project, fits in project showcase.
    var projectDict = [];

    const projectOne = {"projectName": "WorldDomination",
                        "short": "Recreation of a small self-playing videogame.",
                        "long": "Recreation of a small videogame upkept by a friend. Some blurb",
                        "tech": "HTML, CSS, JS",
                        "date": "12/2023",
                        "imageDir": "./WorldDomSC.jpg"
                    };

    for (let i = 0; i < 12; i++) {
        projectDict.push(projectOne);
    }

    const gridComponents = projectDict.map((project, index) =>
        <ProjectSummary key = {index} projID={index} projDets={project} clickMethod={expandProject}/>
    )

    const gridMode =  <div id = "project-grid" style={{opacity: opacityGrid}}>{gridComponents}</div>

    return (
        <section id = "projects">
            <h1>Projects</h1>
            <p>Mostly personal, though I've highlighted a few academic ones.</p>

            {opacityGrid ? (
                gridMode
            ) : (
                 <ProjectShowcase projDets={projectDict[projID]} clickMethod={backToGrid}/>
            )}

        </section>
    );
}

export default Projects;