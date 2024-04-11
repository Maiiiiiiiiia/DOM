// Реализуйте компонент ListGroup, который отрисовывает переданных детей, оборачивая их в список.

// Пример использования:

// <ListGroup>
//   <p>one</p>
//   <p>two</p>
// </ListGroup>;
// Результат:

// <ul class="list-group">
//   <li class="list-group-item"><p>one</p></li>
//   <li class="list-group-item"><p>two</p></li>
// </ul>

export default class ListGroup extends React.Component {
    render() {
      const { children } = this.props;
      return (
        <ul className="list-group">
          {React.Children.map(children, (item) => <li className="list-group-item">{item}</li>)}
        </ul>
      );
    }
  }