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

db = firebase.database();