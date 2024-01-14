// Реализуйте и экспортируйте асинхронную функцию reverse(), которая изменяет порядок расположения строк в файле на обратный. Функция должна перезаписать файл.

// # file.txt
// one
// two
// import { reverse } from './file.js';
 
// reverse('file.txt');
// // two
// // one

// BEGIN
// читаем содержимое файла
export const reverse = (filepath) => fsp.readFile(filepath, 'utf-8')
// работаем с содержимым: переворачиваем строку
// и записываем результат в тот же файл
  .then((data) => {
    const preparedData = data.split('\n').reverse().join('\n');
    return fsp.writeFile(filepath, preparedData);
  });
// END