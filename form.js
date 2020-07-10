const form = document.querySelector('#signup-form');
const cc = document.querySelector('#cc');
const terms = document.querySelector('#terms');
const options = document.querySelector('#options')

form.addEventListener('submit', (e) => {
  alert('sunmitted the form');
  // capturig the form's data
  console.log(`cc: ${cc.value}`);
  console.log(`terms: ${terms.checked}`);
  console.log(`options: ${options.value}`);
  // adding a method on the event object to prevent the form from going to a new page
  e.preventDefault();

  // actions we could do with this include: 1.send form data to db 2. append somethinfg to the page using form data
})


// below shows how data can be captured using the input event
const formData = {};
// cc.addEventListener('input', (e) => {
//   console.log('cc changed', e);
//   formData['cc'] = e.target.value;
// });

// terms.addEventListener('input', (e) => {
//   console.log('terms changed', e);
//   formData['terms'] = e.target.checked;
// });

// options.addEventListener('input', (e) => {
//   console.log('options changed', e);
//   formData['options'] = e.target.value;
// });

// the code above can be refactored with the following
// for(let input of[cc, terms, options]) {
//   input.addEventListener('input', (e) => {
//     // now using the e enet to add to the formData object
//     formData[e.target.name] = e.target.value;
//   });
// }

// further destructuring could be done to capture the checkbox value
for(let input of [cc, terms, options]) {
  input.addEventListener('change', ({target}) => {
    const {name, value, type, checked} = target;
    formData[name] = type === terms? checked : value;
    console.log(formData);
  });
}