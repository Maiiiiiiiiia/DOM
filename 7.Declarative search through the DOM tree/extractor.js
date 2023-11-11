export default (document) => {
    // BEGIN (write your solution here)
    const root = document.querySelector('.content');
  
    const categoryName = root.querySelector('h1');
    const categoryTitle = categoryName.innerHTML;
  
    const categoryDescription = root.querySelector('.description');
    const categoryDescriptionTitle = categoryDescription.innerHTML;
  
    const itemsElements = root.querySelectorAll('.links div');
    const items = Array.from(itemsElements).map((item) => {
      const titleElement = item.querySelector('a');
      const descriptionElement = item.querySelector('p');
  
      return {
        title: titleElement.innerHTML,
        description: descriptionElement.innerHTML,
      }
    });
  
    return {
      title: categoryTitle,
      description: categoryDescriptionTitle,
      items,
    };
    // return `title: ${categoryTitle} description: ${categoryDescriptionTitle} ${itemsElementsTitle}`;
    // END
  };
  