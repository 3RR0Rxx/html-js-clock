function timer() {
    const clock = document.querySelector('.clock'); //get the HTML element to display the time in it

    //create variables for hours, minutes and seconds
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();

    //adding a '0' if there is only one digit
    if (h < 10) {
        h = '0' + h;
    }

    if (m < 10) {
        m = '0' + m;
    }

    if (s < 10) {
        s = '0' + s;
    }

    var fullTime = `${h}:${m}:${s}` //put hours, minutes and seconds in a string

    clock.textContent = fullTime; //display the time on the page

}

setInterval(timer, 1000); //call the function every seconds