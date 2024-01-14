// Реализуйте и экспортируйте по умолчанию асинхронную функцию, 
// которая читает данные файла по указанному пути и выводит их в консоль.

//import fs from 'fs';

export default (data) => {
  fs.readFile(data, 'utf-8', (_error, data) => console.log(data));
};
