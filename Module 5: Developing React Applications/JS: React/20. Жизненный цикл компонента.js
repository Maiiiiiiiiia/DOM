// В этом упражнении необходимо реализовать записную книжку, которая взаимодействует с бекендом по следующим урлам:

// GET /api/tasks — получить список задач.
// Формат ответа — [{"id":"1","text":"first task","state":"finished"},{"id":"2","text":"second task","state":"active"}]
// POST /api/tasks — создать новую задачу.
// Формат запроса — {"text": "another task"}
// Формат ответа — {"id":"4","text":"new task","state":"active"}
// PATCH /api/tasks/:id/finish — завершить задачу.
// Формат ответа — {"id":"1","text":"first task","state":"finished"}
// PATCH /api/tasks/:id/activate — переоткрыть завершенную задачу — {"id":"1","text":"first task","state":"active"}
// Пример работы

// Начальный HTML, при первой загрузке на сервере задач нет(GET /api/tasks возвращает пустой массив):

// <div>
//   <div class="mb-3">
//     <form class="todo-form mx-3">
//       <div class="d-flex col-md-3">
//         <input type="text" value="" required="" class="form-control me-3" placeholder="I am going...">
//         <button type="submit" class="btn btn-primary">add</button>
//       </div>
//     </form>
//   </div>
// </div>
// HTML после того как добавлены последовательно три задачи "first task", "second task" и "another task".

// <div>
//   <div class="mb-3">
//     <form class="todo-form mx-3">
//       <div class="d-flex col-md-3">
//         <input type="text" value="" required="" class="form-control me-3" placeholder="I am going...">
//         <button type="submit" class="btn btn-primary">add</button>
//       </div>
//     </form>
//   </div>
//   <div class="todo-active-tasks">
//     <div class="row">
//       <div class="col-1">3</div>
//       <div class="col">
//         <a href="#" class="todo-task">another task</a>
//       </div>
//     </div>
//     <div class="row">
//       <div class="col-1">2</div>
//       <div class="col">
//         <a href="#" class="todo-task">second task</a>
//       </div>
//     </div>
//     <div class="row">
//       <div class="col-1">1</div>
//       <div class="col">
//         <a href="#" class="todo-task">first task</a>
//       </div>
//     </div>
//   </div>
// </div>
// На последнюю добавленную был совершен клик, который перевел задачу в выполненные:

// <div>
//   <div class="mb-3">
//     <form class="todo-form mx-3">
//       <div class="d-flex col-md-3">
//         <input type="text" value="" required="" class="form-control me-3" placeholder="I am going...">
//         <button type="submit" class="btn btn-primary">add</button>
//       </div>
//     </form>
//   </div>
//   <div class="todo-active-tasks">
//     <div class="row">
//       <div class="col-1">2</div>
//       <div class="col">
//         <a href="#" class="todo-task">second task</a>
//       </div>
//     </div>
//     <div class="row">
//       <div class="col-1">1</div>
//       <div class="col">
//         <a href="#" class="todo-task">first task</a>
//       </div>
//     </div>
//   </div>
//   <div class="todo-finished-tasks">
//     <div class="row">
//       <div class="col-1">3</div>
//       <div class="col">
//         <s><a href="#" class="todo-task">another task</a></s>
//       </div>
//     </div>
//   </div>
// </div>
// После клика по задаче "second task":

// <div>
//   <div class="mb-3">
//     <form class="todo-form mx-3">
//       <div class="d-flex col-md-3">
//         <input type="text" value="" required="" class="form-control me-3" placeholder="I am going...">
//         <button type="submit" class="btn btn-primary">add</button>
//       </div>
//     </form>
//   </div>
//   <div class="todo-active-tasks">
//     <div class="row">
//       <div class="col-1">1</div>
//       <div class="col">
//         <a href="#" class="todo-task">first task</a>
//       </div>
//     </div>
//   </div>
//   <div class="todo-finished-tasks">
//     <div class="row">
//       <div class="col-1">3</div>
//       <div class="col">
//         <s><a href="#" class="todo-task">another task</a></s>
//       </div>
//     </div>
//     <div class="row">
//       <div class="col-1">2</div>
//       <div class="col">
//         <s><a href="#" class="todo-task">second task</a></s>
//       </div>
//     </div>
//   </div>
// </div>
// src/TodoBox.jsx
// Реализуйте компонент <TodoBox>.

// Первоначальная подгрузка задач с сервера должна происходить сразу после монтирования компонента в DOM.

// Список выполненных задач должен идти после списка активных задач, при этом задачи в каждом списке должны идти в том порядке, в котором они добавлялись (сверху последняя)

// src/Item.jsx
// Реализуйте компонент <Item> отвечающий за вывод конкретной записи.

// Выполненная задача должна быть обёрнута в тэг <s> чтобы элемент отображался как перечеркнутый

// Подсказки
// Для генерации урлов в файле routes.js созданы специальные хелперы
// Для изменения состояния используйте immutability-helper
// Изменение объекта в массиве: update([{ hello: 'world' }], { 0: { $merge: { hello: 'kitty' } } })
// После выполнения запроса на добавление элемента, нет необходимости заново получать весь список повторным гет-запросом. Тесты проверяют, что нет лишних запросов


// src/Item.jsx
// BEGIN
const Item = ({ task, onClick }) => {
  const link = <a href="#" className="todo-task" onClick={onClick}>{task.text}</a>;

  return (
    <div className="row">
      <div className="col-1">
        {task.id}
      </div>
      <div className="col">
        {task.state === 'finished' ? <s>{link}</s> : link}
      </div>
    </div>
  );
};

export default Item;
// END
// src/TodoBox.jsx
// BEGIN
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTaskText: '', tasks: [] };
  }

  componentDidMount() {
    this.fetchTasks();
  }

  handleChangeText = ({ target: { value } }) => {
    this.setState({ newTaskText: value });
  };

  handleFinishTask = (id) => async () => {
    await axios.patch(routes.finishTaskPath(id));
    const { tasks } = this.state;
    const index = tasks.findIndex((t) => t.id === id);
    const updatedTasks = update(tasks, { [index]: { $merge: { state: 'finished' } } });
    this.setState({ tasks: updatedTasks });
  };

  handleActivateTask = (id) => async () => {
    await axios.patch(routes.activateTaskPath(id));
    const { tasks } = this.state;
    const index = tasks.findIndex((t) => t.id === id);
    const updatedTasks = update(tasks, { [index]: { $merge: { state: 'active' } } });
    this.setState({ tasks: updatedTasks });
  };

  handleSubmitForm = async (e) => {
    e.preventDefault();
    const { newTaskText, tasks } = this.state;
    const response = await axios.post(routes.tasksPath(), { text: newTaskText });
    this.setState({ newTaskText: '', tasks: [response.data, ...tasks] });
  };

  fetchTasks = async () => {
    const response = await axios.get(routes.tasksPath());
    this.setState({ tasks: response.data });
  };

  renderFinishedTasks(tasks) {
    return (
      <div className="todo-finished-tasks">
        {tasks.map((task) => (
          <Item key={task.id} task={task} onClick={this.handleActivateTask(task.id)} />
        ))}
      </div>
    );
  }

  renderActiveTasks(tasks) {
    return (
      <div className="todo-active-tasks">
        {tasks.map((task) => (
          <Item key={task.id} task={task} onClick={this.handleFinishTask(task.id)} />
        ))}
      </div>
    );
  }

  renderForm() {
    const { newTaskText } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm} className="todo-form mx-3">
        <div className="d-flex col-md-3">
          <input
            type="text"
            onChange={this.handleChangeText}
            value={newTaskText}
            required
            className="form-control me-3"
            placeholder="I am going..."
          />
          <button type="submit" className="btn btn-primary">add</button>
        </div>
      </form>
    );
  }

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter((t) => t.state === 'active');
    const finishedTasks = tasks.filter((t) => t.state === 'finished');

    return (
      <div>
        <div className="mb-3">
          {this.renderForm()}
        </div>
        {activeTasks.length > 0 && this.renderActiveTasks(activeTasks)}
        {finishedTasks.length > 0 && this.renderFinishedTasks(finishedTasks)}
      </div>
    );
  }
}
// END