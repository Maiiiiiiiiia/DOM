// В этом задании необходимо создать компонент, выводящий список определений.

// dl – тег, который используется при создании списков определений. Совместно с этим тегом используется тег dt (содержит название определения) и dd (описание определения):

// <dl>
//   <dt>Coffee</dt>
//   <dd>Black hot drink</dd>
//   <dt>Milk</dt>
//   <dd>White cold drink</dd>
// </dl>
// src/DefinitionsList.jsx
// Реализуйте и экспортируйте по умолчанию компонент DefinitionsList, который принимает свойство data следующей структуры:

// const definitions = [
//   { dt: 'one', dd: 'two', id: 1 },
//   { dt: 'another term', dd: 'another description', id: 2 },
// ];

// <DefinitionsList data={definitions} />;
// Результатом должен быть следующий вывод:

// <dl>
//   <dt>one</dt>
//   <dd>two</dd>
//   <dt>another term</dt>
//   <dd>another description</dd>
// </dl>
// Если data — это пустой массив, то ничего не должно рендериться

export default class Definitions extends React.Component {
    render() {
      const { data } = this.props;
      if (data.length === 0) {
        return null;
      }
  
      const tags = data.map(({ dt, dd, id }) => (
        <React.Fragment key={id}>
          <dt>{dt}</dt>
          <dd>{dd}</dd>
        </React.Fragment>
      ));
  
      return (
        <dl>
          {tags}
        </dl>
      );
    }
  }