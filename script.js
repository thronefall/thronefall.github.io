const levelSelected = document.querySelector('#level-selected');
const verified = document.querySelector('.verified');
const unverified = document.querySelector('.unverified');


document.querySelector('#neuland').addEventListener('click', function() {
  displayScores('neuland');
});
document.querySelector('#nordfels').addEventListener('click', function() {
  displayScores('nordfels');
});


function displayScores(level) {

}

class Score {
  constructor(username, score, video) {
    this.username = username;
    this.score = score;
    this.video = video;

    this.p5Elt = createElement('iframe');
  }
}
