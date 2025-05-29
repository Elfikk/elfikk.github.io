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
            <h1 id="showsHeader">Shows and Events</h1>
            <div className="showsText">
                <p>Mostly lighting unsurprisingly. I think I can be proud of the shows below given I had not done any of this prior to Edinburgh Fringe 2022, which itself was not a gentle introduction.</p>
                <p>Hover over a show for more detail.</p>
            </div>
            <div id = "showGrid">
                {gridComponents}
            </div>
        </section>
    );
}

export default Shows;
