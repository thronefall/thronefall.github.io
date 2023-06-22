const apiKey = 'AIzaSyAxojOxEvQYES6H6QQlunJh00biz576l7s';
const formId = '1OsEDowlQoepXk795W21XQxWeYCucVjakS8tPB1Qvsd0';

const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${formId}/values/FormResponses1?key=${apiKey}`;

/*
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process the retrieved responses
    console.log(data);
    console.log(data.values);
    for(let i = 1; i < data.values.length; i++) {
      score = data.values[i];
      scores.push(new Score(score[1], score[3], score[4], score[2]));
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
  */

let scores = [];

const levelSelected = document.querySelector('#level-selected');
const verified = document.querySelector('.verified');
const unverified = document.querySelector('.unverified');

document.querySelector('#neuland').addEventListener('click', function() {
  displayScores('Neuland');
});
document.querySelector('#nordfels').addEventListener('click', function() {
  displayScores('Nordfels');
});


function displayScores(level) {
unverified.innerHTML = '';

  let display = [];
  scores.forEach(score => {
    if(score.level == level) {
      display.push(score);
    }
  });

  display.sort(compare);
  display.forEach(score => {
    let tmpDiv = createElement('div', score.username + ' : ' + score.score);
    tmpDiv.parent(unverified);
  });
}

function compare(a, b) {
  if(float(a.score) < float(b.score)) {
    return 1;
  }
  if(float(a.score) > float(b.score)) {
    return -1;
  }
  return 0;
}

class Score {
  constructor(username, score, gold, level) {
    this.username = username;
    this.score = score;
    this.gold = gold;
    this.level = level;
  }
}

function setup() {
  createCanvas(0,0);

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Process the retrieved responses
      console.log(data);
      console.log(data.values);
      for(let i = 1; i < data.values.length; i++) {
        score = data.values[i];
        scores.push(new Score(score[1], score[3], score[4], score[2]));
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
