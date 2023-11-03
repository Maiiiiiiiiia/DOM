// normalize.js
// Реализуйте и экспортируйте по умолчанию функцию, которая нормализует имена классов для всех элементов на странице. Изначально названия всех классов написаны в стиле kebab-case, а при нормализации нужно изменить их названия на стиль camelCase: text-center => textCenter.

// Попробуйте решить эту задачу без использования регулярных выражений.

// Примеры
// // <body>
// //   <div class="text-center row-b">Bam</div>
// // </body>
// normalize(document);
// console.log(document.body.innerHTML);
// // <body>
// //   <div class="textCenter rowB">Bam</div>
// // </body>
// Подсказки
// Самый простой способ найти все элементы в документе — это document.body.getElementsByTagName('*')
// Приведение к camelCase https://lodash.com/docs#camelCase
// Замена классов replace у объекта classList


export default (document) => { 
    const allEl = Array.from(document.body.getElementsByTagName('*'));
    allEl.forEach((el) => {
      el.classList.forEach((curClass) => 
        el.classList.replace(curClass, camelCase(curClass)))
      }) 
    };

// Teachers solution:
export default (document) => {
    const allNodes = [...document.body.getElementsByTagName('*')];
    allNodes.forEach((node) => {
      const process = (item) => node.classList.replace(item, camelCase(item));
      node.classList.forEach(process);
    });
  };
