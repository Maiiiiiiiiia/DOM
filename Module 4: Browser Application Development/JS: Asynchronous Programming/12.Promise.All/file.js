
// Это упражнение вы уже делали, но теперь то же самое нужно сделать с помощью промисов.

// Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), которая считает размер переданной директории (не включая поддиректории).

// Пример:
// import { getDirectorySize } from './file.js';

// getDirectorySize('/usr/local/bin').then(console.log);
// Подсказка
// fsPromises.readdir - чтение содержимого директории
// path.join - конструирует пути
// fsPromises.stat - информация о файле
// _.sumBy - нахождение суммы в массиве


export const getDirectorySize = (dirPath) => {
    const promise1 = fsp.readdir(dirPath).then((fileNames) => {
      const absPaths = fileNames.map((fileName) => path.join(dirPath, fileName));
      const promises = absPaths.map((absPath) => fsp.stat(absPath));
      return Promise.all(promises);
    });
    return promise1.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'));
  };