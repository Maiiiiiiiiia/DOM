// src/prettify.js
// Реализуйте и экспортируйте функцию по умолчанию, которая находит дочерние текстовые узлы внутри элемента <div> и оборачивает текст в параграф. Переводы строк и отступы изменяться не должны:

// // <body>
// //   <p>Boom</p>
// //   text
// //   <div>Bam</div>
// // </body>
// prettify(document);
// console.log(document.body.innerHTML);
// // <body>
// //   <p>Boom</p>
// //   text
// //   <div><p>Bam</p></div>
// // </body>

// Алгоритм
// Выберите все нужные узлы по тегу
// Обойдите каждый выбранный узел
// Найдите в дочерних узлах childNodes текстовые узлы
// Замените их на новые узлы, содержащие тег <p>
// Подсказки
// Очистка строки от пробельных символов: trim
// Замена узлов: node.replaceWith()
// Проверка текстовых узлов: node instanceof Text


// BEGIN
export default (document) => {
    const divs = [...document.getElementsByTagName('div')];
    divs.forEach((div) => {
      const textNodes = [...div.childNodes]
        .filter((child) => child instanceof Text)
        .filter((child) => child.textContent.trim() !== '');
      textNodes.forEach((node) => {
        const p = document.createElement('p');
        p.textContent = node.textContent;
        node.replaceWith(p);
      });
    });
  };
  // END