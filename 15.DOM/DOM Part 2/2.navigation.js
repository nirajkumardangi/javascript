// 🙋‍♀️ DOM TRAVERSAL METHODS ==>
let a,b,c,d;

//=====================================================================//
// >>- parentElement -->
 
// a = document.getElementById('outer').parentElement;
// a = document.getElementById('inner').parentElement;
// document.getElementById("inner").parentElement.style.background = "red";
// document.getElementById("child-c").parentElement.style.background = "red";
// a = document.getElementById("child-c").parentElement; 

// console.log(a);


//=====================================================================//

// >>- 2) parentNode -->

// a = document.getElementById("child-c").parentNode; 
// a = document.getElementById("child-c").nodeName; 
// document.getElementById("child-c").parentNode.style.background = "red";

// console.log(a);


//=====================================================================//

// >>- 3) children -->

// document.getElementById("inner").children[1].style.background = "red";
// a = document.getElementById("inner").children;
// console.log(a);


//=====================================================================//

// >>- 4) childNodes -->

// document.getElementById("inner").childNodes[5].style.background = "red";
// a = document.getElementById("inner").childNodes;
// console.log(a);


//=====================================================================//

// >>- 5) firstElementChild -->

// document.getElementById("inner").firstElementChild.style.background = "red";
// a = document.getElementById("inner").firstElementChild;
// console.log(a);


//=====================================================================//

// >>- 6) lastElementChild -->

// document.getElementById("inner").lastElementChild.style.background = "red";
// a = document.getElementById("inner").lastElementChild;
// console.log(a); 


//=====================================================================//

// >>- 7) firstChild -->

// document.getElementById("inner").firstChild.style.background = "red";
// a = document.getElementById("inner").firstChild;
// b = document.getElementById("child-c").firstChild;
// console.log(a);
// console.log(b);


//=====================================================================//

// >>- 8) lastChild -->

// a = document.getElementById("inner").lastChild;
// b = document.getElementById("child-c").lastChild;
// console.log(a); 
// console.log(b);

//=====================================================================//

// >>- 9) nextElementSibling -->

// b = document.getElementById("child-c").nextElementSibling;
// console.log(b); 

//=====================================================================//

// >>- 10) previousElementSibling -->
// document.getElementById("child-c").previousElementSibling.style.background = "red";

// b = document.getElementById("child-c").previousElementSibling.innerHTML;

// console.log(b);


//=====================================================================//

// >>-11) previousElementSibling -->

// b = document.getElementById("inner-head").previousElementSibling;
// console.log(b);

//=====================================================================//

// >>-12) nextSibling -->

// a = document.getElementById("child-e").nextSibling;
// console.log(a);


//=====================================================================//
// 🙋‍♀️ DOM CREATE METHODS ==>


/* // >>- 1. Create Element -->
let newElement = document.createElement("h2");
 

// >>- 2. Create Text Node -->
let newText = document.createTextNode("This is just text");
console.log(newText);

// >>- 3. Create Comment -->
let newComment = document.createComment("This is just comment");  
console.log(newComment);
 */ 

//=====================================================================//


// 🙋‍♀️ DOM APPEND METHOD ==>

/* // >>- 1. Append Child --> Only Append
newElement.appendChild(newText); 

document.getElementById("test").appendChild(newElement);
console.log(newElement);

// >>- 2. Append comment --> Only Append
document.getElementById("test").appendChild(newComment); 

// >>- 3. Insert Before --> Only Append
let target = document.getElementById("test");
target.insertBefore(newElement, target.childNodes[0]); */


//================================================================//

// >>- 4. Insert Adjacent Element --> Create & App end

// let newElement = document.createElement("h2");
// let newText = document.createTextNode("This is just text");
// newElement.appendChild(newText);
// let target = document.getElementById("test1");
// target.insertAdjacentElement("beforebegin", newElement);

//================================================================//

// >>- 5. Insert Adjacent HTML --> Create & Append
// let target = document.getElementById("test1"); 
// let newElement = "<h>This is Just Heading</h>";
// target.insertAdjacentHTML("beforebegin", newElement);
// target.insertAdjacentHTML("afterbegin", newElement);
// target.insertAdjacentHTML("beforeend", newElement);
// target.insertAdjacentHTML("afterend", newElement);

//================================================================//

// >>- 6. Insert Adjacent Text --> Create & Append
// let target = document.getElementById("test1");
// let newText = "This is just Text";
// target.insertAdjacentText("beforebegin", newText);
// target.insertAdjacentText("afterbegin", newText);
// target.insertAdjacentText("beforeend", newText);
// target.insertAdjacentText("afterend", newText);


// 🙋‍♀️ DOM REPLACE AND REMOVE METHODS: ==>
// >>- 1. Replace Child -->

// let newElement = document.createElement("li");
// let newText = document.createTextNode("this is just text");
// newElement.appendChild(newText);
// let target = document.getElementById("list2");
// let oldElement = target.children[3];
// console.log(oldElement);
// target.replaceChild(newElement, oldElement);


// >>- Remove Child -->
// let target = document.getElementById("list2");
// let oldElement = target.children[0];
// target.removeChild(oldElement);


// 🙋‍♀️ CLONE NODE METHOD ==>
// let target = document.getElementById("list2").children[0];
// let copyElement = target.cloneNode(true);
// console.log(copyElement); 
// document.getElementById("list3").appendChild(copyElement)


// 🙋‍♀️ CONTAINS METHOD ==>
// let parentElement = document.getElementById("test4");
// let target = document.getElementById("para1");
// let find = parentElement.contains(target); 
// console.log(find);


// 🙋‍♀️ DOM hasAttributes & hasChildNodes ==>
// let target = document.getElementById("test5");
// let find = target.hasAttribute("class");
// console.log(find);

// let target = document.getElementById("test5");
// let find = target.hasChildNodes();
// console.log(find);
 