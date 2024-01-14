// Протестируйте функцию, которая преобразует различные входные форматы в выходной HTML.

// Поддерживаются yml/json/csv
// const html1 = await toHtmlList('/path/to/yaml/file');
// const html2 = await toHtmlList('/path/to/json/file');
// const html3 = await toHtmlList('/path/to/csv/file');

// Каждый из входных файлов для этой функции содержит список элементов из которых формируется элемент <ul>. 
// Входные данные и выходной HTML можно подсмотреть в фикстурах.

// Ваша задача, пропустить через эту функцию входные файлы и сравнить результат работы функции 
// с ожидаемым значением находящимся в файле __fixtures__/result.html. Функция принимает на вход путь к файлу.

const formats = ['csv', 'json', 'yml'];
const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

let expected;

beforeAll(async () => {
  expected = await fs.readFile(getFixturePath('result.html'), 'utf-8');
});

test.each(formats)('%s', async (format) => {
  const filePath = getFixturePath(`list.${format}`);
  const actual = await toHtmlList(filePath);
  expect(actual).toEqual(expected.trim());
});