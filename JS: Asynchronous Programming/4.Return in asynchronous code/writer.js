// writer.js
// Реализуйте асинхронную функцию, которая записывает данные по указанному пути и оповещает о завершении работы через переданный колбек. Экспортируйте функцию по умолчанию.

// import write from './writer.js';
 
// write('./myfile', 'data', () => {
//   console.log('success');
// });
// Подсказки:
// для записи в файл используйте функцию fs.writeFile().

export default (filePath, data, cb) => {
    fs.writeFile(filePath, data, cb);
  
  };