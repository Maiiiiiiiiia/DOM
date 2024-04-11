// HTMLHrElement.js
// Реализуйте класс HTMLHrElement (наследуется от HTMLElement), который отвечает за представление тега <hr>. Внутри класса определите функцию toString(), которая возвращает текстовое представление тега.

// HTMLElement.js
// Реализуйте метод stringifyAttributes(), который формирует строчку для аттрибутов. Используйте этот метод в наследнике для формирования тега.

// HTMLElement.js
    // BEGIN
    const line = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');

    return line;
    // END

// HTMLHrElement.js
// BEGIN
export default class HTMLHrElement extends HTMLElement {
  toString() {
    const attrLine = this.stringifyAttributes();
    return `<hr${attrLine}>`;
  }
}
// END