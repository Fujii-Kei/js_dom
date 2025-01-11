const buttonEl = document.createElement('button');
buttonEl.textContent = 'Click me!';
const div1El = document.querySelector(".container");
div1El.appendChild(buttonEl);

const bodyEl = document.querySelector('body');
bodyEl.textContent = null;