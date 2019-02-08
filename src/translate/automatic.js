let elementsOnPage = document.getElementsByName('cssProperty');
const makeChanges = document.getElementById('modify');




const set = () => {
 
  for (let i = 0; i < elementsOnPage.length; i++) {
    let cssProperty = elementsOnPage[i].getAttribute('id');
    let cssValue = elementsOnPage[i].value;
    makeChanges.style[cssProperty] = cssValue;
  }

};

document.getElementById('set').addEventListener('click', set);
