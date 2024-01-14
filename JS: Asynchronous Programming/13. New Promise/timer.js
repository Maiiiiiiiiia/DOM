// Реализуйте таймер в виде промиса. Функция должна принимать на вход количество миллисекунд и возвращать промис.

export default(mls) => {
    return new Promise((resolve) => setTimeout(resolve, mls));
  };