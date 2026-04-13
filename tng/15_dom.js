const parentUl = document.querySelector('#ul');
const apple1 = document.querySelector('#apple');

const newLi = document.createElement('li');
newLi.textContent = '장기';
parentUl.insertBefore(newLi, apple1);

const queryLi = document.querySelectorAll('li');
queryLi.forEach((item, i) => {
  if (item.textContent === '어메이징브릭') {
    item.style.backgroundColor = 'beige';
  }
  if ((i + 1) % 2 === 0) {
    item.style.color = 'red';
  } else {
    item.style.color = 'blue';
  }
});