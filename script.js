const appContent = [
    {
        number: 1,
        title: "Classic Authors Quiz",
        imagePath: "ClassicAuthorsQuiz-resized.png",
        description: `A quiz designed to separate the cultured from the raw. Given a book title, choose which author wrote it.<br><br>
        This is a fun, simple quiz with a snobbish grading metric. I created this with Anya Snow as an exercise to learn basic web app structure with jQuery.`,
        techStack: "HTML, CSS, and JS",
        liveLink: "https://nw-iguana.github.io/bookquiz/",
        gitHub: "https://github.com/nw-iguana/bookquiz"
    },
    {
        number: 2,
        title: "App 2",
        imagePath: "https://via.placeholder.com/800x428",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        techStack: "[insert tech buzzwords here]",
        liveLink: "N/A",
        gitHub: "N/A"
    },
    {
        number: 3,
        title: "App 3",
        imagePath: "https://via.placeholder.com/800x428",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        techStack: "[insert tech buzzwords here]",
        liveLink: "N/A",
        gitHub: "N/A"
    }
];

let selectedAppNumber = 0;

function generateSelectedApp(title, imagePath, description, techStack, liveLink, gitHub) {
    let htmlApp = `
    <div class="selected-app-view">
        <img src="${imagePath}" alt="app-image" class="app-image">
    </div>
    <h3>${title}</h3>
    <div class="text-container"><p>${description}</p></div>
    <h4>Tech used: ${techStack}</h4>
    <div>
        <a href="${liveLink}">Live website</a>
        <a href="${gitHub}">Github Repo</a>
    </div>`;
    return htmlApp;
}

function renderSelectedApp() {
    let title = appContent[selectedAppNumber-1].title;
    let imagePath = appContent[selectedAppNumber-1].imagePath;
    let description = appContent[selectedAppNumber-1].description;
    let techStack = appContent[selectedAppNumber-1].techStack;
    let liveLink = appContent[selectedAppNumber-1].liveLink;
    let gitHub = appContent[selectedAppNumber-1].gitHub;
    let html = generateSelectedApp(title, imagePath, description, techStack, liveLink, gitHub);
    $('.selected-app-container').html(html);

}

function handleMenuClick() {
    $('.flex-nav-container').on('click', '.menu-button', function(event) {
        // shows/hides contact info when hamburger menu is clicked
        $('.mobile.contact').toggle();
        // console.log("Button was clicked");
    });
}

function handleAppClick() {
    $('.app-tiles').on('click', '.tile-image', function(event) {
        /* assumes that the alt attribute in each 
        tile <img> has the correct ordered number at the end of the 
        string*/
        selectedAppNumber = $(this).attr('alt').slice(-1);
        // console.log(selectedAppNumber);
        renderSelectedApp();
    });
}

function main() {
    handleMenuClick();
    handleAppClick();
};

$(main());