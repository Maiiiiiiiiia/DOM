// Реализуйте компонент <MyForm>, отображающий форму из шести элементов:

// email – инпут типа email
// password – инпут типа password
// address – textarea
// city – текстовый инпут
// country – select со следующими значениями: argentina, russia, china.
// Accept Rules – checkbox булево значение должно быть приведено к строке
// После сабмита формы появляется таблица, в которой показываются значения всех полей. Из этой формы можно вернуться в редактирование по кнопке Back. При этом все данные должны оказаться на своих местах.

import React from 'react';

// BEGIN (write your solution here)
export default class Myform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
      acceptRules: false,
      submittingState: 'fillingForm',
    };
  }

  emaleHandleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  passwordHandleChange = (e) => {
    this.setState({ password: e.target.value });
  };

  addressHandleChange = (e) => {
    this.setState({ address: e.target.value });
  };

  cityHandleChange = (e) => {
    this.setState({ city: e.target.value });
  };

  countryHandleChange = (e) => {
    this.setState({ country: e.target.value });
  };

  // acceptRulesHandleChange = (e) => {
  //   this.setState({ acceptRules: e.target.checked });
  // };
  acceptRulesHandleChange = () => {
    const { acceptRules } = this.state;
    this.setState({ acceptRules: !acceptRules });
  };



  handleSubmitForm = (e) => {
    e.preventDefault();
    this.setState({ submittingState: 'submitted' });

  };

  handleSubmitFormBack = (e) => {
    e.preventDefault();
    this.setState({ submittingState: 'fillingForm' });
  };

  renderResultTable() {
    const { acceptRules, address, city, country, email, password } = this.state;

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.handleSubmitFormBack}>Back</button>
        <table className="table">
          <tbody>
            <tr>
              <td>acceptRules</td>
              <td>{`${acceptRules}`}</td>
            </tr>
            <tr>
              <td>address</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td>city</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>country</td>
              <td>{country}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>password</td>
              <td>{password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  renderForm() {
    const { email, password, city, address, country, acceptRules } = this.state;
    return (
        <form onSubmit={this.handleSubmitForm} name="myForm">
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="col-form-label">Email</label>
            <input type="email" name="email" className="form-control" id="email" placeholder="Email" value={email} onChange={this.emaleHandleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="password" className="col-form-label">Password</label>
            <input type="password" name="password" className="form-control" id="password" placeholder="Password" value={password} onChange={this.passwordHandleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="address" className="col-form-label">Address</label>
            <textarea type="text" className="form-control" name="address" id="address" placeholder="1234 Main St" value={address} onChange={this.addressHandleChange}></textarea>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="city" className="col-form-label">City</label>
            <input type="text" className="form-control" name="city" id="city" value={city} onChange={this.cityHandleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="country" className="col-form-label">Country</label>
            <select id="country" name="country" className="form-control" value={country} onChange={this.countryHandleChange}>
              <option value="">Choose</option>
              <option value="argentina">Argentina</option>
              <option value="russia">Russia</option>
              <option value="china">China</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-check">
              <label className="form-check-label" htmlFor="rules">
                <input id="rules" type="checkbox" name="acceptRules" className="form-check-input" checked={acceptRules} onChange={this.acceptRulesHandleChange}/>
                Accept Rules
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
    );
  }

  render() {
    const { submittingState } = this.state;
    switch (submittingState) {
      case 'fillingForm':
        return this.renderForm();
      case 'submitted':
        return this.renderResultTable();
      default:
        throw new Error(`'${submittingState}' - unknown state`);
    }
  }
}
// END

// export default class MyForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         form: {
//           email: '',
//           password: '',
//           city: '',
//           country: '',
//           address: '',
//           acceptRules: false,
//         },
//         submittingState: 'fillingForm',
//       };
//     }
  
//     handleChangeField = ({ target }) => {
//       const { form } = this.state;
//       const value = target.type === 'checkbox' ? target.checked : target.value;
//       this.setState({ form: { ...form, [target.name]: value } });
//     };
  
//     handleBackToForm = () => {
//       this.setState({ submittingState: 'fillingForm' });
//     };
  
//     handleSubmitForm = (e) => {
//       e.preventDefault();
//       this.setState({ submittingState: 'submitted' });
//     };
  
//     renderRow = (key) => {
//       const { form } = this.state;
//       return (
//         <tr key={key}>
//           <td>{key}</td>
//           <td>{form[key].toString()}</td>
//         </tr>
//       );
//     };
  
//     renderResult() {
//       const { form } = this.state;
//       const keys = Object.keys(form).sort();
//       return (
//         <div>
//           <button type="button" className="btn btn-primary" onClick={this.handleBackToForm}>Back</button>
//           <table className="table">
//             <tbody>
//               {keys.map(this.renderRow)}
//             </tbody>
//           </table>
//         </div>
//       );
//     }
  
//     renderForm() {
//       const { form } = this.state;
  
//       return (
//         <form onSubmit={this.handleSubmitForm} name="myForm">
//           <div className="col-md-6 mb-3">
//             <label htmlFor="email" className="col-form-label">Email</label>
//             <input
//               type="email"
//               name="email"
//               onChange={this.handleChangeField}
//               value={form.email}
//               className="form-control"
//               id="email"
//               placeholder="Email"
//             />
//           </div>
//           <div className="col-md-6 mb-3">
//             <label htmlFor="password" className="col-form-label">Password</label>
//             <input
//               type="password"
//               onChange={this.handleChangeField}
//               value={form.password}
//               name="password"
//               className="form-control"
//               id="password"
//               placeholder="Password"
//             />
//           </div>
//           <div className="col-md-6 mb-3">
//             <label htmlFor="address" className="col-form-label">Address</label>
//             <textarea type="text" name="address" value={form.address} onChange={this.handleChangeField} className="form-control" id="address" placeholder="1234 Main St" />
//           </div>
//           <div className="col-md-6 mb-3">
//             <label htmlFor="city" className="col-form-label">City</label>
//             <input type="text" name="city" onChange={this.handleChangeField} value={form.city} className="form-control" id="city" />
//           </div>
//           <div className="col-md-6 mb-3">
//             <label htmlFor="country" className="col-form-label">Country</label>
//             <select id="country" name="country" onChange={this.handleChangeField} className="form-control" value={form.country}>
//               <option value="">Choose</option>
//               <option value="argentina">Argentina</option>
//               <option value="russia">Russia</option>
//               <option value="china">China</option>
//             </select>
//           </div>
//           <div className="col-md-6 mb-3">
//             <div className="form-check">
//               <label className="form-check-label" htmlFor="rules">
//                 <input id="rules" name="acceptRules" className="form-check-input" onChange={this.handleChangeField} type="checkbox" checked={form.acceptRules} />
//                 Accept Rules
//               </label>
//             </div>
//           </div>
//           <button type="submit" className="btn btn-primary">Sign in</button>
//         </form>
//       );
//     }
  
//     render() {
//       const { submittingState } = this.state;
//       switch (submittingState) {
//         case 'fillingForm':
//           return this.renderForm();
//         case 'submitted':
//           return this.renderResult();
//         default:
//           throw new Error(`'${submittingState}' - unknown state`);
//       }
//     }
//   }
//   // END