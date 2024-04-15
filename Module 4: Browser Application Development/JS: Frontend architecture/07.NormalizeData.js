// В этой задаче вам предстоит сделать список задач похожий на Reminders из MacOS. Reminder позволяет планировать задачи и создавать списки задач. 
// По умолчанию, в нашей реализации сразу должен быть создан список General. Начальный HTML доступен в public/index.html. 
// После инициализации js он становится таким (туда добавляется General):

// <div class="row">
//   <div class="col">
//     <h3>Lists</h3>
//     <form class="form-inline mb-2" data-container="new-list-form">
//       <label for="new-list-name" class="sr-only">New list name</label>
//       <input
//         type="text"
//         id="new-list-name"
//         class="form-control mr-2"
//         name="name"
//         required
//       />
//       <input type="submit" class="btn btn-primary" value="Add List" />
//     </form>
//     <div data-container="lists">
//       <ul>
//         <li><b>General</b></li>
//       </ul>
//     </div>
//   </div>
//   <div class="col">
//     <h3>Tasks</h3>
//     <form class="form-inline mb-2" data-container="new-task-form">
//       <label for="new-task-name" class="sr-only">New task name</label>
//       <input
//         type="text"
//         id="new-task-name"
//         class="form-control mr-2"
//         name="name"
//         required
//       />
//       <input type="submit" class="btn btn-primary" value="Add Task" />
//     </form>
//     <div data-container="tasks"></div>
//   </div>
// </div>

// После добавления первой задачи в список General:

// <div class="row">
//   <div class="col">
//     <h3>Lists</h3>
//     <form class="form-inline mb-2" data-container="new-list-form">
//       <label for="new-list-name" class="sr-only">New list name</label>
//       <input
//         type="text"
//         id="new-list-name"
//         class="form-control mr-2"
//         name="name"
//         required
//       />
//       <input type="submit" class="btn btn-primary" value="Add List" />
//     </form>
//     <div data-container="lists">
//       <ul>
//         <li><b>General</b></li>
//       </ul>
//     </div>
//   </div>
//   <div class="col">
//     <h3>Tasks</h3>
//     <form class="form-inline mb-2" data-container="new-task-form">
//       <label for="new-task-name" class="sr-only">New task name</label>
//       <input
//         type="text"
//         id="new-task-name"
//         class="form-control mr-2"
//         name="name"
//         required
//       />
//       <input type="submit" class="btn btn-primary" value="Add Task" />
//     </form>
//     <div data-container="tasks">
//       <ul>
//         <li>My First Task</li>
//       </ul>
//     </div>
//   </div>
// </div>

// После создания нового списка (но до переключения на него):

// <div class="row">
//   <div class="col">
//     <h3>Lists</h3>
//     <form class="form-inline mb-2" data-container="new-list-form">
//       <label for="new-list-name" class="sr-only">New list name</label>
//       <input
//         type="text"
//         id="new-list-name"
//         class="form-control mr-2"
//         name="name"
//         required
//       />
//       <input type="submit" class="btn btn-primary" value="Add List" />
//     </form>
//     <div data-container="lists">
//       <ul>
//         <li><b>General</b></li>
//         <li><a href="#random">Random</a></li>
//       </ul>
//     </div>
//   </div>
//   <div class="col">
//     <h3>Tasks</h3>
//     <form class="form-inline mb-2" data-container="new-task-form">
//       <label for="new-task-name" class="sr-only">New task name</label>
//       <input
//         type="text"
//         id="new-task-name"
//         class="form-control mr-2"
//         name="name"
//         required
//       />
//       <input type="submit" class="btn btn-primary" value="Add Task" />
//     </form>
//     <div data-container="tasks">
//       <ul>
//         <li>My First Task</li>
//       </ul>
//     </div>
//   </div>
// </div>

// После переключения на список Random (клик по имени):

// <div class="row">
//   <div class="col">
//     <h3>Lists</h3>
//     <form class="form-inline mb-2" data-container="new-list-form">
//       <label for="new-list-name" class="sr-only">New list name</label>
//       <input
//         type="text"
//         id="new-list-name"
//         class="form-control mr-2"
//         name="name"
//         required
//       />
//       <input type="submit" class="btn btn-primary" value="Add List" />
//     </form>
//     <div data-container="lists">
//       <ul>
//         <li><a href="#general">General</a></li>
//         <li><b>Random</b></li>
//       </ul>
//     </div>
//   </div>
//   <div class="col">
//     <h3>Tasks</h3>
//     <form class="form-inline mb-2" data-container="new-task-form">
//       <label for="new-task-name" class="sr-only">New task name</label>
//       <input
//         type="text"
//         id="new-task-name"
//         class="form-control mr-2"
//         name="name"
//         required
//       />
//       <input type="submit" class="btn btn-primary" value="Add Task" />
//     </form>
//     <div data-container="tasks"></div>
//   </div>
// </div>

// Списки должны иметь уникальные имена. Добавление списка с уже существующим именем не должно производить никакого эффекта.

// Экспортируйте функцию по умолчанию, которая реализует всю необходимую логику.




export default () => {
  const state = [
    {
      id: 'general',
      status: 'active',
    },
  ];
  
  const tasks = [];
  const temp = {
    list: '',
    task: '',
  };

  const renderList = (element) => {
    const currentId = element.textContent;
    const tasksContainer = document.querySelector('[data-container="tasks"] > ul');
    if (tasksContainer) {
      tasksContainer.remove();
    }
    if (tasks.filter((task) => task.id === currentId).length === 0) {
      return;
    }
    const ul = document.createElement('ul');
    tasks.map((task) => {
      if (task.id === currentId) {
        const li = document.createElement('li');
        li.textContent = task.task;
        ul.append(li);
      }
      return null;
    });
    document.querySelector('[data-container="tasks"]').append(ul);
  };

  const changeActive = (element) => {
    const currentId = element.textContent;
    const currentActive = state.filter((list) => list.status === 'active')[0];
    if (currentId === currentActive.id) {
      return;
    }
    currentActive.status = 'passive';
    const currentState = state.filter((list) => list.id === currentId)[0];
    currentState.status = 'active';
    const activeElementsToDelete = document.querySelector('[data-container="lists"] > ul > li > b');
    const a = document.createElement('a');
    a.setAttribute('href', `#${activeElementsToDelete.textContent}`);
    a.textContent = activeElementsToDelete.textContent;
    activeElementsToDelete.replaceWith(a);
    element.parentNode.innerHTML = `<b>${currentId}</b>`;
  };

  const generalBegin = () => {
    const div = document.querySelector('[data-container="lists"]');
    const ul = document.createElement('ul');
    div.append(ul);
    const li = document.createElement('li');
    ul.append(li);
    const b = document.createElement('b');
    b.textContent = 'general';
    li.append(b);
    li.addEventListener('click', (e) => {
      e.preventDefault();
      changeActive(e.target);
      renderList(e.target);
    });
  };
  generalBegin();

  const inputList = document.querySelector('#new-list-name');
  const inputTask = document.querySelector('#new-task-name');
  const submitList = document.querySelector('[data-container="new-list-form"] > [type="submit"]');
  const submitTask = document.querySelector('[data-container="new-task-form"] > [type="submit"]');

  inputList.addEventListener('keyup', (e) => {                             // нввод в форму LIST
    temp.list = e.target.value;                                            // и присваивание этих данных temp.list
  });
  inputTask.addEventListener('keyup', (e) => {                             // ввод в форму TASK
    temp.task = e.target.value;                                            // и присваивание этих данных temp.task
  });


  submitList.addEventListener('click', (e) => {                            // нажатие на кнопку ADD LIST
    e.preventDefault();
    if (state.filter((list) => list.id === temp.list).length !== 0) {
      return;
    }
    state.push({
      id: temp.list,
      status: 'passive',
    });
    inputList.value = '';
    inputList.focus();
    const div = document.querySelector('[data-container="lists"] > ul');
    const li = document.createElement('li');
    div.append(li);
    const a = document.createElement('a');
    a.setAttribute('href', `#${temp.list}`);
    a.textContent = temp.list;
    li.append(a);
    li.addEventListener('click', (event) => {
      event.preventDefault();
      changeActive(event.target);
      renderList(event.target);
    });
  });

  submitTask.addEventListener('click', (e) => {                                // нажатие на кнопку ADD TASK
    e.preventDefault();
    const activeList = state.filter((list) => list.status === 'active')[0].id;
    tasks.push({
      id: activeList,
      task: temp.task,
    });
    inputTask.value = '';
    inputTask.focus();
    if (!document.querySelector('[data-container="tasks"] > ul')) {
      const div = document.querySelector('[data-container="tasks"]');
      const ul = document.createElement('ul');
      div.append(ul);
    }
    const li = document.createElement('li');
    li.textContent = temp.task;
    document.querySelector('[data-container="tasks"] > ul').append(li);
  });
};
