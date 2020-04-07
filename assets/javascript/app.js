//TRIVIA GAME

//insert timer that counts down from 2 mins

//insert functionality so that when time has run out, the page displays how many questions the user got right, how many wrong.
$(document).ready(function() { 


    //  Set our number counter to 100.
    var number = 90;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    //$("#stop").on("click", stop);

    //When page loads, begin counting down. does this already happen?

    //  When the resume button gets clicked, execute the run function.
    //$("#resume").on("click", run);

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
});