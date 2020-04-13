//TRIVIA GAME


//timer stopped displaying after inserted if/else words


//The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

//--> SO - instead of alert, display text to screen that reads, "All done! Correct Answers: __ Incorrect Answers: __ Unanswered: __"



//insert timer that counts down 
//insert functionality so that when time has run out, the page displays how many questions the user got right, how many wrong.
$(document).ready(function () {

    //  Set our number counter to 100 (shorter for now)
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
            $("#end-screen").show();
            $("#quiz-screen").hide();
            $("#score").text("My score is " + correct.length)
        }
    }

    //  The stop function
    function stop() {
        //  Clears our intervalId
        //  We just pass the name of the interval to the clearInterval function.
        clearInterval(intervalId);
    }

    //  Execute the run function.
    run();




    //create variables to hold # of correct, incorrect, and unanswered questions
    var correct = [];
  


    //wrap the below three into an outer function in order to enclose in an if/else? 

    //If user selects correct answer, add 1 to "correct" 
    function scoring() {

        //create function so that if user clicks correct answer, 1 point is added to the # of correct
        $(".correctAns").on("click", function () {
          var answer = $(this).val()
            correct.push(answer);
            console.log(answer);
        });

        //if user clicks wrong answer, 1 point is added to incorrect
        $(".incorrectAns").on("click", function () {
            console.log("incorrect");
        });
        //if user does not select an answer, 1 point is added to unanswered
        //   $(".noAns").on("click", function() {
        //     unanswered++;
        // console.log("unanswered");
        //   });

    }
    scoring();
});
