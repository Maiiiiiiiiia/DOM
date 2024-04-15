export default class Autocomplete extends React.Component {
    constructor(props) {
      super(props);
      this.state = { countries: [] };
    }
  
    handleClick = async (e) => {
      const term = e.target.value;
      if (term.length === 0) {
        this.setState({ countries: [] });
        return;
      }
      try {
        const res = await axios.get('/countries', { params: { term } });
        this.setState({ countries: res.data });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    render() {
      const { countries } = this.state;
      return (
        <div>
          <form>
            <input type="text" className="form-control" placeholder="Enter Country" onChange={this.handleClick}/>
          </form>
          {countries.length > 0 && (
            <ul>
              {countries.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          )}
  
        </div>
      );
    }
  }

//   teachers solution
// export default class Autocomplete extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { countries: [], text: '' };
//     }
  
//     handleChangeText = async ({ target: { value } }) => {
//       if (value === '') {
//         this.setState({ text: '', countries: [] });
//         return;
//       }
//       this.setState({ text: value });
//       const res = await axios.get('/countries', { params: { term: value } });
//       this.setState({ countries: res.data });
//     };
  
//     renderCountries() {
//       const { countries } = this.state;
//       return (
//         <ul>
//           {countries.map((c) => <li key={c}>{c}</li>)}
//         </ul>
//       );
//     }
  
//     render() {
//       const { countries, text } = this.state;
  
//       return (
//         <div>
//           <form>
//             <input type="text" onChange={this.handleChangeText} value={text} className="form-control" placeholder="Enter Country" />
//           </form>
//           {countries.length > 0 && this.renderCountries()}
//         </div>
//       );
//     }
//   }
