// Реализуйте и экспортируйте по умолчанию функцию, реализующую приложение "суммирующий калькулятор". 
// Калькулятор представляет из себя одно поле для ввода чисел и две кнопки: сложение и сброс. 
// Под калькулятором выводится текущая сумма, которая изначально равна нулю. 
// Каждое нажатие кнопки plus добавляет к этой сумме введенное значение. 
// Нажатие кнопки сброс возвращает состояние к первоначальному (сумма устанавливается в 0).

// Сделайте калькулятор дружественным пользователю: 
// устанавливайте фокус на поле для ввода при каждой отрисовке формы (включая первую) и очищайте форму после отправки/очистки.



// повторяющийся код удобно вынести в отдельную функцию
const render = (state, formEl, inputEl, resultEl) => {
    formEl.reset();
    inputEl.focus();
    resultEl.textContent = state;
  };
  
  export default () => {
    // состояние относится к уровню приложения
    let state = 0;
  
    const formEl = document.querySelector('form');
    const inputEl = document.querySelector('input[type=number]');
    const resetEl = document.querySelector('button');
    const resultEl = document.querySelector('#result');
  
    formEl.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      state += parseInt(data.get('number'), 10);
      render(state, formEl, inputEl, resultEl);
    });
  
    resetEl.addEventListener('click', () => {
      state = 0;
      render(state, formEl, inputEl, resultEl);
    });
  
    inputEl.focus();
  };