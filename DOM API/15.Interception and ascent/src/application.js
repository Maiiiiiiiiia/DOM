export default () => {
    const tableEl = generateField();
  
    let currentSymbol = 'x';
    const switchPlayer = () => {
      currentSymbol = currentSymbol === 'x' ? 'o' : 'x';
    };
  
    tableEl.addEventListener('click', (e) => {
      if (e.target.textContent === 's') {
        e.target.textContent = currentSymbol;
      }
      switchPlayer();
    });
  
    const root = document.querySelector('.root');
    root.append(tableEl);
  };