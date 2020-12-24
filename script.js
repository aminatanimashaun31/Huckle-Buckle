// google.charts.load('current', {'packages':['gauge']});
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {

//         var data = google.visualization.arrayToDataTable([
//           ['Label', 'Value'],
//           ['Meter', 80]
//         ]);

//         var options = {
//           width: 600, height: 220,
//           redFrom: 90, redTo: 100,
//           yellowFrom:75, yellowTo: 90,
//           minorTicks: 5
//         };

//         var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

//         chart.draw(data, options);

//         setInterval(function() {
//           data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
//           chart.draw(data, options);
//         }, 13000);

// //        setInterval(function() {
// //          data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
// //          chart.draw(data, options);
// //        }, 5000);
// //        setInterval(function() {
// //          data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
// //          chart.draw(data, options);
// //        }, 26000);
//   }

var zeroCount = document.getElementById('zeroCount');
var hundredCount = document.getElementById('hundredCount');
var playBtn = document.getElementById('playBtn');
var response = document.getElementById('response');
var chosenNumber = document.getElementById('chosenNumber');
var errorMessage = document.querySelector('#errorMessage');

var defaultMessage = 'Expecting Your Guess!';

var randomNumber = getRandomInt();
var count0 = 0, count100 = 0 ,guessedNumber = 0, guessCounter = 0, responseTracker = [];

function getRandomInt( ){
    return Math.floor((Math.random( 0 )  ) *  101 );
}

function refreshGuess( ){
    location.reload();
    guessedNumber = 0, guessCounter = 0, responseTracker = [];
    randomNumber = getRandomInt();
    response.innerText = defaultMessage;
    chosenNumber.value = '';
    playBtn.style.className  = 'input';
}

function playGuess( ){

       expr = /^\d+$/;
       if(!expr.test(chosenNumber.value)){
            displayErrorMessage(  );
            return;
       }

       errorMessage.style.display = 'none';
       guessedNumber = parseInt(chosenNumber.value, 10 );

       responseTracker[guessCounter] = guessedNumber;

       guessCounter++;

       if( guessedNumber > randomNumber ){
           responseTracker[guessCounter] = guessedNumber;
           response.innerText = 'Getting Hotter!';
           count0++;
           animate( responseTracker );

       }
       if( guessedNumber < randomNumber ){
           response.innerText = 'Getting Colder!';
           count100++;
           animate( responseTracker );

       }
       if( guessedNumber == randomNumber ){
               response.innerText = 'You Have Guessed The Number Correctly!';
               playBtn.style.display  = 'none';
        }

       chosenNumber.value = '';
}

function animate( coordinates ){
    for(var index=0 ; index < coordinates.length; index++){

    }
}

function displayErrorMessage( ){
    errorMessage.style.display = 'block';
}