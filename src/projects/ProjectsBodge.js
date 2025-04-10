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
    "imageDir": "f1SimScorePred.png"
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
    "imageDir": "gwoExample.gif"
};

const tbps = {"projectName": "Team Based Problem Solving Project",
    "short": "Academic project in a group of 25, where I worked on our ML models.",
    "long": "The Physics department at Imperial offered a short-lived (only 2 years), professional skills module where all third year students would have to work as part of a group of 25 to solve a complex physics problem. This problem required knowledge of new physics, significant amounts of data analysis and drumroll, some machine learning. I was one of the few people on the ML subteam, developing a Random Forest approach to the classification problem (signal against background), though we eventually settled on a Boosted Decision Tree developed by a teammate - as other groups, we found it to breed better results after hyperparameter tuning. In weekly meetings with the wider groups, I relayed the ML teams progress and explained concepts, which made me the ideal candidate for presenting the Machine Learning section in our 30 minute presentation given to the other groups doing the project that term - the first and last time I presented to well over 100 people (I loved it).",
    "tech": "Python (sklearn/numpy/scipy/pandas)",
    "date": "12/2022",
    "imageDir": "PresentingTBPSCrop.jpg"
};

const compPhysProj = {"projectName": "Soliton Propagation",
    "short": "Simulation of strange physical phenomenon observed in water.",
    "long": "...where waves act like particles.",
    "tech": "Python (numpy/scipy/matplotlib)",
    "date": "12/2022",
    "imageDir": "solitonGaussianBreak.gif"
};

const articleRecommender = {"projectName": "Article Recommender",
    "short": "Simple Topic Analysis for Recommending Articles.",
    "long": "In doing some basic machine learning courses over the summer, I learnt of NNMF (Non-Negative Matrix Factorisation), a technique where a matrix (n by m) can be broken down into an approximate matrix multiplication form with a given number of dimensions (multiplication n x d to d x m, where we are free to choose d). An interesting application is in topic analysis; an article can be broken down into a proportion of times any given word appears within it. These proportion vectors can be put into a matrix, and once broken down into a multiplicative form, we retrieve d topics from the articles, and a break down of how much each article is about a certain topic. I built a proof of concept article recommender using this algorithm; using BeautifulSoup, I scraped articles from Sky News, performed NNMF on them to extract topics and then used a system of remembering a user's acceptance and rejections of recommendations to inform subsequent recommendations. I then added the functionality for a text-to-speech reading of the article once an article was accepted.",
    "tech": "Python (sklearn/bs4/tts)",
    "date": "10/2022",
    "imageDir": "/ttsUiSC.PNG"
};

const minesweeperCopy = {"projectName": "Minesweeper",
    "short": "Recreation of the classic MS game, with a solver.",
    "long": "Having grown to have a mild obsession with Minesweeper in my first couple years at uni, I wrote up the game from scratch in pyglet, an alternative to pygame which I found was a tonne more fun to work with. By being careful to follow at least the Single Responsibility Principle from SOLID at all times, I made it very easy to expand the game for myself; by using Adapter objects I was able to transform the backend's outputs to simple front-end ones, and then to write some game solvers. I initially attempted to train a deep learning agent, (DeepQ?), to solve the game with tensorflow2, having made it work with a simple game of blackjack. However, I found performance was poor, and eventually stumbled onto a paper which made it abundantly clear that my model would need an incredible amount of training to even be able to solve the simplest boards (think 500k games to get a 5x5 grid working - extremely wasteful compute time). I decided to solve the game algorithmically instead; I found a paper which presented the problem as a simultaneous equations. Using Gaussian Elimination and backtracing I was then able to make an algorithm which can handle all solvable games, and then added a heuristic to allow for the algorithm guessing.",
    "tech": "Python (pyglet/tensorflow2)",
    "date": "09/2022",
    "imageDir": "/MinesweeperSC.PNG"
};

const algoVisualiser = {"projectName": "Pathfinding Algorithm Visualisation",
    "short": "Visualisation of the A* algorithm using PyGame.",
    "long": "It's in nearly everyone's project portfolio, and is so it in mine - a simple visualisation of a pathfinding algorithm. Having experimented before with PyGame for my A Level Computing coursework, I had another stab, making a simple grid-based 2-D pathfinder where the user can input walls on the grid and let the algorithm figure out the optimal path. A small PyQt5 pop-up can be used to change grid parameters at runtime. I implemented a min-heap as part of the project for use by A*, and to have some confidence in what it was chucking out, wrote 35 unit tests.",
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