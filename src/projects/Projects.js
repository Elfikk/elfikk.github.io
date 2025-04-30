import {allProjs} from "./ProjectsBodge";
import ProjectSummary from "./ProjectSummary";
import ProjectShowcase from "./ProjectShowcase";
import "./Projects.css";
import {useState} from "react";

function Projects() {

    // I'm starting to love Hooks.
    const [inGridView, setInGridView] = useState(1);
    const [projID, setID] = useState(0);

    function expandProject(e) {
        setID(e.target.id);
        console.log("CLICK CLACK MOTHAFUCKA " + projID);
        console.log(e.target);

        // I'd like a better transition; the clicker project should stay fully
        // visible, whilst the grid fades out and simultaneously the box gets larger.
        setInGridView(0);
        updateBlurState(0.2);
    }

    function updateBlurState(blur)
    {
        const summaries = document.getElementsByClassName("project-holder");
        for (let i = 0; i < summaries.length; i++)
        {
            summaries[i].style.opacity = blur;
        }
    }

    function backToGrid(e) {
        setInGridView(0);
        updateBlurState(1);
    }

    function projectSummaryRow(index) {
        return (index / 3) | 0 + 1;
    }

    function projectSummaryCol(index) {
        return index % 3;
    }

    const gridComponents = allProjs.map((project, index) =>
        <ProjectSummary key = {index} projID={index} projDets={project} clickMethod={expandProject}
        style = {{"grid-column": projectSummaryCol(index), "grid-row": projectSummaryRow(index)}}/>
    )

    const gridMode =  <div id = "project-grid">{gridComponents}</div>

    return (
        <section id = "projects">
            <h1>Projects</h1>
            <p>Mostly personal, though I've highlighted a few academic ones. </p>
            <p>Click on a project for more detail, and click again to go back to the grid.</p>

            {(gridMode)}

            {inGridView ? (
                <></>
            ) : (
                 <ProjectShowcase projDets={allProjs[projID]} clickMethod={backToGrid}/>
            )}

        </section>
    );
}

export default Projects;