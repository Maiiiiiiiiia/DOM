// Некоторые интерфейсы допускают редактирование "по месту" (in-place). Это значит, что для обновления значений каких-то данных не нужно переходить на отдельную страницу редактирования, достаточно кликнуть на сам элемент (или кнопку рядом с ним) как появится форма для изменения конкретно этого значения.

// Пример работы

// В данной практике нужно построить именно такой интерфейс. Он работает по следующему принципу. Контейнер, внутри которого находятся данные для редактирования, помечается специальным аттрибутом: data-editable-target. Значением этого атрибута является имя поля. В нашем примере это name и email (исходник лежит в корне, файл index.html). Начальный HTML выглядит так:

// <div data-editable-target="name"><i>name</i></div>
// <div data-editable-target="email"><i>email</i></div>
// Когда происходит клик на этом элементе, то он заменяется на форму

// Пример формы для сохранения name:

// <div data-editable-target="name">
//   <form>
//     <!-- Лейбл привязывается к инпуту через аргумент for -->
//     <!-- Всегда полезно указывать лейблы для контроллеров. Благодаря им, различные системы находят элементы управления -->
//     <label class="sr-only" for="name">name</label>
//     <!-- С точки зрения хорошего UX нужно фокусироваться (это позволяет использовать клавиатуру сразу) на этом инпуте и выделять текст внутри него -->
//     <!-- Исключение составляет начальное состояние, когда поле пустое, поэтому происходит только фокусировка на инпут -->
//     <input type="text" id="name" name="name" value="">
//     <!-- Кнопка сабмита имеет текст "Save name" для сохранения имени. Для сохранения емейла должен быть текст "Save email" -->
//     <input type="submit" value="Save name">
//   </form>
// </div>
// Пример формы для сохранения email:

// <div data-editable-target="email">
//   <form>
//     <label class="sr-only" for="email">email</label>
//     <input type="text" id="email" name="email" value="">
//     <input type="submit" value="Save email">
//   </form>
// </div>
// Затем пользователь может изменить значение и сохранить его. Повторный клик снова открывает форму для редактирования, в которой окажется то значение, которое вбил пользователь.

// Предположим что мы набрали значение "Cat". Тогда после отправки формы этот див станет таким:

// <div data-editable-target="name">
//   Cat
// </div>
// Если значение стирается, то тогда текст меняется на первоначальный (и добавляется курсив), такой какой он был до любых изменений:

// <div data-editable-target="name"><i>name</i></div>
// <div data-editable-target="email"><i>email</i></div>
// src/application.js
// Экспортируйте функцию по умолчанию, которая реализует всю необходимую логику. По необходимости создайте дополнительные функции на уровне модуля.



export default () => {
  const condition = {
    name: {
      stat: 'default',
      lastName: '',
    },
    email: {
      stat: 'default',
      lastEmail: '',
    },
  };
  const containerName = document.querySelector('[data-editable-target="name"]');
  const containerEmail = document.querySelector('[data-editable-target="email"]');

  const renderName = (state) => {
    if (state.name.stat === 'filling') {
      containerName.innerHTML = '<form class=nameForm></form>';
      const form = document.querySelector('.nameForm');

      const label = document.createElement('label');
      label.classList.add('sr-only');
      label.setAttribute('for', 'name');
      label.textContent = 'name';
      form.append(label);

      const input1 = document.createElement('input');
      input1.type = 'text';
      input1.id = 'name';
      input1.name = 'name';
      input1.setAttribute('value', state.name.lastName);
      state.name.lastName = '';
      form.append(input1);

      const input2 = document.createElement('input');
      input2.type = 'submit';
      input2.setAttribute('value', 'Save name');
      form.append(input2);

      input1.addEventListener('keyup', (e) => {
        state.name.lastName = e.target.value;
        form.addEventListener('click', (r) => {
          r.preventDefault();
          state.name.stat = 'default';
          renderName(state);
        });
      });
    } else {
      if (document.querySelector('.nameForm')) {
        document.querySelector('.nameForm').remove();
      } if (state.name.lastName === '') {
        containerName.innerHTML = '<i>name</i>';
      } else {
        containerName.innerHTML = state.name.lastName;
      }
    }
  };

  const renderEmail = (state) => {
    if (state.email.stat === 'filling') {
      containerEmail.innerHTML = '<form class=emailForm></form>';
      const form = document.querySelector('.emailForm');

      const label = document.createElement('label');
      label.classList.add('sr-only');
      label.setAttribute('for', 'email');
      label.textContent = 'email';
      form.append(label);

      const input1 = document.createElement('input');
      input1.type = 'text';
      input1.id = 'email';
      input1.name = 'email';
      input1.setAttribute('value', state.email.lastEmail);
      state.email.lastEmail = '';
      form.append(input1);

      const input2 = document.createElement('input');
      input2.type = 'submit';
      input2.setAttribute('value', 'Save email');
      form.append(input2);

      input1.addEventListener('keyup', (e) => {
        state.email.lastEmail = e.target.value;

        form.addEventListener('submit', (w) => {
          w.preventDefault();
          state.email.stat = 'default';
          renderEmail(state);
        });
      });
    } else {
      if (document.querySelector('.emailForm')) {
        document.querySelector('.emailForm').remove();
      }
      if (state.email.lastName === '') {
        containerEmail.innerHTML = '<i>email</i>';
      } else {
        containerEmail.innerHTML = state.email.lastEmail;
      }
    }
  };

  containerName.addEventListener('click', (e) => {
    if (condition.name.stat === 'default') {
      e.preventDefault();
      condition.name.stat = 'filling';
      renderName(condition);
    }
  }, true);

  containerEmail.addEventListener('click', (e) => {
    if (condition.email.stat === 'default') {
      e.preventDefault();
      condition.email.stat = 'filling';
      renderEmail(condition);
    }
  }, true);
};


// Teachers solution:
// BEGIN (write your solution here)
// const render = (state, element) => {
//   const elementName = element.dataset.editableTarget;
//   element.innerHTML = '';

//   const buildText = () => {
//     if (state.value === '') {
//       const i = document.createElement('i');
//       i.textContent = elementName;
//       return i;
//     }

//     return document.createTextNode(state.value);
//   };

//   const buildForm = () => {
//     const form = document.createElement('form');
//     const label = document.createElement('label');
//     label.setAttribute('for', elementName);
//     label.classList.add('sr-only');
//     label.textContent = elementName;
//     const input = document.createElement('input');
//     input.setAttribute('type', 'text');
//     input.setAttribute('name', elementName);
//     input.setAttribute('id', elementName);
//     input.setAttribute('value', state.value);

//     const submit = document.createElement('input');
//     submit.setAttribute('type', 'submit');
//     submit.setAttribute('value', `Save ${elementName}`);
//     form.append(label, input, submit);
//     form.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const formData = new FormData(e.target);
//       const value = formData.get(elementName).trim();
//       state.value = value;
//       state.mode = 'text';
//       render(state, element);
//     });

//     return { form, input };
//   };

//   switch (state.mode) {
//     case 'text': {
//       const text = buildText();
//       element.append(text);
//       break;
//     }
//     case 'form': {
//       const { form, input } = buildForm();
//       element.append(form);
//       input.select();
//       break;
//     }
//     default:
//       // https://ru.hexlet.io/blog/posts/sovershennyy-kod-defolty-v-svitchah
//       throw new Error(`Unknown mode: ${state.mode}`);
//   }
// };

// export default () => {
//   const elements = document.querySelectorAll('[data-editable-target]');
//   // у каждого элемента свой стейт. Можно добавлять новые элементы с data-editabe-target в HTML,
//   // не меняя код
//   elements.forEach((element) => {
//     const state = {
//       // состояние приложения определено в виде состояний конечного автомата вместо флагов
//       mode: 'text',
//       value: '',
//     };

//     element.addEventListener('click', () => {
//       if (state.mode === 'text') {
//         state.mode = 'form';
//         render(state, element);
//       }
//     });
//   });
// };
// // END