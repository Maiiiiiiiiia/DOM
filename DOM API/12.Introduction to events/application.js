// @ts-check

export default () => {
    // BEGIN (write your solution here)
    const button = document.getElementById('alert-generator');
    let count = 0;
    button.addEventListener('click', () => {
      const divEl = document.createElement('div');
      divEl.className = 'alert alert-primary';
      divEl.textContent = `Alert ${++count}`;
      const timerId = setTimeout(() => {
        divEl.remove();
      }, 3 * 1000);
      divEl.onclick = function () {
        clearTimeout(timerId);
        this.remove();
      }
      document.querySelector('.alerts').prepend(divEl);
  
    });
    // END
  };
  