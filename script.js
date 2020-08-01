init();

let cur = checkSun();
let i = 0;
const txt = `Hi, I'm Antonio Mentone. 24. Computer Science passionate. During this time I am taking German lessons at school and every day I try to improve my English by myself. In my head I want to complete my university route with a master's degree in data science or software engineering, doing it with a part-time job would be perfect so I can gain work experience. I don't know the causes that brought you here but if you need anything else I'm available on several social networks or send me an email.`;

sleep(3000).then(() => {
  document
    .querySelector('.command__man--me')
    .insertAdjacentHTML('afterend', '<br>');
  typing(txt, '.result__query', 35);
});

(() => {
  const currentTime = new Date();
  const currentTimeMs = dateToMs(currentTime);
  const remain = (currentTime.getHours() + 1) * 3600000 - currentTimeMs;
  setTimeout(checkState, remain + 5000);
})();

function typing(text, element, speed) {
  if (i < text.length) {
    document.querySelector(element).innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, speed, text, element, speed);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function minimize() {
  var display = document.querySelector('.hero-body').style.display;
  if (display !== 'none') {
    document.querySelector('.hero-body').style.display = 'none';
    document.querySelector('hr').style.display = 'none';
    document.querySelector('.terminal').style.height = '15%';
    document
      .querySelector('.item__maximize')
      .removeEventListener('click', maximize);
    document.querySelector('.item__maximize').style.opacity = '0.2';
  } else {
    document.querySelector('.hero-body').style.display = 'initial';
    document.querySelector('hr').style.display = 'initial';
    document.querySelector('.terminal').style.height = '90%';
    document
      .querySelector('.item__maximize')
      .addEventListener('click', maximize);
    document.querySelector('.item__maximize').style.opacity = '1';
  }
}

function maximize() {
  document.querySelector('body').classList.toggle('body__padding');
  const result = document
    .querySelector('#terminal__container')
    .classList.toggle('terminal__max');

  document
    .querySelector('#terminal__container')
    .classList.toggle('is-fullheight');

  document.querySelector('.hero-body').style.alignItems = 'stretch';

  if (result) {
    document
      .querySelector('.item__minimize')
      .removeEventListener('click', minimize);
    document.querySelector('.item__minimize').style.opacity = '0.2';
  } else {
    document
      .querySelector('.item__minimize')
      .addEventListener('click', minimize);
    document.querySelector('.item__minimize').style.opacity = '1';
  }
}

function changeTheme() {
  Array.from(
    document.querySelectorAll('.has-background-grey-dark')
  ).forEach((cur) => cur.classList.toggle('has-background-white-bis'));

  Array.from(
    document.querySelectorAll('.has-background-grey-darker')
  ).forEach((cur) => cur.classList.toggle('has-background-white-ter'));

  Array.from(document.querySelectorAll('.has-text-white')).forEach((cur) =>
    cur.classList.toggle('has-text-grey-dark')
  );
}

function dateToMs(date) {
  return (
    date.getHours() * 3600000 +
    date.getMinutes() * 60000 +
    date.getSeconds() * 1000
  );
}

function checkState() {
  if (cur != checkSun()) {
    console.log(cur);
    changeTheme();
    cur = checkSun();
  } else {
    console.log(cur);
    setTimeout(checkState, 3605000); // 5 seconds after
  }
}

function checkSun() {
  const hour = new Date().getHours();
  if (hour > 6 && hour < 19) return true;
  return false;
}

function init() {
  if (checkSun()) {
    changeTheme();
  }

  document
    .querySelector('.themeChanger')
    .addEventListener('click', changeTheme);
  document.querySelector('.item__minimize').addEventListener('click', minimize);
  document.querySelector('.item__maximize').addEventListener('click', maximize);
  document.querySelector('.item__close').addEventListener('click', () => {
    location.reload();
  });
}
