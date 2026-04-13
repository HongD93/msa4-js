const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert('숨어있는 div를 찾아주세요.');
});
const container = document.querySelector('.container');
const over = () => {
  alert('두근두근');
}

function mouse() {
  container.addEventListener('mouseenter', over);
}
mouse();

function random() {
  const x = Math.random() * (window.innerWidth - 200);
  const y = Math.random() * (window.innerHeight - 200);
  container.style.left = x + 'px';
  container.style.top = y + 'px';
};

container.addEventListener('click', () => {
  if (container.style.borderStyle === 'solid') {
    alert('숨는다');
    container.style.borderStyle = 'none';
    container.style.backgroundColor = 'white';
    mouse();
    random();
  } else {
    alert('들켰다');
    container.style.borderStyle = 'solid';
    container.style.backgroundColor = 'red';
    container.removeEventListener('mouseenter', over);
  };
});

