// Реализуйте и экспортируйте асинхронную функцию getTypes(), которая анализирует список переданных путей и возвращает массив (в промисе), с описанием того, что находится по каждому из путей в виде строк 'directory' и 'file'.

// Эта функция должна отрабатывать успешно в любом случае. Если во время выполнения асинхронной операции возникла ошибка, то значением для этого пути будет null. Для простоты считаем, что в эту функцию всегда передается как минимум один путь для обработки (иначе придется задействовать механизм, который проходится в курсах далее).

// Примеры
// import { getTypes } from './file.js';

// getTypes(['/etc', '/etc/hosts', '/undefined']).then(console.log);
// // ['directory', 'file', null]
// Подсказки
// fsPromises.stat - информация о файле или директории. Для проверки на директорию используйте метод isDirectory.
// Методы then и catch не меняют сам промис, а возвращают новый

// My solution:

const isDir = (item) => (item.isDirectory() ? 'directory' : 'file');

export const getTypes = (filePaths) => filePaths.reduce((acc, path) => {

    const newAcc = acc.then((contents) => fsp.stat(path)
      .then((stats) => contents.concat(isDir(stats)))
      .catch(() => contents.concat(null)))
      return newAcc;
  }, Promise.resolve([]));

  // Teachers solution:

// const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file');

// export const getTypes = (filesPath) => {
//   // функция получает путь и аккумулятор из reduce, выполняет попытку получить stat,
//   // добавляет в аккумулятор строку или null и возвращает обновлённый аккумулятор
//   const processPath = (filepath, result) => fsp.stat(filepath)
//     .then((data) => [...result, getTypeName(data)])
//     .catch(() => [...result, null]);

//   const resultPromise = filesPath.reduce(
//     // promise - это аккумулятор, обёрнутый в промис, поэтому на нём вызывается then
//     // result - предыдущее значение аккумулятора
//     (promise, filepath) => promise.then((result) => processPath(filepath, result)),
//     Promise.resolve([]),
//   );
//   return resultPromise;
// };
