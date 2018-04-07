// Initialize Firebase
var config = {
	apiKey: "AIzaSyCV2ylST122mSQG_bBqhQV1_79ho1-1KHE",
	authDomain: "hw7-train-station.firebaseapp.com",
	databaseURL: "https://hw7-train-station.firebaseio.com",
	projectId: "hw7-train-station",
	storageBucket: "hw7-train-station.appspot.com",
	messagingSenderId: "898708951209"
};

firebase.initializeApp(config);

var db = firebase.database();

var trainName = "";
var trainDestination = "";
var firstTrainTime = "";
var trainFrequency = "";

// On clicking the 'new-train-button' (submit on page), push a new 
// train to the database, and create a new entry that populates the table
$("#new-train-button").on("click", function(event) {
	console.log("Clicky");

	// event.preventDefault();

	// trainName = $("#train-trainName").val().trim();
	// trainDestination = $("#train-destination").val().trim();
	// firstTrainTime = $("#train-start").val().trim();
	// trainFrequency = $("#train-frequency").val().trim();

	// console.log(trainName);
	// console.log(trainDestination);
	// console.log(firstTrainTime);
	// console.log(trainFrequency);

	// database.ref().push({
	// 	trainName: trainName,
	// 	trainDestination: trainDestination,
	// 	firstTrainTime: firstTrainTime,
	// 	trainFrequency: trainFrequency,
	// 	dateAdded: firebase.database.ServerValue.TIMESTAMP
	// })

	// var newTrain = $("<tr>");
	
	// var newtrainName = $("<td>").append(trainName);
	// newTrain.append(newName);

	// var newtrainDestination = $("<td>").append(trainDestination);
	// newTrain.append(newRole);

	// var newfirstTrainTime = $("<td>").append(firstTrainTime);
	// newTrain.append(newStartDate);

	// var newtrainFrequency = $("<td>").append(trainFrequency);
	// newTrain.append(newRate);

	// $("tbody").append(newTrain)
})