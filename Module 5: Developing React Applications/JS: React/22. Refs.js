// src/MarkdownEditor.jsx
// Реализуйте компонент <MarkdownEditor />, который является React оберткой плагина @toast-ui/editor. Этот плагин позволяет встроить в страницу Markdown-редактор.

// const editor = new Editor({
//   el: element,
//   hideModeSwitch: true,
// });

// editor.addHook('change', () => {
//   const content = editor.getMarkdown();
//   // код который будет вызван при изменении содержимого редактора
// });
// Компонент принимает на вход функцию как свойство onContentChange, которая вызывается при каждом изменении в редакторе. Функция принимает на вход содержимое редактора. Его использование видно в файле src/index.jsx.


// BEGIN
export default class MarkdownEditor extends React.Component {
    constructor(props) {
      super(props);
      this.rootElement = React.createRef();
    }
  
    componentDidMount() {
      const editor = new Editor({
        el: this.rootElement.current,
        hideModeSwitch: true,
      });
      editor.addHook('change', () => this.onChange(editor));
    }
  
    onChange = (editor) => {
      const { onContentChange } = this.props;
      onContentChange(editor.getMarkdown());
    };
  
    render() {
      return <div ref={this.rootElement} />;
    }
  }
  // END