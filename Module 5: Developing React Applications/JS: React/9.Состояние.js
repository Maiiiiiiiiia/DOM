// Реализуйте компонент BtnGroup, который отрисовывает две кнопки. Нажатие на любую из кнопок делает ее активной, а другую неактивной. При первой загрузке ни одна из кнопок не нажата.

// Пример использования:

// <BtnGroup />
// Результат:

// <div class="btn-group" role="group">
//   <button type="button" class="btn btn-secondary left">Left</button>
//   <button type="button" class="btn btn-secondary right">Right</button>
// </div>
// После нажатия на левую кнопку, добавляется класс active. В результате список классов выглядит так: btn btn-secondary left active. У правой кнопки поведение соответствующее.

// my solution
export default class BtnGroup extends React.Component {
    constructor(props) {
      super(props);
      this.state = { primaryActive: false, secondaryActive: false };
    }
  
    onChangeClass = (button) => {
      if (button === 'primary') {
        this.setState({ primaryActive: true, secondaryActive: false });
      } else {
        this.setState({ primaryActive: false, secondaryActive: true });
      }
    };
  
    
    render() {
      const primaryButtonClass = cn('btn', 'btn-secondary', 'left', {
        'active': this.state.primaryActive
      });
  
      const secondaryButtonClass = cn('btn', 'btn-secondary', 'right', {
        'active': this.state.secondaryActive
      });
  
  
      return (
        <div>
          <button className={primaryButtonClass} onClick={() => this.onChangeClass('primary')}>
            Left
          </button>
          <button className={secondaryButtonClass} onClick={() => this.onChangeClass('secondary')}>
            Right
          </button>
        </div>
      );
    }
  }

//   // BEGIN
// export default class BtnGroup extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { active: null };
//     }
  
//     selectLeft = () => this.setActive('left');
  
//     selectRight = () => this.setActive('right');
  
//     setActive = (active) => {
//       this.setState({ active });
//     };
  
//     render() {
//       const { active } = this.state;
  
//       const sharedClasses = {
//         btn: true,
//         'btn-secondary': true,
//       };
  
//       const leftButtonClass = {
//         ...sharedClasses,
//         left: true,
//         active: active === 'left',
//       };
  
//       const rightButtonClass = {
//         ...sharedClasses,
//         right: true,
//         active: active === 'right',
//       };
  
//       return (
//         <div className="btn-group" role="group">
//           <button type="button" onClick={this.selectLeft} className={cn(leftButtonClass)}>Left</button>
//           <button type="button" onClick={this.selectRight} className={cn(rightButtonClass)}>Right</button>
//         </div>
//       );
//     }
//   }
//   // END