// В предыдущих уроках мы познакомились со свойством textContent, которое позволяет безопасно 
// вставлять данные на страницу, чтобы избежать уязвимостей. В этом упражнении мы отработаем ручное 
// экранирование данных при установке их через свойство innerHTML.

// В задании дана форма обратной связи, состоящая из трех полей: email, name и comment.

// Напишите и экспортируйте функцию по умолчанию, которая при отправке формы получает из нее данные и экранирует их. 
// Когда форма заполнена и отправлена (нажата кнопка send), то элемент формы заменяется на другой элемент. 
// Другими словами, вместо формы появляется документ с такой структурой:

// <div>
//   <p>Feedback has been sent</p>
//   <div>Email: test@email.com</div>
//   <div>Name: Matz</div>
//   <div>Comment: My Comment</div>
// </div>
// Для экранирования введенных данных используйте функцию htmlEscape() из библиотеки escape-goat.

// После отправки формы выводятся данные, которые пользователь ввел.

// Подсказки
// Проще всего подготовить необходимый HTML и подставлять в него данные через innerHTML
// Экранирование символов

// My solution:
export default () => {
  const html = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = 'Feedback has been sent';
  const emailEl = document.createElement('div');
  const nameEl = document.createElement('div');
  const commEl = document.createElement('div');
  html.append(p, emailEl, nameEl, commEl);

  const form = document.querySelector('.feedback-form');
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, name, comment } = Object.fromEntries(formData);
    emailEl.textContent = `Email: ${email}`;
    nameEl.textContent = `Name: ${name}`;
    commEl.textContent = `Comment: ${comment}`;

    form.innerHTML = html.innerHTML;
  });
};

// Teachers solution:
// const render = (element, data) => {
//     const div = document.createElement('div');
//     const { email, name, comment } = data;
//     div.innerHTML = `
//       <p>Feedback has been sent</p>
//       <div>Email: ${htmlEscape(email)}</div>
//       <div>Name: ${htmlEscape(name)}</div>
//       <div>Comment: ${htmlEscape(comment)}</div>
//     `;
//     element.replaceWith(div);
//   };
  
//   export default () => {
//     const formElement = document.querySelector('.feedback-form');
//     const handle = (e) => {
//       e.preventDefault();
//       const formData = new FormData(e.target);
  
//       render(formElement, Object.fromEntries(formData));
//     };
//     formElement.addEventListener('submit', handle);
//   };
  // END