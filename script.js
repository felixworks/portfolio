const appContent = [
  {
    number: 1,
    title: "Classic Authors Quiz",
    imagePath: "images/ClassicAuthorsQuiz-resized.png",
    description: `A quiz designed to separate the cultured from the raw. Given a book title, choose which author wrote it.<br><br>
        This is a fun, simple quiz with a snobbish grading metric. I created this with Anya Snow as an exercise to learn basic web app structure with jQuery.`,
    techStack: "HTML, CSS, and JavaScript",
    liveLink: "https://nw-iguana.github.io/bookquiz/",
    gitHub: "https://github.com/nw-iguana/bookquiz"
  },
  {
    number: 2,
    title: "Would I Like This Game?",
    imagePath: "images/WouldILikeThisGame-resized.png",
    description: `A simple and straightforward tool for users to investigate a particular game. No gimmicks or editorializing allowed. Searching for a game gives the user a rundown of the basic game information (platforms, description, genres, etc.) pulled from the GiantBomb API. Additionally, the most popular Twitch clip and the three most popular active Twitch streams are shown to provide examples of fun and genuine gameplay.`,
    techStack: "HTML, CSS, JavaScript, jQuery, GiantBomb API, Twitch API",
    liveLink: "https://felixworks.github.io/would-i-like-this-game/",
    gitHub: "https://github.com/felixworks/would-i-like-this-game"
  },
  {
    number: 3,
    title: "Squared Squirrel",
    imagePath: "images/SquaredSquirrel.png",
    description: `A grid-based browser game that rewards planning and spatial awareness. The goal is to navigate the squirrel back to its home tree while avoiding towers and eagles. The eagles only move when you do.`,
    techStack: "React, Express, Node, PostgreSQL",
    liveLink: "https://squared-squirrel-app.felixworks.now.sh/",
    gitHub: "https://github.com/felixworks/squared-squirrel-app"
  },
  {
    number: 4,
    title: "HomeSlice",
    imagePath: "images/HomeSlice.png",
    description: `A one-stop pizza shop builder for mom-and-pop restaurants – built by pizza enthusiasts for pizza enthusiasts! `,
    techStack: "React, Express, Node, PostgreSQL",
    liveLink: "https://homesliceapp.now.sh/",
    gitHub: "https://github.com/charlotteshih/homeslice-frontend"
  }
];

let selectedAppNumber = 0;

function generateSelectedApp(
  title,
  imagePath,
  description,
  techStack,
  liveLink,
  gitHub
) {
  let htmlApp = `
    <div class="selected-app-view">
        <img src="${imagePath}" alt="app-image" class="app-image">
    </div>
    <h3>${title}</h3>
    <div class="text-container"><p>${description}</p></div>
    <h4>Tech used: ${techStack}</h4>
    <div>
        <a href="${liveLink}" target="_blank">Live website</a>
        <a href="${gitHub}" target="_blank">Github Repo</a>
    </div>`;
  return htmlApp;
}

function renderSelectedApp() {
  let title = appContent[selectedAppNumber - 1].title;
  let imagePath = appContent[selectedAppNumber - 1].imagePath;
  let description = appContent[selectedAppNumber - 1].description;
  let techStack = appContent[selectedAppNumber - 1].techStack;
  let liveLink = appContent[selectedAppNumber - 1].liveLink;
  let gitHub = appContent[selectedAppNumber - 1].gitHub;
  let html = generateSelectedApp(
    title,
    imagePath,
    description,
    techStack,
    liveLink,
    gitHub
  );
  $(".selected-app-container").html(html);
}

function handleMenuClick() {
  $(".flex-nav-container").on("click", ".menu-button", function(event) {
    // shows/hides contact info when hamburger menu is clicked
    $(".mobile.contact").toggle();
  });
}
function handleMenuLinkClick() {
  $(".flex-nav-container").on("click", ".contact-links", function(event) {
    $(".mobile.contact").toggle();
  });
}

function handleAppClick() {
  $(".app-tiles").on("click", ".tile-image", function(event) {
    /* assumes that the alt attribute in each 
        tile <img> has the correct ordered number at the end of the 
        string*/
    selectedAppNumber = $(this).attr("data-index");
    renderSelectedApp();
  });
}

function main() {
  handleMenuClick();
  handleAppClick();
}

$(main());
