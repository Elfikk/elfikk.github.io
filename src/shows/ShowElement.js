import "./ShowElement.css";

function ShowElement({showId, showDets})
{
    return (
    <div className="showElement" id={showId}>
        <img className="showImage" src={showDets.imageDir} alt=""/>
        <div className="showTitle">{showDets.showName}</div>
        <div className="baseText">

        </div>
    </div>);
};

export default ShowElement;
