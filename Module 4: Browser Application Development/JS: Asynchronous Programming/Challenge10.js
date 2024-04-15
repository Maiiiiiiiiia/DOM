// Реализуйте и экспортируйте по умолчанию функцию, которая "промисифицирует" асинхронные функции с колбеками.

const promisify = (func) => (...args) => {
    return new Promise((resolve, reject) => {
    func(...args, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  })
};
  export default promisify;

  // Teacher solution

//   export default (asyncFn) => (...args) => {
//     const promise = new Promise((resolve, reject) => {
//       asyncFn(...args, (err, data) => (err ? reject(err) : resolve(data)));
//     });
//     return promise;
//   };