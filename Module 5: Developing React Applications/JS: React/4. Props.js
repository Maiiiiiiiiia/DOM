// src/Card.jsx
// Реализуйте и экспортируйте по умолчанию компонент Card, который принимает на вход свойства title и text. И возвращает jsx с подставленными значениями. Если свойства не переданы, вместо них подставляются строки "title" и "text". Пример:

// const title = "title 1";
// const text = "text 1";
// ReactDOM.render(<Card title={title} text={text} />);

// // вывод
// <div className="card">
//   <div className="card-body">
//     <h4 className="card-title">title 1</h4>
//     <p className="card-text">text 1</p>
//   </div>
// </div>;

// // без пропсов
// ReactDOM.render(<Card />);

// // вывод
// <div className="card">
//   <div className="card-body">
//     <h4 className="card-title">title</h4>
//     <p className="card-text">text</p>
//   </div>
// </div>;

export default class Card extends React.Component {
    render() {
      const { title, text } = this.props;
      return (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{text}</p>
          </div>
        </div>
      );
    }
  }
  
  Card.defaultProps = {
    title: 'title',
    text: 'text',
  };