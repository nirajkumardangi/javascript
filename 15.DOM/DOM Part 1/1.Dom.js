let element;

// element = document;
// element = document.all;
// element = document.head;
// element = document.body;
// element = document.title;
// element = document.links;
// element = document.links[2];
// element = document.images;
// element = document.forms;
// element = document.doctype;
// element = document.URL;
// element = document.domain;

// console.log(element);




//=====================================================================//
// 👉 How to target html elements ==>

// element = document.getElementById("footer");
// element = document.getElementsByClassName("list");
// element = document.getElementsByClassName("list")[1];
// element = document.getElementsByTagName("ul")

// console.log(element);


//=====================================================================//
// 👉 DOM Get Methods ==>

// element = document.getElementById("header").innerText
// element = document.getElementById("content").innerText
// element = document.getElementById("header").innerHTML
// element = document.getElementById("header").getAttribute("class")
// element = document.getElementById("header").attributes
// element = document.getElementById("header").attributes[2].value
// element = document.getElementById("header").attributes[2].name

// console.log(element);



//=====================================================================//
// 👉 DOM Set Method ==>

// 1>>- innerText --> 
// element = document.getElementById("header").innerText = "Hello"

// 2>>-- innerHTML -->
// element = document.getElementById("header").innerHTML = "<h1>WOW</h1>"

// 3>>-- setAttribute -->
// document.getElementById("header").setAttribute("class","xyz");
// document.getElementById("header").setAttribute("style","border: 10px dotted yellow")

// 4>>-- Attribute -->
// element = document.getElementById("header").attributes[2]
// element = document.getElementById("header").attributes[2].value = "border: 10px solid blue";
// element = document.getElementById("header").attributes[2].value = "text-decoration: underline; color: orange";

// 5>>-- removeAttribute -->
// element = document.getElementById("header").removeAttribute("style");

console.log(element);


//=====================================================================//
// 👉 Advanced querySelector ==>

// document.querySelector("#header").innerHTML = "<h1>WOW</h1>"
// element = document.querySelectorAll(".list");
// element = document.querySelectorAll(".list")[1].innerHTML;
// element = document.querySelectorAll("ul")[2].innerHTML;
// element = document.querySelectorAll("*");
// element = document.querySelectorAll("#header h1");
// element = document.querySelectorAll("#content p");
// element = document.querySelectorAll("#content, h1");
// element = document.querySelectorAll("ul.list > li");
// element = document.querySelectorAll("ul ~ p");
// element = document.querySelectorAll('ul + p');
// element = document.querySelectorAll("ul.list li:nth-child(3)");
// element = document.querySelectorAll("link");
// element = document.querySelectorAll(".list")[1].innerHTML;

// console.log(element);


//=====================================================================//
// 👉 DOM CSS Styling ==>


// // >>- style -->
// document.querySelector("#header").style.backgroundColor = "lightPink";
// element = document.querySelector("#header").style.color = "blue";

// // >>- className --> className simple return string.
// document.querySelector("#header").className = "xyz abc";
// element = document.querySelector("#header").className;

// // >>- classList --> classList simple return array.
// document.querySelector("#header").classList = "xyz abc";
// element = document.querySelector("#header").classList;

// // >>- classList property -->
// // 1) add():-->
// document.querySelector("#header").classList.add("xyz", "abc", "efg");
// element = document.querySelector("#header").classList;

// // >>- remove():--> 
// document.querySelector("#header").classList.remove("xyz", "abc");
// element = document.querySelector("#header").classList;

// console.log(element);




//=====================================================================//
// 👉 addEventlistener Method ==>


// const header = document.getElementById("header");
// header.onclick = abc;
// function abc() {
//     header.style.background = "red";
// }

// // 1) >>- addEventListener() -->

// document = over, abc;
// document.querySelector("#header").addEventListener("click", function () {
//     document.querySelector("#header").style.border = "10px solid green";

//     // short-cut:---
//     this.style.border = "10px dotted blue";
// })

// // 2) removeEventListener

// document.getElementById("header").addEventListener("click", abc);
// function abc() {
//     document.getElementById("header").style.border = "5px solid green";
// }

// document.getElementById("header").addEventListener("mouseleave", xyz);

// function xyz() {
//     document.getElementById("header").removeEventListener("mouseleave", abc);
// }


//=====================================================================//

// 👉 classList Methods ==>

/* 
   add(class1, class2, ...)
   remove(class1, class2, ...)
   toggle(class)
   contain(class)
   item(index)
   length
*/



//=====================================================================//
// 👉 classList Methods ==>

// // 1) >> - add()-- >
// document.querySelector("#header").addEventListener("click", abc);
// function abc() {
//     document.querySelector("#header").classList.add("abc", "xyz", "efg");
// }

// // 2) >> - remove()-- >
// document.querySelector("#header").classList.remove("xyz");

// // 3) >> - length()-- >
// document.querySelector("#header").classList.add("abc", "xyz", "efg");

// var a = document.querySelector("#header").classList.length;
// console.log(a);

// // 4) >> - toggle()-- >
// document.querySelector("#header").classList.toggle("abc");

// // 5) >> - item()-- >
// var a = document.querySelector("#header").classList.item(0)
// console.log(a);

// // 6) >> - contains()-- >
// var a = document.querySelector("#header").classList.contains("abc")
// console.log(a);