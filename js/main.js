document.addEventListener('DOMContentLoaded', function(){
  const statusHeading = document.querySelector('.status');
  statusHeading.innerText = "FLIP THE SWITCH MAN, IT'S TOO BRIGHT!";
  const lightSwitch = document.querySelector('button');
  const body = document.querySelector('body');

  lightSwitch.addEventListener('click', flipSwitch);

  // function declaration
  function flipSwitch(event) {
    if (event.target.classList.contains('on')) {
      event.target.classList.remove('on');
      event.target.classList.add('off');
      body.className = 'dark';
      statusHeading.innerText = "Hey, who turned off the lights?";
    } else {
      event.target.classList.remove('off');
      event.target.classList.add('on');
      body.className = 'light';
      statusHeading.innerText = "It's so bright in here!";
    }
  }

});
