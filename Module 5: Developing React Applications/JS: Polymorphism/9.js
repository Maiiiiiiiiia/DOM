// Паттерн Стратегия

// Реализуйте класс Navigator, который представляет собой упрощенную вариацию навигатора. Конструктор класса должен принимать два параметра. Первый параметр — это список локаций маршрута, по которому мы передвигаемся. Второй параметр указывает на то, как мы передвигаемся: пешком (walking) или на машине (driving). По умолчанию предполагается, что мы двигаемся пешком (walking). В классе должен быть метод goToNextTurn(), который должен переводить на следующую локацию из переданного массива в зависимости от выбранного передвижения.

// Примеры
// // По умолчанию используется передвижение пешком
// const navigator = new Navigator(['street1', 'street2', 'street3', 'street4', 'street5']);

// navigator.goToNextTurn(); // => 'street2'
// navigator.goToNextTurn(); // => 'street3'
// navigator.goToNextTurn(); // => 'street4'
// navigator.goToNextTurn(); // => 'street5'
// navigator.goToNextTurn(); // => null
// strategies/Walking.js
// Реализуйте стратегию, которая переводит на следующую локацию по порядку. Если достигнута последняя локация, то возвращается null

// strategies/Driving.js
// Реализуйте стратегию, которая так же, как и Walking переводит на следующую локацию, но перепрыгивает через одну. Если перепрыгнута последняя локация, то считается, что она достигнута:

// const navigator = new Navigator(['street1', 'street2', 'street3', 'street4'], 'driving');

// navigator.goToNextTurn(); // => 'street3'
// navigator.goToNextTurn(); // => null
// Подсказки
// Изначально мы находимся на первой локации

// Navigator.js
// BEGIN
class Navigator {
  constructor(streets, type = 'walking') {
    this.streets = streets;
    switch (type) {
      case 'walking':
        this.strategy = new Walking(this.streets);
        break;
      case 'driving':
        this.strategy = new Driving(this.streets);
        break;
    }
    [this.currentStreet] = this.streets;
  }

  goToNextTurn() {
    this.currentStreet = this.strategy.getNextTurn(this.currentStreet);

    return this.currentStreet ?? null;
  }
}
// END

// strategies/Driving.js
// BEGIN
class Driving {
  step = 2;

  constructor(streets) {
    this.streets = streets;
  }

  getNextTurn(currentStreet) {
    const currentIndex = this.streets.indexOf(currentStreet) + this.step;
    if (currentIndex >= this.streets.length) {
      return null;
    }

    return this.streets[currentIndex];
  }
}
// END

// strategies/Walking.js
// BEGIN
class Walking {
  step = 1;

  constructor(streets) {
    this.streets = streets;
  }

  getNextTurn(currentStreet) {
    const currentIndex = this.streets.indexOf(currentStreet) + this.step;
    if (currentIndex >= this.streets.length) {
      return null;
    }

    return this.streets[currentIndex];
  }
}
// END

