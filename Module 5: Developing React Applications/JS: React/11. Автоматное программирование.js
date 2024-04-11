// Реализуйте компонент <Collapse>, который по клику на ссылке отображает или скрывает свое содержимое. Если содержимое скрыто, то клик раскрывает его. И наоборот - если содержимое отображается, то клик скрывает контент. Содержимое передается в компонент через свойство text. За начальное состояние открытости, отвечает свойство opened, которое по умолчанию равно true.

//my solution

import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened: props.opened !== undefined ? props.opened : true };


  }

  handleClick = () => {
    this.setState({ opened: !this.state.opened });
  };

  render() {
    const { text } = this.props;
    const { opened } = this.state;

		const aClass = cn('btn','btn-primary');
		const dClass = cn('card', 'card-body')

    return (
      <div>
        <p>
          <a aria-expanded={opened} className={aClass} data-bs-toggle="collapse" href="#" role="button" onClick={this.handleClick}>
            Link with href
          </a>
        </p>
        <div className={cn('collapse', { 'show': opened ? 'show' : '' })}>
          <div className={dClass}>
            {text}
          </div>
        </div>
      </div>
    );
  }
}

// export default class Collapse extends React.Component {
//     constructor(props) {
//       super(props);
//       const { opened } = props;
//       this.state = { opened };
//     }
  
//     handleToggle = () => {
//       this.setState(({ opened }) => ({ opened: !opened }));
//     };
  
//     render() {
//       const { opened } = this.state;
//       const { text } = this.props;
//       const classes = cn({
//         collapse: true,
//         show: opened,
//       });
  
//       return (
//         <div>
//           <p>
//             <a
//               className="btn btn-primary"
//               onClick={this.handleToggle}
//               data-bs-toggle="collapse"
//               href="#"
//               role="button"
//               aria-expanded={opened}
//             >
//               Link with href
//             </a>
//           </p>
//           <div className={classes}>
//             <div className="card card-body">
//               {text}
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   Collapse.defaultProps = {
//     opened: true,
//   };