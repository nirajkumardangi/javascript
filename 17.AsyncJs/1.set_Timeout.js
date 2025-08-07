function greet() {
    console.log("Hello, after 2000 millisecond");
}

const timeOutId = setTimeout(greet, 2000);

// clearTimeout

clearTimeout(timeOutId);