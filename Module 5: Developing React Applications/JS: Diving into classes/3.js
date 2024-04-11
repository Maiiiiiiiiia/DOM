// // Позднее связывание

// Исключения – один из немногих примеров удачного использования наследования. Мы познакомимся с ними в следующих уроках, а сейчас потренируемся проверять цепочку наследования.

// Реализация исключений через классы расширяет возможности обработки нестандартных ситуаций. Для каждого типа ошибки — свой класс. При этом каждый тип обладает общей логикой и интерфейсом. При создании исключения, в конструктор передается текст ошибки — это общая логика для всех типов наследуется от базового класса и работает благодаря позднему связыванию.

// catchers.js
// Реализуйте логику функций, подготовленных в файле. Каждая из них принимает обработчик ошибки и класс ошибки. Каждая функция отлавливает особый тип ошибок:

// Функция anyErrorCatcher проверяет, что текущая ошибка наследуется от errorInstance
// Функция appErrorCatcher проверяет, что текущая ошибка наследуется от errorInstance И от одной из ошибок приложения
// Функция customErrorCatcher проверяет, что ошибка содержит свойство isCustomError со значением true и errorInstance при этом отсутствует
// Если условие выполнено — ошибка передаётся в errorHandler. Если нет, то выбрасывается в исходном виде.

// runCode.js
// Реализуйте и экспортируйте по умолчанию функцию, которая имеет следующие параметры:

// action - функция, которую нужно выполнить. Обязательный
// catcher - обработчик ошибки из catcher.js, в качестве параметра принимает ошибку. Необязательный
// Общий принцип работы таков: функция принимает в себя экшен, пытается его выполнить и возвращает либо результат выполнения, либо передаёт ошибку в catcher и возвращает его результат (если catcher не задан, выбрасывает ошибку как есть).

// import runCode from './runCode.js';
// import { appErrorCatcher } from './catchers.js';
// import AppNetworkError from './errors/AppNetworkError.js';
// import NetworkError from './errors/NetworkError.js';

// const successAction = () => 'Hello, Hexlet!';
// const failedAction = () => {
//   throw new AppNetworkError('Hexlet is unavailable!');
// };
// const errorHandler = (err) => `"Hello, Hexlet" failed with error: "${err.message}"`;
// const catcher1 = appErrorCatcher(errorHandler, AppNetworkError);

// runCode(successAction, catcher1); // 'Hello, Hexlet!';

// // Выброшена ошибка AppNetworkError, но перенаправлена в errorHandler
// runCode(failedAction, catcher1); // '"Hello, Hexlet" failed with error: "Hexlet is unavailable!"';

// const catcher2 = appErrorCatcher(errorHandler, NetworkError);
// // Выброшена ошибка AppNetworkError, но она не соответствует NetworkError
// runCode(failedAction, catcher2); // Error: 'Hexlet is unavailable!'
// Более подробные кейсы использований смотрите в тестах.

// Подсказки
// Все кейсы, кроме CustomError легко проверить через оператор проверки типа instanceof. Для этого импортируйте необходимые ошибки самостоятельно из каталога errors.

// runCode.js
// BEGIN
const defaultCatcher = (err) => { throw err; };

export default (action, catcher = defaultCatcher) => {
  try {
    return action();
  } catch (err) {
    return catcher(err);
  }
};
// END

// catchers.js
import NetworkError from './errors/NetworkError.js';


export const anyErrorCatcher = (errorHandler, errorInstance) => (error) => {
  if (error instanceof errorInstance) {
    return errorHandler(error);
  }
throw new Error(error);

};

export const appErrorCatcher = (errorHandler, errorInstance) => (error) => {
  if (error instanceof errorInstance && !(error instanceof NetworkError) && error instanceof Error) {
    return errorHandler(error);
  }
  throw new Error(error);

};

export const customErrorCatcher = (errorHandler, errorInstance) => (error) => {
    if (error.isCustomError && errorInstance === null) {
    return errorHandler(error);
  }
  throw new Error(error);
};