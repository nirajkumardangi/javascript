let inputNameElement = document.getElementById('input-name');
let outputNameElement = document.getElementById('output-name');

let inputAgeElement = document.getElementById('input-age');
let outputAgeElement = document.getElementById('output-age');

// outputNameElement.innerText = localStorage.getItem('myName');
// outputAgeElement.innerText = localStorage.getItem('myAge');

// inputNameElement.addEventListener('input', (e) => {
//   localStorage.setItem('myName', e.target.value);
//   outputNameElement.innerText = localStorage.getItem('myName');
// });

// inputAgeElement.addEventListener('input', (e) => {
//   localStorage.setItem('myAge', e.target.value);
//   outputAgeElement.innerText = localStorage.getItem('myAge');
// });

const myData = JSON.parse(localStorage.getItem('myData')) || {};

if (myData.name) {
  outputAgeElement.innerText = myData.name;
}

if (myData.age) {
  outputAgeElement.innerText = myData.age;
}

inputNameElement.addEventListener('input', (e) => {
  myData.name = e.target.value;
  localStorage.setItem('myData', JSON.stringify(myData));
  outputNameElement.innerText = e.target.value;
});

inputAgeElement.addEventListener('input', (e) => {
  myData.age = e.target.value;
  localStorage.setItem('myData', JSON.stringify(myData));
  outputAgeElement.innerText = e.target.value;
});


// REMOVE ITEM
// localStorage.removeItem('myData')