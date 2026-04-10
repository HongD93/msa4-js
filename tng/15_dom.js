const parentContainer = document.querySelector('#ul');
const apple1 = document.querySelector('#apple');

const newLi = document.createElement('li');
newLi.textContent = '장기';
parentContainer.insertBefore(newLi, apple1);

const target = '어메이징브릭';
const queryAll = document.querySelectorAll('.none-li');
queryAll.forEach(item => {
  if (item.textContent === target) {
    item.style.backgroundColor = 'beige';
  }
});

const queryLi = document.querySelectorAll('li');
queryLi.forEach((item, i) => {
  if (i % 2 === 1) {
    item.style.color = 'red';
  } else {
    item.style.color = 'blue';
  }
});