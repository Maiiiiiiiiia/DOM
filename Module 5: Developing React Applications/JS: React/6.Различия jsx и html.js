// Реализуйте и экспортируйте по умолчанию компонент Progress, который принимает свойство percentage и рисует статический прогресс бар.

// Использование:

// <Progress percentage={40} />;
// Результат:

// <div class="progress">
//   <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" aria-label="progressbar" style="width: 40%;">
//   </div>
// </div>
// Стиль width – вычисляется динамически исходя из переданного значения percentage
// Аттрибут aria-valuenow – вычисляется динамически и равен percentage

export default class Progress extends React.Component {
    render() {
      const { percentage } = this.props;
      return (
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="progressbar"
          />
        </div>
      );
    }
  }