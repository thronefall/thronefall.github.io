class Score {
  constructor(username, score, video) {
    this.username = username;
    this.score = score;
    this.video = video;

    this.p5Elt = createElement('iframe');
  }
}

document.querySelector('#neuland').addEventListener('click', function() {
  displayScores('neuland');
});
document.querySelector('#nordfels').addEventListener('click', function() {
  displayScores('nordfels');
});
const highscoresDiv = document.querySelector('.highscores');

function displayScores(level) {

}

let jsonFile
function setup() {
  jsonFile = loadJSON(
    'https://thronefall-community.github.io/highscores/scores.json',
    processJSON
  );
}

function processJSON() {

}
