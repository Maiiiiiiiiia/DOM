// Диспетчеризация по имени файла

// Реализуйте и экспортируйте по умолчанию класс DatabaseConfigLoader, 
// который отвечает за загрузку конфигурации для базы данных. У класса следующий интерфейс:

// Конструктор — принимает на вход путь, по которому нужно искать конфигурацию
// load(env) — метод, который грузит конфигурацию для конкретной среды окружения. 
// Он загружает файл database.${env}.json, парсит его и возвращает результат наружу.

export default class {
    constructor(pathToConfigs) {
      this.pathToConfigs = pathToConfigs;
    }
  
    load(env) {
      const fileName = `database.${env}.json`;
      const filePath = path.join(this.pathToConfigs, fileName);
      const raw = fs.readFileSync(filePath);
      const rawConfig = JSON.parse(raw);
  
      if (!Object.hasOwn(rawConfig, 'extend')) {
        return rawConfig;
      }
  
      const { extend, ...config } = rawConfig;
      return { ...this.load(extend), ...config };
    }
  }