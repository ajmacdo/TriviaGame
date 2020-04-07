//TRIVIA GAME

//The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.



//insert timer that counts down from 1 and a half mins

//insert functionality so that when time has run out, the page displays how many questions the user got right, how many wrong.
$(document).ready(function () {

    //  Set our number counter to 100.
    var number = 20;

    //  Variable that will hold our interval ID when we execute the "run" function
    var intervalId;

    //  The run function sets an interval that runs the decrement function once a second.
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {
        //  Decrease number by one.
        number--;

        //  Show the number in the #remaining tag.
        $("#remaining").html("<h2>" + number + "</h2>");

        //  Once number hits zero...
        if (number === 0) {
            //  ...run the stop function.
            stop();
            //  Alert the user that time is up.
            alert("Time's Up! How'd you do?");
        }
    }

    //  The stop function
    function stop() {
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
    }

    //  Execute the run function.
    run();

});