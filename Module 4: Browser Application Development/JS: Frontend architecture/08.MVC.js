// Бутстрап позволяет использовать списки для отображения контента при клике по элементу. 
// В этом задании такие группы списков уже подготовлены, вам предстоит только добавить функционал переключения.

// BEGIN
export default () => {
    // Model
    const state = {
      lists: {},
    };
  
    // View
    const watchedState = onChange(state, (path, current, previous) => {
      const currentTab = document.querySelector(`#${current}`);
      const currentPanel = document.querySelector(`[aria-labelledby="${current}"]`);
      const previousTab = document.querySelector(`#${previous}`);
      const previousPanel = document.querySelector(`[aria-labelledby="${previous}"]`);
  
      currentTab.classList.add('active');
      currentPanel.classList.add('active', 'show');
      previousTab.classList.remove('active');
      previousPanel.classList.remove('active', 'show');
    });
  
    const lists = document.querySelectorAll('[role="tablist"]');
  
    // Controller
    // Обраабатываем списки
    lists.forEach((list) => {
      // Получаем id списка
      const listId = list.id;
      // Получаем активный таб
      const activeTab = list.querySelector('[role="tab"].active');
  
      // Сохраняем id активного таба
      state.lists[listId] = {
        tabId: activeTab.id,
      };
  
      // Добавляем обработчик клика на список
      list.addEventListener('click', (e) => {
        // Отключаем дефолтные обработчики
        e.preventDefault();
        // Добавляем в стейт id таба, по которому кликнули
        watchedState.lists[listId].tabId = e.target.id;
      });
    });
  };
  // END