// Реализуйте и экспортируйте асинхронную функцию touch(), которая создаёт файл, если его не существует. Если файл существует, то функция должна успешно завершиться.

// import { touch } from './file.js';
 
// touch('/myfile').then(() => console.log('created!'));
 
// // Повторный вызов успешно завершается
// touch('/myfile').then(() => console.log('created!'));
// Подсказка
// fsPromises.access — проверка существования файла


// BEGIN
export const touch = (filepath) => fsp.access(filepath)
  // в случае, если файла не существует, функция выбрасывает ошибку
  // ловим эту ошибку и создаем файл
  .catch(() => fsp.writeFile(filepath, ''));
// END