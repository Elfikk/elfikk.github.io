import "./Intro.css"
import introPhoto from "./PillowmanPhoto.JPG"
import {useState} from "react";

function Intro() {

    const desc = ["🪐 Year 4 MSci Physics Student @ ICL",
                  "💡 Current ICU DramSoc Lighting Director",
                  "🫖 Current ICU TeaSoc Chair",
                  "💻 Hobbyist Coder and Aspiring Developer",
                  "☕ Caffeine Enjoyer"];

    const [index, setIndex] = useState(0);
    const maxCount = desc.length;

    function incrementIndex() {
        setIndex((index + 1) % maxCount);
    }
    setTimeout(incrementIndex, 2000);

    return (
        <div class = "intro-section">
            <div class = "intro-text">
                <h3 id = "heya">Hey 👋</h3>
                <h1 id = "my-name">I'm Jarek,</h1>
                <h3 id = "a-role">{desc[index]}</h3>
                <span id = "github">Github </span>
                <span id = "linked-in">LinkedIn </span>
                <span id = "email">Email</span>
            </div>
            <img src={introPhoto} alt = "It's a me, Jarek!" id = "intro-photo"></img>
        </div>
    );
}



export default Intro;