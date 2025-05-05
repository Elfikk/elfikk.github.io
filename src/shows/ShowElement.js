import "./ShowElement.css";

function ShowElement({showId, showDets})
{
    return (
    <div className="showElement" id={showId}>
        <img className="showImage" src={showDets.imageDir} alt=""/>
        <div className="showTitle">{showDets.showName}</div>
        <div className="hiddenText">
            <div className="short">{showDets.short}</div>
            <div className="roles">{showDets.role}</div>
        </div>
    </div>);
};

export default ShowElement;
