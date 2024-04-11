// Null Object Pattern

// FakeSubscription.js
// Реализуйте и экспортируйте по умолчанию класс FakeSubscription. 
// В конструктор FakeSubscription принимает пользователя. 
// Если пользователь — администратор user.isAdmin(), то все доступы разрешены, если нет — запрещены. 
// Класс должен повторять интерфейс класса Subscription, то есть иметь те же методы, но со своей логикой.

// User.js
// Допишите конструктор пользователя, так, чтобы внутри устанавливалась реальная подписка, 
// если она передана снаружи и создавалась фейковая в ином случае.

// FakeSubscription.js

class FakeSubscription {
  constructor(user) {
    this.user = user;
  }

  hasProfessionalAccess() {
    return this.user.isAdmin();
  }

  hasPremiumAccess() {
    return this.user.isAdmin();
  }
}

export default FakeSubscription;

// User.js
    this.currentSubscription = currentSubscription ?? new FakeSubscription(this);
