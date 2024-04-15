// Реализуйте компонент <Modal> (Модальное окно)

// Пример работы

// Использование:

// export default class Component extends React.Component {
//   state = { modal: false };

//   toggle = (e) => {
//     this.setState({
//       modal: !this.state.modal,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
//         <Modal isOpen={this.state.modal}>
//           <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
//           <Modal.Body>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit
//           </Modal.Body>
//           <Modal.Footer>
//             <button type="button" className="modal-close-button btn btn-secondary" onClick={this.toggle}>Cancel</button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
// }
// HTML закрытого состояния:

// <div>
//   <button type="button" class="modal-open-button btn btn-danger">Open</button>
//   <div class="modal" style="display: none;" role="dialog">
//     <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="modal-header">
//           <div class="modal-title">Modal title</div>
//           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
//           </button>
//         </div>
//         <div class="modal-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
//         <div class="modal-footer">
//           <button type="button" class="modal-close-button btn btn-default">Cancel</button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// В открытом состоянии строчка: <div class="modal" style="display: none;"> заменяется на <div class="modal fade show" style="display: block;">

// У открытого модального окна две кнопки закрывающие его: крестик справа вверху и кнопка Cancel справа внизу.


// src/Modal.jsx
// BEGIN
const Header = ({ children, toggle }) => (
  <div className="modal-header">
    <div className="modal-title">
      {children}
    </div>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggle} />
  </div>
);
const Body = ({ children }) => <div className="modal-body">{children}</div>;
const Footer = ({ children }) => <div className="modal-footer">{children}</div>;

const Modal = ({ isOpen, children }) => {
  const classes = cn({
    modal: true,
    fade: isOpen,
    show: isOpen,
  });

  const style = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div className={classes} style={style} role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  isOpen: false,
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
// END