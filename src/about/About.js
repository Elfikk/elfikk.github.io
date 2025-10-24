import "./About.css";
import aboutPhoto from "./ME.jpg";

function About() {

    const tech = [
        "Python",
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

    const listItems1 = listItems.slice(0, Math.ceil(tech.length/2));
    const listItems2 = listItems.slice(Math.ceil(tech.length/2));

    return (
        <section id = "about">
            <h1 id = "about-header">About Me</h1>
            <div className = "about-grid">
                <div className = "about-text">
                    <p>Heya, I'm Jarek Ciba, a developer at Carallon and Imperial
                        Physics alumni - with a couple Dean's List awards under my belt.
                        I love to learn, whether by myself or with the help of others.
                        I don't hesitate to ask questions, as I'd rather look stupid
                        for 5 minutes than being stupid for the rest of my life.</p>
                    <p>I've been coding since secondary school, predominantly in Python 3.
                    I've found in the past that whenever I wanted to pick up a different
                    language though for a personal project, it's not been much trouble.
                    Ultimately any app's logic is gonna be similar regardless of language,
                    with some implementation details due to language quirks. I have focused
                    more time into understanding C++ as it is my job to write in it now,
                    and have found Meyer's Effective C++ to be very useful so far!
                    </p>
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
                        At Imperial I had gotten heavily involved in working
                        backstage on audiovisual events through DramSoc. We not
                        only put on a few theatre plays a year, but provide most of
                        the student societies with audiovisual support when required -
                        as quite uniquely for a student society, we own our own
                        extensive stock of lighting, video and sound equipment.
                        I personally mostly worked in lighting, often overseeing rig
                        design, lighting desk programming and light operation during
                        events. I was the Lighting Director of the society in my last
                        year so I was often found tinkering in backstage. I have even
                        gone back to work on a dance show in March 2025, programming
                        32 songs over 3 weeks whilst having a full time job in the
                        process...
                    </p>
                    <p>
                        It was a fairly natural step to join Carallon as a developer
                        given my programming interest and AV background. At Carallon,
                        I work on a couple lighting related projects - the fixture
                        lighting database, a database of all sorts of lights used in
                        multiple lighting consoles, and the Paradigm architectural
                        system, which is used for controlling lights in theme parks,
                        the Houses of Parliament and large office buildings.
                    </p>
                </div>
                <div className = "about-photo-border">
                    <img src={aboutPhoto} alt = "It's a me, Jarek!" id = "about-photo"></img>
                </div>
            </div>

        </section>
    )
}

export default About;