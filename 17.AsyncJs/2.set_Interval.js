function greet(){
    console.log("Hello, on every 1000 millisecond");
}

const intervalId = setInterval(greet, 1000);

// clear interval

clearInterval(intervalId);