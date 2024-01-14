// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход document.documentElement, 
// извлекает из него параграфы и возвращает массив из их содержимого. 
// Не забудьте очистить данные от концевых пробелов и переводов строк с помощью trim():




export default (root) => {
    const children = Array.from(root.parentNode.body.children);
    return children
      .filter((element) => element.tagName === 'P')
      .map((element) => element.innerHTML.trim());
  };