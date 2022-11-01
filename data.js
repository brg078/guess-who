
let people = [
  {
    name: 'Dev',
    githubUsername: 'devjanaprime',
    //image: "https://avatars.githubusercontent.com/u/17906158?v=4"
  },
  {
    name: 'Dane',
    githubUsername: 'DoctorHowser',
    image: 'https://avatars.githubusercontent.com/u/11574995?v=4'
    //image: <img src="https://github.com/christopher-black.png?size=250" alt="Profile image of Chris"></img>
  },
  {
    name: 'Matt',
    githubUsername: 'matthew-black',
    //image: 'https://avatars.githubusercontent.com/u/5817534?v=4'
  },
  {
    name: 'Kris',
    githubUsername: 'kdszafranski',
    //image: 'https://avatars.githubusercontent.com/u/5541481?v=4'
  },
  {
    name: 'Edan',
    githubUsername: 'eschwartz',
    //image: 'https://avatars.githubusercontent.com/u/1153371?v=4'
  },
  {
    name: 'Liz',
    githubUsername: 'emkerber',
    //image: 'https://avatars.githubusercontent.com/u/17734101?v=4'

  },
  {
    name: 'Chris',
    githubUsername: 'christopher-black',
    //image: 'https://avatars.githubusercontent.com/u/25748592?v=4'
  },
  {
    name: 'Brett',
    githubUsername: 'brg078',
    //image:  'https://avatars.githubusercontent.com/u/110694646?v=4'
  }
];

$(document).ready(onReady);

function onReady() {
  console.log('jquery is ready!');
  console.log('Here are all the available people:', people);
  $('.startbutton').on('click', startGame);
  renderPeopleList();
}

function renderPeopleList() {
  $('.peopleToLoad').empty();
  for(let person of people) {
      $('.peopleToLoad').append(`
          <div id="${person.name}">
              <p>${person.name},
              ${person.githubUsername}
              <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of Chris"></img>
              </p>
              
          </div>  
      `);
  }
}

function startGame() {
  console.log('let the games begin!');
  alert('Lets Go! Click on Dev!');
  correctClick();
  //$('.promptPlayer').append('Click on:', nameVar);
  //function randomNumber();

//function correctClick()
  //if $('#Dev').on('click') {
  //  alert('You got it!')
  //} else (alert('nope!')

  // )



  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}


  //function randomNumber(min, max){
    //return Math.floor(Math.random() * (1 + max - min) + min);
}
