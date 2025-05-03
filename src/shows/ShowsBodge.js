// Shows
// Edinburgh Fringe 2022 - Stop the Press! - Show Designer/Operator. FLX S24/QLab4
// Earthquakes in London - Assistant Light Designer / Light Operator - EOS
// Addams Family - Mic Monkey
// The Pillowman - Show Designer/Operator - EOS/QLab4
// DramFest - Grinolio's Home - My only acting credit
// October Show 2023 - Light Designer/DSM
// Revue 2023 - Lead Light Designer/DSM
// Romeo and Juliet - Lead Light Designer/DSM
// Spring Awakening - Production Manager/Light Designer/Light Operator
// Big Fish - Sound Operator - SD9
// IDEA 2025 - Light Designer and Show Operator - Avo TT2
// Should also mention a couple misc events nights i.e ACC Halloween 2023 (Light Op), CGCU Dinner (General Crew?), CSSA (Production Manager), Acapella Competition

const fringe = {"showName": "Stop The Press (Edinburgh Fringe 2022)",
    "short": "DramSoc Fringe Production and my first show!",
    "role": "Show Designer/Operator",
    "tech": "Phantom FLX S24/QLab4",
    "date": "08/22",
    "imageDir": "/fringe.jpg"
};

const earthquakes = {"showName": "Earthquakes in London",
    "short": "DramSoc Main Show 22/23",
    "role": "Assistant LD / Lighting Operator",
    "tech": "EOS",
    "date": "01/23",
    "imageDir": "/earthquakes.JPG"
};

const addamsFamily = {"showName": "Addams Family",
    "short": "MT Main Show 22/23",
    "role": "Mic Monkey",
    "tech": "Mics and Tape lol",
    "date": "03/23",
    "imageDir": "/addamsFamily.jpeg"
};

const pillowman = {"showName": "The Pillowman",
    "short": "DramSoc Studio Show Spring 23",
    "role": "Show Designer/Operator",
    "tech": "EOS/QLab4",
    "date": "03/23",
    "imageDir": "/pillowman.JPG"
};

const mt2423 = {"showName": "MT24 - Wicked",
    "short": "24h to put on Wicked the Musical",
    "role": "Crew",
    "tech": "",
    "date": "06/23",
    "imageDir": "/mt2423.jpg"
};

const grinolio = {"showName": "Grinolio's Home",
    "short": "Comedy at DramFest 23",
    "role": "Super Mario",
    "tech": "I acted (oh no)",
    "date": "06/23",
    "imageDir": "/grinolio.jpg"
};

// const upbeat23 = {"showName": "Upbeat Rocks 23",
//     "short": "Children Dance/Song Showcase",
//     "role": "Lighting Operator",
//     "tech": "Avo TT2",
//     "date": "06/23",
//     "imageDir": "/idea25.jpg"
// };

// Creating Gabriel

const octShow23 = {"showName": "October Show 23",
    "short": "DramSoc/MTSoc Year Opening Double Bill",
    "role": "Lead Lighting Designer / DSM",
    "tech": "EOS",
    "date": "10/23",
    "imageDir": "/octShow23.JPG"
};

const cgcuDinner23 = {"showName": "CGCU Dinner 23",
    "short": "24h Crewing Door to Door",
    "role": "Crew",
    "tech": "Avo TT2",
    "date": "10/23",
    "imageDir": "/cgcuDinner.jpg"
};

const halloweenACC23 = {"showName": "Halloween ACC 23",
    "short": "IC Club Night",
    "role": "Crew / Light Op",
    "tech": "Avo TT2",
    "date": "11/23",
    "imageDir": "/acc23.jpg"
};

const revue23 = {"showName": "Revue 23",
    "short": "Musical Theatre Song Showcase",
    "role": "Lead Lighting Designer / DSM / Production Manager",
    "tech": "EOS",
    "date": "12/23",
    "imageDir": "/revue23.jpg"
};

const romeoAndJuliet = {"showName": "Romeo and Juliet",
    "short": "DramSoc Main 23/24",
    "role": "Lead Lighting Designer / DSM",
    "tech": "EOS",
    "date": "01/24",
    "imageDir": "/romeoAndJuliet.jpg"
};

const cssa24 = {"showName": "CSSA 2024",
    "short": "CSSA Cultural Society Yearly Show",
    "role": "Production Manager",
    "tech": "",
    "date": "02/24",
    "imageDir": "/cssa.jpeg"
};

const acapellaCompetition = {"showName": "OAC 2024",
    "short": "Acapella Competition Hosted at Imperial",
    "role": "Production Manager / Lighting Operator",
    "tech": "Avo TT2",
    "date": "02/24",
    "imageDir": "/oac2024.PNG"
};

const springAwakening = {"showName": "Spring Awakening",
    "short": "MTSoc Main 23/24",
    "role": "Production Manager / Lighting Designer / Lighting Operator",
    "tech": "EOS/When2Meet frfr",
    "date": "03/24",
    "imageDir": "/springAwakening.jpeg"
};

const bigFish = {"showName": "Big Fish",
    "short": "MTSoc Studio 23/24",
    "role": "Sound Operator",
    "tech": "SD9",
    "date": "03/24",
    "imageDir": "/bigFish.jpg"
};

const fashion24 = {"showName": "IC Fashion 2024",
    "short": "Imperial College Fashion Show",
    "role": "Lighting Operator",
    "tech": "Avo TT2",
    "date": "06/24",
    "imageDir": "/idea25.jpg"
};

const silfest24 = {"showName": "Silfest 24",
    "short": "Imperial Silwood Park Music Festival",
    "role": "Lighting Designer",
    "tech": "Avolites TT2",
    "date": "07/24",
    "imageDir": "/silfest24.jpg"
};

const idea2025 = {"showName": "IDEA 2025",
    "short": "Imperial Dance Showcase",
    "role": "Lighting Designer / Show Operator",
    "tech": "Avolites TT2",
    "date": "03/25",
    "imageDir": "/idea25.jpg"
};


const allShows = [
    fringe,
    earthquakes,
    addamsFamily,
    pillowman,
    mt2423,
    grinolio,
    // upbeat23,
    octShow23,
    cgcuDinner23,
    halloweenACC23,
    revue23,
    romeoAndJuliet,
    cssa24,
    acapellaCompetition,
    springAwakening,
    bigFish,
    fashion24,
    silfest24,
    idea2025
]
allShows.reverse();

export {allShows};
