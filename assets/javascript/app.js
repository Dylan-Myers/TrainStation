// Initialize Firebase
var config = {
    apiKey: "AIzaSyBD8lgk5At50spuAsSioKQ8zMRAaaE8Plg",
    authDomain: "train-sch-724b4.firebaseapp.com",
    databaseURL: "https://train-sch-724b4.firebaseio.com",
    projectId: "train-sch-724b4",
    storageBucket: "train-sch-724b4.appspot.com",
    messagingSenderId: "507932868239",
    appId: "1:507932868239:web:ecea987348ffb2a0dbfafa"
};


firebase.initializeApp(config);

var database = firebase.database();

// Button to add trains
$("#add-train-btn").on("click", function(event){
    event.preventDefault();

    //grabs input from user
    var newTrain = $("#train-input").val().trim();
    var newLine = $("#line-input").val().trim();
    var newDestination = $("#destination-input").val().trim();
    var newDeparture = $("#departure-input").val().trim();
    var newFreq = $("#frequency-input").val().trim();
    var newPlat = $("#platform-input").val().trim();

    //tempary object for holding new train data

    var createTrain = {
        train: newTrain,
        line: newLine,
        destination: newDestination,
        departure: newDeparture,
        freq: newFreq,
        plat: newPlat
    };


    //upload train data
    database.ref().push(createTrain);

    //console logs
    console.log(createTrain.train);
    console.log(createTrain.line);
    console.log(createTrain.destination);
    console.log(createTrain.departure);
    console.log(createTrain.freq);
    console.log(createTrain.plat);

    //Clearing all text boxes
    $("#train-input").val("");
    $("#line-input").val("");
    $("#destination-input").val("");
    $("#departure-input").val("");
    $("#frequency-input").val("");
    $("#platform-input").val("");
});



//creating firebase event for adding trains to the data base
database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val());

    // Storing into variables
    var newTrain = childSnapshot.val().train;
    var newLine = childSnapshot.val().line;
    var newDestination = childSnapshot.val().destination;
    var newDeparture = childSnapshot.val().departure;
    var newFreq = childSnapshot.val().freq;
    var newPlat = childSnapshot.val().plat;

    console.log(newTrain);
    console.log(newLine);
    console.log(newDestination);
    console.log(newDeparture);
    console.log(newFreq);
    console.log(newPlat);

    //momemnt js things (still figuring this out)


    //appending to table
    $("#train-table > tbody").append(newRow);


});
