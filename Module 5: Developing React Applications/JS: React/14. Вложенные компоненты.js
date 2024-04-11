// Реализуйте простой Todo, с возможностью добавлять и удалять заметки.

// src/TodoBox.jsx
// Основной компонент, который выводит форму для добавления новой записи и выводит список заметок на экран.

// Начальный HTML:

// <div>
//   <div class="mb-3">
//     <form class="d-flex">
//       <div class="me-3">
//         <input type="text" value="" required="" class="form-control" placeholder="I am going...">
//       </div>
//       <button type="submit" class="btn btn-primary">add</button>
//     </form>
//   </div>
// </div>
// src/Item.jsx
// Отрисовывает конкретный элемент списка. Принимает на вход свойства:

// task
// onRemove
// HTML с добавленными заметками:

// <div>
//   <div class="mb-3">
//     <form class="d-flex">
//       <div class="me-3">
//         <input type="text" value="" required="" class="form-control" placeholder="I am going...">
//       </div>
//       <button type="submit" class="btn btn-primary">add</button>
//     </form>
//   </div>
//   <div>
//     <div class="row">
//       <div class="col-auto">
//         <button type="button" class="btn btn-primary btn-sm">-</button>
//       </div>
//       <div class="col">second</div>
//     </div>
//     <hr>
//   </div>
//   <div>
//     <div class="row">
//       <div class="col-auto">
//         <button type="button" class="btn btn-primary btn-sm">-</button>
//       </div>
//       <div class="col">first</div>
//     </div>
//     <hr>
//   </div>
// </div>
// Подсказки
// Для получения нового id используйте функцию uniqueId

//   src/Item.jsx
// BEGIN
class Item extends React.Component {
    render() {
      const { task, onRemove } = this.props;
  
      return (
        <div className="row">
          <div className="col-auto">
            <button type="button" className="btn btn-primary btn-sm" onClick={onRemove}>-</button>
          </div>
          <div className="col">
            {task.text}
          </div>
        </div>
      );
    }
  }
  // END
  //   src/TodoBox.jsx
  // BEGIN
  export default class TodoBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = { newTaskText: '', tasks: [] };
    }
  
    handleChangeTask = ({ target: { value } }) => {
      this.setState({ newTaskText: value });
    };
  
    handleRemoveTask = (removingId) => (e) => {
      e.preventDefault();
      const { tasks } = this.state;
      this.setState({ tasks: tasks.filter(({ id }) => id !== removingId) });
    };
  
    handleSubmitForm = (e) => {
      e.preventDefault();
      const { tasks, newTaskText } = this.state;
      const newTask = { id: uniqueId(), text: newTaskText };
      this.setState({ newTaskText: '', tasks: [newTask, ...tasks] });
    };
  
    renderForm() {
      const { newTaskText } = this.state;
      return (
        <form onSubmit={this.handleSubmitForm} className="d-flex">
          <div className="me-3">
            <input
              type="text"
              onChange={this.handleChangeTask}
              value={newTaskText}
              required
              className="form-control"
              placeholder="I am going..."
            />
          </div>
          <button type="submit" className="btn btn-primary">add</button>
        </form>
      );
    }
  
    render() {
      const { tasks } = this.state;
      return (
        <div>
          <div className="mb-3">
            {this.renderForm()}
          </div>
          {tasks.map((task) => (
            <div key={task.id}>
              <Item task={task} onRemove={this.handleRemoveTask(task.id)} />
              <hr />
            </div>
          ))}
        </div>
      );
    }
  }
  // END
