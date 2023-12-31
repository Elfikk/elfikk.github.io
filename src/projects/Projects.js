import ProjectSummary from "./ProjectSummary";
import "./Projects.css";

function Projects() {

    // Map format - ID, ProjectName, Short, Long, Tech, Date, ImageDir
    // Short - Short description that must fit in a project summary container.
    // Long - Long form description of the project, fits in project showcase.
    var projectDict = new Map();

    const projectOne = {"projectName": "WorldDomination",
                        "short": "Recreation of a small self-playing videogame.",
                        "long": "Recreation of a small videogame upkept by a friend. Some blurb",
                        "tech": "HTML, CSS, JS",
                        "date": "12/2023",
                        "imageDir": "./WorldDomSC.jpg"
                    };

    projectDict.set(1, projectOne)

    // var projectDict = {}

    return (
        <section id = "projects">
            <h1>Projects</h1>
            <p>Mostly personal, though I've highlighted a few academic ones.</p>
            <div id = "project-grid">
                <ProjectSummary projDets = {projectOne}/>
                <ProjectSummary projDets = {projectOne}/>
                <ProjectSummary projDets = {projectOne}/>
                <ProjectSummary projDets = {projectOne}/>
                <ProjectSummary projDets = {projectOne}/>
                <ProjectSummary projDets = {projectOne}/>
                <ProjectSummary projDets = {projectOne}/>
                <ProjectSummary projDets = {projectOne}/>
                <ProjectSummary projDets = {projectOne}/>
                <ProjectSummary projDets = {projectOne}/>
                <ProjectSummary projDets = {projectOne}/>
                <ProjectSummary projDets = {projectOne}/>
            </div>
        </section>
    );
}

export default Projects;