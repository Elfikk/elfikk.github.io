// I should also include crappy projects I did as a kid here, because why not. Not everything I have on display needs to be amazing - show some progression!

// Sierpinski and Other Fractals
// Mandelbrot and Julia Set Drawing
// Gravitational Sim
// Matrix Solver

const thisDamnSite = {"projectName": "Personal Website",
    "short": "Look around...",
    "long": "",
    "tech": "React, JS, HTML, CSS",
    "date": "04/2025",
    "imageDir": "/SiteFrontPageSC.PNG"
};

const f1Powerpoint = {"projectName": "F1 Competition 2024 Powerpoint",
    "short": "Automation of 200 Slide Powerpoint Creation",
    "long": "In 2024, I ran an F1 predictions competition for the second year in a row for friends. To display all the question results in a sensible format, I made a 200 slide powerpoint for my friends in 2023, so decided to use a Python package to make the powerpoint that time. I'll be able to reuse a lot of it in the coming years :) To display the scores as the season progressed, I also made this animation to the right, showing an interpolated view of the how the mean scores of different players evolved with time - I managed to come out in P1, being the green car, despite being significantly behind for a good portion of the season!",
    "tech": "Python (python-pptx)",
    "date": "12/2024",
    "imageDir": "theAnimation.gif" // Competition GIF
};

// This still needs an integration with DeepSeek or ChatGPT
const f1Sim = {"projectName": "F1 2024 Simulation",
    "short": "Statistical Simulation of the 2024 Season",
    "long": "In 2024, I ran an F1 predictions competition for the second year in a row for friends. Curious about what the outcomes could look like for the rest of the season, I took statistics from the season to generate sensible F1 seasons, allowing me to look at points distributions for all the questions.",
    "tech": "Python (numpy/scipy/matplotlib)",
    "date": "06/2024",
    "imageDir": "/SiteFrontPageSC.PNG"
};

const worldDomProj = {"projectName": "World Domination",
    "short": "Recreation of a small self-playing videogame.",
    "long": "Recreation of a small videogame upkept by a friend. The game starts off with a grid of players. Each turn, a tile is picked and its owner attacks one of its neighbours, with their chance of success being proportional to the relative areas the neighbours occupy. It's a simple game, and can be quite satisfying to watch, as one players engulfs everyone else. I used this project to refresh on the basic web stack, having not used it in years, before moving on to working on this website. A possible expansion would be to include other map types - the original I based this on divided the entire Earth into small components and let them fight out. This is a neat proof of concept version instead!",
    "tech": "HTML, CSS, JS",
    "date": "12/2023",
    "imageDir": "/WorldDomSC.PNG"
};

const androidStudioPOC = {"projectName": "Android Chaquopy Proof of Concept",
    "short": "Proof of concept in Android Studio using the Chaquopy library to integrate matplotlib in an app.",
    "long": "",
    "tech": "Android Studio, Java, Python",
    "date": "08/2023",
    "imageDir": "/AppSC.PNG"
};

const bscProj = {"projectName": "BSc Project - GWO Algorithm",
    "short": "Grey Wolf Optimisation algorithm for potential use in T2K.",
    "long": "The T2K experiment is an experiment based in Japan, one of the few in the world trying to detect neutrinos (as an aside - from the cost per neutrino detection so far is about a million dollars each). The experiment is effectively trying to find minima of a non-trivial 600-dimensional parameter space, which lets us estimate physical neutrino parameters. Classic optimisation algorithms like gradient-descent struggle, due to the amount of local minima within the space; Monte Carlo methods are currently used, though this still has issues i.e with dealing with discrete paramaters within the dimensions. The T2K group is therefore experimenting with class of optimisers known as swarm-based algorithms, algorithms are quote on quote inspired by natural phenomena, employing a large number of agents exploring a space via some form of heuristic to try and find the minimum. I looked at an algorithm which is motivated by wolf-hunting behaviour, Grey Wolf Optimisation (GWO). I implemented the algorithm in Python, tested it on different test functions in low dimensions to understand its behaviour, and then implemented it in C++ to run on the T2K computing clusters.",
    "tech": "Python (numpy/matplotlib), C++",
    "date": "03/2023",
    "imageDir": "/gwoExample.gif"
};

const tbps = {"projectName": "Team Based Problem Solving Project",
    "short": "Academic project in a group of 25, where I worked on our ML models.",
    "long": "",
    "tech": "Python (sklearn/numpy/scipy/pandas)",
    "date": "12/2022",
    "imageDir": "/Presenting.PNG"
};

const compPhysProj = {"projectName": "Soliton Propagation",
    "short": "Simulation of strange physical phenomenon observed in water.",
    "long": "...where waves act like particles.",
    "tech": "Python (numpy/scipy/matplotlib)",
    "date": "12/2022",
    "imageDir": "/Minesweeper.PNG"
};

const articleRecommender = {"projectName": "Article Recommender",
    "short": "Simple Topic Analysis for Recommending Articles.",
    "long": "",
    "tech": "Python (sklearn/tts)",
    "date": "10/2022",
    "imageDir": "/ttsUiSC.PNG"
};

const minesweeperCopy = {"projectName": "Minesweeper",
    "short": "Recreation of the classic MS game, with a solver.",
    "long": "",
    "tech": "Python (pyglet/tensorflow2)",
    "date": "09/2022",
    "imageDir": "/MinesweeperSC.PNG"
};

const algoVisualiser = {"projectName": "Pathfinding Algorithm Visualisation",
    "short": "Visualisation of the A* algorithm using PyGame.",
    "long": "",
    "tech": "Python (pygame/pyqt5/unittest)",
    "date": "06/2022",
    "imageDir": "/PathfindingSC.PNG"
};

// allProjs - List of maps describing projects (woah)
// Map format - ID, ProjectName, Short, Long, Tech, Date, ImageDir
// Short - Short description that must fit in a project summary container.
// Long - Long form description of the project, fits in project showcase.
const allProjs = [
    thisDamnSite,
    f1Powerpoint,
    f1Sim,
    worldDomProj,
    androidStudioPOC,
    bscProj,
    tbps,
    compPhysProj,
    articleRecommender,
    minesweeperCopy,
    algoVisualiser
];

export {allProjs};