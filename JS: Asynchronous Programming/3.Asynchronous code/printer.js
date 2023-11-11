// @ts-check
/* eslint-disable no-console */

import fs from 'fs';

// BEGIN (write your solution here)
export default (data) => {
  fs.readFile(data, 'utf-8', (_error, data) => console.log(data));
};
// END