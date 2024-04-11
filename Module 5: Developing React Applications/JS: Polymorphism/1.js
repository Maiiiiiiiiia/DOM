// В этой практике вам предстоит поработать с односвязным списком. 
// Для лучшего понимания задачи, прочитайте литературу, данную в подсказках, и изучите исходники файла Node.js, 
// внутри которого находится реализация односвязного списка. 
// И посмотрите тесты, там видно как список создается и используется.
// Реализуйте и экспортируйте по умолчанию функцию, 
// которая принимает на вход односвязный список и переворачивает его.

const reverse = (list) => {
    let reversedList = null;
    let current = list;
  
    while (current) {
      reversedList = new Node(current.getValue(), reversedList);
      current = current.getNext();
    }
  
    return reversedList;
  };
  
  export default reverse;