// @ts-check
/* eslint-disable import/prefer-default-export */
import fs from 'fs';

// BEGIN (write your solution here)
export const move = (path1, path2, cb) => {
  fs.readFile(path1, 'utf-8', (error1, data) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.writeFile(path2, data, (error2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.unlink(path1, cb);
    });
  });
};
// END