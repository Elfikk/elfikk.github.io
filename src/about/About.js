import "./About.css";
import aboutPhoto from "./IMG_3038.jpg";

function About() {

    const tech = [
        "Python",
        "SQL",
        "Java",
        "C++",
        "HTML",
        "CSS",
        "JS",
        "React"
    ]

    const listItems = tech.map(element =>
        <li key={element}>
          {element}
        </li>
    );

    const listItems1 = listItems.slice(0, tech.length/2);
    const listItems2 = listItems.slice(tech.length/2);


    return (
        <section id = "about">
            <h1 id = "about-header">About Me</h1>
            
            <div class = "about-grid">
                <div class = "about-text">
                    <p>Heya, I'm Jarek Ciba, a fourth year Imperial Physics student 
                        - with a couple Dean's List awards under my belt.
                        I love to learn, whether by myself or with the help of others. 
                        I don't hesitate to ask questions, as I'd rather look stupid 
                        for 5 minutes than being stupid for the rest of my life.</p>
                    <p>I've been coding since secondary school, predominantly in Python 3. 
                    I find that whenever I need to pick up a different language, it's 
                    not much trouble - ultimately, any app's logic is quite similar 
                    no matter the language, so it's just about learning the basics
                    of syntax and getting used to some of the language's quirks...</p>
                    <p>I've tinkered with...</p>
                    <div className="tech-list">
                        <ul id="list-left">
                            {listItems1}
                        </ul>
                        <ul id="list-right">
                            {listItems2}
                        </ul>
                    </div>
                    <p>
                        At Imperial I have gotten heavily involved in working
                        backstage on audiovisual events through DramSoc. We not
                        only put on a few theatre plays a year, but provide most of
                        the student societies with audiovisual support when required - 
                        as quite uniquely for a student society, we own our own
                        extensive stock of lighting, video and sound equipment.
                        I personally mostly work in lighting, often overseeing rig
                        design, lighting desk programming and light operation during
                        events. I've had quite the meteoric rise, going from no 
                        experience by the end of my second year, to now being the
                        lighting director of the society!
                    </p>
                </div>
                <div class = "about-photo-border">
                    <img src={aboutPhoto} alt = "It's a me, Jarek!" id = "about-photo"></img>       
                </div>
            </div>

        </section>
    )
}

export default About;