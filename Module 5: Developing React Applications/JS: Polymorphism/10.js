// Паттерн Фабрика

// ConfigFactory.js
// Создайте фабрику, которая принимает на вход путь до файла конфигурации в формате либо json либо yaml и возвращает объект класса Config. Конструктор класса Config принимает на вход объект с данными, полученными из конфигурационных файлов и предоставляет к нему доступ с помощью метода getValue.

// Пример
// import path from 'path';
// import ConfigFactory from '../ConfigFactory.js';

// const filePath = path.join(__dirname, '__fixtures__', 'test.yml');
// const config = ConfigFactory.factory(filePath);
// config.getValue('key'); // value
// console.log(config.constructor.name); // Config
// Учтите что файлы формата YAML могут иметь разные расширения: yaml и yml. Фабрика должна работать с обоими.

// parsers/JsonParser.js
// Реализуйте класс, отвечающий за парсинг json. Используйте внутри JSON.parse().

// parsers/YamlParser.js
// Реализуйте класс, отвечающий за парсинг yaml. Для парсинга используется сторонний компонент js-yaml. Используйте метод load().

// Подсказки
// Получить расширение файла можно с помощью path.extname()
// Для чтения файлов используйте fs.readFileSync()

// ConfigFactory.js
// BEGIN
const mapping = {
  yaml: YamlParser,
  yml: YamlParser,
  json: JsonParser,
};

export default class ConfigFactory {
  static factory(filePath) {
    const type = path.extname(filePath).slice(1);
    const parser = new mapping[type]();

    const rawData = fs.readFileSync(filePath).toString();
    const data = parser.parse(rawData);

    return new Config(data);
  }
}
// END

// parsers/JsonParser.js
// BEGIN
// export default class JsonParser {
//   parse(data) {
    // return JSON.parse(data);
//   }
// }
// END

// parsers/YamlParser.js
// BEGIN
// export default class YamlParser {
//   parse(data) {
    // return yaml.load(data);
//   }
// }
// END