import "./Intro.css";
import introPhoto from "./PillowmanPhoto.JPG";
import githubLogo from "./githubLogo.svg";
import gmailLogo from "./gmailLogo.svg";
import linkedinLogo from "./linkedinLogo.svg";
import {useState} from "react";

function Intro() {

    const desc = ["🪐 MSci Theoritical Physics Graduate @ ICL",
                  "💻 Hobbyist Coder and Developer @ Carallon",
                  "💡 Former ICU DramSoc Lighting Director",
                  "🍵 Former ICU TeaSoc Chair",
                  "🏎️ F1 Fan, but not a Sky Q or Sky Glass Customer"];

    const [indexVisible, setIndexVisible] = useState(0);
    const [indexInvisible, setIndexInvisible] = useState(-1);
    const maxCount = desc.length;

    function showNextDescription() {
        // I would like a nicer transition here, with a row below moving up
        // with a fade out between those two.

        const keyframesOut = {
            opacity: [1, 0],
            top: ["0%", "-50%"]
        }
        const keyframesIn = {
            opacity: [0, 1],
            top: ["50%", "0%"]
        }

        const currentDesc = document.getElementById("b-role");
        const nextDesc = document.getElementById("a-role");

        setIndexInvisible((indexInvisible + 1) % maxCount);
        currentDesc.style.opacity = 1;
        nextDesc.style.opacity = 0;

        currentDesc.animate(keyframesOut, 1000);

        setIndexVisible((indexVisible + 1) % maxCount);
        nextDesc.animate(keyframesIn, 1000);

        nextDesc.style.opacity = 1;
        currentDesc.style.opacity = 0;
    }

    // Update time in milliseconds.
    const updateTime = 5000;
    setTimeout(showNextDescription, updateTime);

    return (
        <div className = "intro-section">

            <div className = "intro-text">
                <h3 id = "heya">Hey 👋</h3>
                <div className = "my-name">
                    <span id = "my-name-im">I'm </span>
                    <span id = "my-name">Jarek</span>
                    <span id = "my-name-colon">,</span>
                </div>

                <div id = "desc_holder">
                    <div id = "a-role">{desc[indexVisible]}</div>
                    <div id = "b-role">{desc[indexInvisible]}</div>
                </div>

                <span className = "intro-links">
                    <a href="https://github.com/Elfikk" target="_blank" rel="noreferrer">
                        <img id = "github" src = {githubLogo} alt = "GitHub" className="intro-links"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/jaroslaw-ciba/" target="_blank" rel="noreferrer">
                        <img id = "linked-in" src = {linkedinLogo} alt = "LinkedIn" className="intro-links"></img>
                    </a>
                    <a href="mailto:jaroslaw.wiktor.ciba@gmail.com" rel="noreferrer">
                        <img id = "linked-in" src = {gmailLogo} alt = "Email" className="intro-links"></img>
                    </a>
                </span>
            </div>

            <div id = "intro-photo-border">
                <img src={introPhoto} alt = "It's a me, Jarek!" id = "intro-photo"></img>
            </div>

        </div>
    );
}

export default Intro;