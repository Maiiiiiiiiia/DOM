// В веб-приложениях часто встречаются кнопки, переключающие содержимое контейнера. Например, похожий компонент вы можете посмотреть в Bootstrap nav. Один из вариантов этого компонента — это табы, которые переключаются по нажатию без перезагрузки страницы:

// <nav>
//     <div class="nav nav-tabs">
//         <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button">Home</button>
//         <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button">Profile</button>
//     </div>
// </nav>
// <div class="tab-content">
//     <div class="tab-pane active" id="home">Home tab</div>
//     <div class="tab-pane" id="profile">Profile tab</div>
// </div>
// По клику на таб происходит следующее:

// Класс active снимается с текущего элемента меню и активного блока с данными
// Класс active добавляется табу, по которому кликнули и соответствующему блоку с данными
// Сопоставление таба и блока данных идет по идентификатору, который прописывается в атрибут табов data-bs-target. По клику на таб код должен извлечь id, найти соответствующий элемент и сделать его активным. При этом важно не забыть снять класс active с таба и с блока, которые были активными до клика.

// src/application.js
// Реализуйте логику переключения табов. Постройте свою логику так, чтобы она позволила использовать на одной странице любое количество компонентов nav.

// Подсказки
// В коде можно использовать глобальный объект document
// Селектор по data элементам [data-toggle], например: document.querySelectorAll('h1[data-key]');
// Получить необходимый атрибут data можно через dataset
// Постарайтесь не завязываться на конкретные идентификаторы и элементы
// Вы можете использовать другой метод извлечения списка — например, document.getElementsByClassName(). При этом обратите внимание, что он возвращает HTMLCollection, а не NodeList. HTMLCollection не поддерживает метод forEach(). Однако вы можете привести такой список к массиву — например, используя Array.from()
// Переключение должно работать на любой реализации — и с использованием button, и на div


  // BEGIN

  // функция-обработчик в качестве параметров
  // получает event и элемент
  const handle = (e, container) => {
    const targetTab = e.target;
    // если элемент, на котором произошел клик
    // уже активный, то делаем возврат
    if (targetTab.classList.contains('active')) {
      return;
    }

    // получем id элемента на котором был клик,
    // и далее по нему получаем сам элемент
    const targetTabContentId = targetTab.dataset.bsTarget;
    const targetTabContent = document.querySelector(targetTabContentId);

    // находим и получаем элемент, который был активным до клика
    const activeTab = container.querySelector('.active');
    const activeTabContentId = activeTab.dataset.bsTarget;
    const activeTabContent = document.querySelector(activeTabContentId);

    // добавляем класс active чтобы сделать элемент,
    // на котором произошел клик активным
    targetTab.classList.add('active');
    targetTabContent.classList.add('active');
    // удаляем класс с элемента который был активным до клика
    activeTab.classList.remove('active');
    activeTabContent.classList.remove('active');
  };

  // находим все элементы с классом .nav
  const navs = document.querySelectorAll('.nav');

  // на каждую кнопку в nav вешаем событие
  // для этого обходим все элементы и на каждый вешаем обработчик по событию click
  navs.forEach((nav) => {
    const tabs = nav.querySelectorAll('[data-bs-toggle]');
    tabs.forEach((tab) => {
      tab.addEventListener('click', (event) => handle(event, nav));
    });
  });
  // END