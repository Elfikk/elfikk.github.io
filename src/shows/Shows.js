import "./Shows.css";
import ShowElement from "./ShowElement";
import { allShows } from "./ShowsBodge";

function Shows()
{
    const gridComponents = allShows.map((show, index) =>
        <ShowElement key = {index} showId={index} showDets={show}/>
    )

    return (
        <section id = "shows">
            <h1>Shows and Events</h1>
            <p>Mostly lighting unsurprisingly.</p>
            <div id = "showGrid">
                {gridComponents}
            </div>
        </section>
    );
}

export default Shows;
