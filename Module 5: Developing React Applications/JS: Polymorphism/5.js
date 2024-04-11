// Утиная типизация

// В программировании для некоторых задач распространены key-value базы данных. 
// Внешне они работают по принципу ассоциативных массивов, 
// но живут как отдельные программы и умеют делать много полезных штук: например, сохранять данные на диск, 
// переносить данные между машинами в сети и тому подобное.

// В этой задаче реализована подобная база данных в виде класса FileKV, 
// который сохраняет свои данные на диске в указанном файле. Она имеет следующий интерфейс:

// InMemoryKV.js:

class InMemoryKV {
  constructor(init = {}) {
    this.map = _.cloneDeep(init);
  }

  set(key, value) {
    this.map[key] = value;
  }

  unset(key) {
    this.map = _.omit(this.map, key);
  }

  get(key, defaultValue = null) {
    return _.get(this.map, key, defaultValue);
  }

  toObject() {
    return _.cloneDeep(this.map);
  }
};

// keyValueFunctions.js:

const swapKeyValue = (map) => {
  const data = map.toObject();
  const entries = Object.entries(data);
  entries.forEach(([key]) => map.unset(key));
  entries.forEach(([key, value]) => map.set(value, key));
};

export default swapKeyValue;
