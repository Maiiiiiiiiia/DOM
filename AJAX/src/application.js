// Задача этого упражнения — реализовать автозаполнение.

// На странице присутствуют элементы input с атрибутами data-autocomplete и data-autocomplete-name, к которым нужно привязаться. Атрибут data-autocomplete содержит путь, по которому нужно сделать запрос на получение данных. Атрибут data-autocomplete-name содержит имя, по которому необходимо найти на странице список ul с точно таким же атрибутом и значением. В этом списке выводятся данные.

// src/application.js
// Реализуйте автозаполнение.

// При изменении строки в поле ввода (ввод символов или их удаление), необходимо выполнить запрос на сервер с query-параметром search, значением которого будет строка введенная в input. Запрос должен уйти по пути, который был указан в атрибуте data-autocomplete. Сервер возвращает массив из стран на английском языке.

// Если этот массив не пустой, то нужно заполнить список. Посмотреть его нахождение можно двумя способами — использовать public/index.html или открыть исходный код страницы в веб-доступе таким образом:

// <ul data-autocomplete-name="country">
//   <li>pakistan</li>
//   <li>panama</li>
//   <li>paraguay</li>
// </ul>
// Если с сервера пришел пустой список, то нужно вывести:

// <ul data-autocomplete-name="country">
//   <li>Nothing</li>
// </ul>
// Подсказки
// Для формирования правильного запроса на сервер, используйте URL
// Текущий хост можно извлечь так window.location.origin
// Значение поля input необходимо брать из события так: e.target.value
// Изучите в теории, как создается объект URL и добавляются параметры query string
// Используйте async/await
// Ваш код должен работать, даже если на странице множество автозаполнений
// Используйте событие input


import 'whatwg-fetch';

export default () => {
  // BEGIN (write your solution here)
  const autocompleteElements = document.querySelectorAll('input[data-autocomplete]');
  autocompleteElements.forEach((el) => {
    const route = el.dataset.autocomplete;
    const dataAutocompleteName = el.dataset.autocompleteName;
    el.addEventListener('input', async (e) => {
      const list = document.querySelector(`ul[data-autocomplete-name="${dataAutocompleteName}"]`);
      const url = new URL(route, window.location.origin);
      url.searchParams.append('search', e.target.value);
      const response = await fetch(url);
      const items = await response.json();
      const options = items.length === 0 ? ['Nothing'] : items;
      const listHTML = options.map((item) => `<li>${item}</li>`).join('\n');
      list.innerHTML = listHTML;
    });
  });
  // END
};
