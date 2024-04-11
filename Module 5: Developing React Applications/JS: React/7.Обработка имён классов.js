// Реализуйте и экспортируйте компонент Alert, который отрисовывает алерт бутстрапа. Компонент принимает на вход два свойства:

// text - отображаемый текст
// type - тип алерта, может принимать одно из следующих значений: primary, secondary, success, danger, warning, info, light, dark;
// Пример использования:

// <Alert type="warning" text="what is love?" />;
// Вывод:

// <div class="alert alert-warning" role="alert">what is love?</div>

export default class Alert extends React.Component {
    render() {
      const { type, text } = this.props;
  
      const alertClass = cn('alert', `alert-${type}`);
  
      return (
        <div className={alertClass} role="alert">
          {text}
        </div>
      );
    }
  }