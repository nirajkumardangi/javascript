const button = document.getElementById("myButton");
button.addEventListener("click", function() {
  console.log(this); // `this` refers to the button element
});