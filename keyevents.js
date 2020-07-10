const input = document.querySelector('#username');
input.addEventListener('keydown', (e) => {
  console.log("key down");
});

input.addEventListener('keyup', (e) => {
  console.log("key up");
});

input.addEventListener('keypress', (e) => {
  console.log("key press");
});

// shopping list
const addItem = document.querySelector('#item');
const itemsUl = document.querySelector('#lists');

addItem.addEventListener('keypress', function(e) {
  // console.log(e);
  if(e.key === 'Enter') {
    // an attempt at making sure an empty string doesn't get passd in
    if(!addItem.value) return;
    // add a new item to the unordered list
    const newItemText = addItem.value;//used the variable since 'this' kept returning undefined
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUl.appendChild(newItem);
    // to clear the input field afterwards
    addItem.value = "";
    
  }
});
