// Реализуйте логику показа цитат Тото Роббинса.

// Каждое нажатие на кнопку в веб-доступе должно загружать новую цитату с бэкенда и отображать вместо старой. Вся необходимая верстка уже добавлена, ее можно увидеть и изучить в веб-доступе.

// Запрос на сервер:

// import axios from 'axios';
 
// // Где-то внутри функций
// const response = await axios.get(routes.randomQuotePath());
// console.log(response.data.quote); // тут цитата


// @ts-check
import axios from 'axios';

const routes = {
  randomQuotePath: () => '/api/quotes/random',
};

export default () => {
  // BEGIN (write your solution here)
  const button = document.querySelector('button');

  button.addEventListener('click', async () => {
    const response = await axios.get(routes.randomQuotePath());
    document.querySelector('.blockquote').textContent = response.data.quote;
  });
  // END
};

// Teachers solution

  // BEGIN
  const button = document.querySelector('button');
  const result = document.querySelector('#result');
  button.addEventListener('click', async () => {
    const response = await axios.get(routes.randomQuotePath());
    result.textContent = response.data.quote;
  });
  // END