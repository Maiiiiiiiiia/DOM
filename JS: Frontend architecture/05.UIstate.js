// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список компаний 
// и использует этот список для формирования кнопок (по одной на каждую компанию). 
// Нажатие на кнопку приводит к выводу описания компании (если есть описание другой компании, оно заменяется). 
// Повторное нажатие удаляет вывод. Данные должны полностью удаляться, скрытие с помощью классов не подходит. 
// По умолчанию не показывается никакое описание.


// Функция отрисовки
const render = (state, container) => {
    // Очищаем контейнер
    container.innerHTML = '';
  
    const buttons = state.companies.map(({ id, name }) => {
      // Создаем кнопки для каждой компании
      const button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.classList.add('btn', 'btn-primary');
      button.textContent = name;
  
      // Добавляем обработчик для кнопки
      button.addEventListener('click', () => {
        // Определяем id выбранной компании по кнопке. При повторном нажатии будет null
        const nextSelectedId = state.uiState.selectedCompanyId === id ? null : id;
        // Сохраняем id выбранной компании
        state.uiState.selectedCompanyId = nextSelectedId;
        // Перерисовываем страницу
        render(state, container);
      });
      return button;
    });
  
    // Добавляем кнопки
    container.append(...buttons);
  
    // Если компания не выбрана, завершаем работу
    if (state.uiState.selectedCompanyId === null) {
      return;
    }
  
    // Отрисовываем описание компании, для этого создаем контейнер для описания
    const outputContainer = document.createElement('div');
    // Получаем данные компании из состояния приложения
    const selectedCompany = state.companies.find((c) => c.id === state.uiState.selectedCompanyId);
    // Заполняем контейнер данными
    outputContainer.textContent = selectedCompany.description;
    // Добавляем контейнер в DOM
    container.append(outputContainer);
  };
  
  export default (companies) => {
    // Определяем состояние приложения
    const state = {
      companies,
      uiState: {
        selectedCompanyId: null,
      },
    };
  
    const container = document.querySelector('.container');
  
    // Рендерим приложение
    render(state, container);
  };