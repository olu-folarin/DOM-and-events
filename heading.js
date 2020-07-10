const colors = [
  'red', 'blue', 'green', 'yellow', 'teal', 'indigo', 'tomato'
];

// refactoring the code
const changeColor = (box) => {
  // now to turn the h1 tag's color to the color of any div moused over
  let h1 = document.querySelector('h1');
  h1.style.color = box.style.backgroundColor;
  console.log(box.style.backgroundColor);
}

let container = document.querySelector('#container');
for(let color of colors) {
  let box = document.createElement('div');
  box.style.backgroundColor = color;
  box.classList.add('boxes');
  container.appendChild(box);
  //an event listener that prints the name of a box's background color
  box.addEventListener('mouseover', () => {
    changeColor(box);
  });
}

// to know what part of the page was clicked, add a parameter to the function after the event listener's keyword
document.body.addEventListener('keypress', function(c) {
  console.log(c);
});