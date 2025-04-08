import {allProjs} from "./ProjectsBodge";
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

        // I'd like a better transition; the clicker project should stay fully
        // visible, whilst the grid fades out and simultaneously the box gets larger.
        setGridOpacity(0);
    }

    function backToGrid(e) {
        setGridOpacity(1);
    }

    const gridComponents = allProjs.map((project, index) =>
        <ProjectSummary key = {index} projID={index} projDets={project} clickMethod={expandProject}/>
    )

    const gridMode =  <div id = "project-grid" style={{opacity: opacityGrid}}>{gridComponents}</div>

    return (
        <section id = "projects">
            <h1>Projects</h1>
            <p>Mostly personal, though I've highlighted a few academic ones. </p>
            <p>Click on a project for more detail, and click again to go back to the grid.</p>

            {opacityGrid ? (
                gridMode
            ) : (
                 <ProjectShowcase projDets={allProjs[projID]} clickMethod={backToGrid}/>
            )}

        </section>
    );
}

export default Projects;