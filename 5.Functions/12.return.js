// function hi(name){
//     console.log('Hello' + name);
//     return;
// }

// hi("Niraj");


function language() {
    let first = 'Hindi',
        second = 'English',
        third = 'Science'
    return {first, second, third};    
}

let {first, second, third} = language();
console.log(first);
console.log(second);
console.log(third);