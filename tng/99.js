const url = 'https://picsum.photos/v2/list?page=2&limit=10';

const nextbtn = document.querySelector('#nextbtn');
const resetbtn = document.querySelector('#resetbtn');
let page = 1;
const limit = 3;

nextbtn.addEventListener('click', async (e) => {
  e.preventDefault
  const baseUrl = 'https://picsum.photos/v2/list';

  const url = `${baseUrl}?page=${page}&limit=${limit}`;

  try {
    const response = await axios.get(url);

    console.log(response);
    const container = document.querySelector('.container')
    
    response.data.forEach(item => {
      const newCardImg = document.createElement('div')
      newCardImg.style.backgroundImage = `url('${item.download_url}')`;
      newCardImg.classList.add('card-img');

      const newAuthor = document.createElement('span');
      newAuthor.textContent = `${item.id}: ${item.author}`;

      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.appendChild(newCardImg);
      newCard.appendChild(newAuthor);

      container.appendChild(newCard);
    });
    page++;
    
  } catch(error) {
    console.log(error);
  }
});

resetbtn.addEventListener('click', (e) => {
    e.preventDefault
    const container = document.querySelector('.container')
    container.textContent = '';
    page = 1;
});