// info.js
// Реализуйте и экспортируйте асинхронную функцию compareFileSizes(), которая сравнивает размеры двух файлов и передает результат сравнения в переданную callback-функцию. Если первый файл больше второго, то она передает единицу, если размеры равны, то ноль, иначе — -1.

// import { compareFileSizes } from './info.js';

// compareFileSizes('filepath1', 'filepath2', (_err, result) => console.log(result));
// Подсказка
// Для реализации этого задания, нужно воспользоваться функцией fs.stat, которая использовалась в примерах теории
// Math.sign

// @ts-check
/* eslint-disable import/prefer-default-export */
import fs from 'fs';

// BEGIN (write your solution here)
export const compareFileSizes = (filepath1, filepath2, cb) => {
  fs.stat(filepath1, (_error1, { size: size1 }) => {
    fs.stat(filepath2, (_error2, { size: size2 }) => {
      cb(null, Math.sign(size1 - size2));

    })
  });
};
// END