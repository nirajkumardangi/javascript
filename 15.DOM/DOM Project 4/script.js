const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        body.style.background = this.id;
    });
});


