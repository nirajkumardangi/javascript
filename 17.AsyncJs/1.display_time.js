// program to display time every 3 seconds
function displayTime() {

    // return new date and time
    let dateTime= new Date();

    // returns the current local time
    let time = dateTime.toLocaleTimeString();

    console.log(time)

    // display the time after 3 seconds
     setTimeout(displayTime, 3000);
}

// calling the function
displayTime();