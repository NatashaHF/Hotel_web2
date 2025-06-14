$(document).ready(function() {

	// Adding a "JavaScript is Enabled" Body Class

	$("body").addClass("js");

	// Podcast Player Controls

	$("#podcast .player-controls a:first-child").click(function(event) {
		$(this).parent().toggleClass("playing");
		$("#podcast audio")[0].play();
		event.preventDefault();
	});

	$("#podcast .player-controls a:last-child").click(function(event) {
		$(this).parent().toggleClass("playing");
		$("#podcast audio")[0].pause();
		event.preventDefault();
	});


	// Simple Guessing Game

	$("#page-header .cta-button a").click(function(event) {

		let computerGuess = Math.ceil(Math.random() * 30);
		console.log("Computer Guess: " + computerGuess);

		let userGuess = prompt("What is the temperature where you are?");
		console.log("User Guess: " + userGuess);

		if(userGuess == computerGuess) {
			alert("Nice work! Great minds think alike.");
		}
		else if(userGuess == (computerGuess - 1) || userGuess == (computerGuess + 1)) {
			alert("Nope. No where near, the computer picked " + computerGuess + ".");
		}
		else if(userGuess != computerGuess) {
			alert("Nope. Nowhere near it! The computer picked " + computerGuess + ".");
		}

		event.preventDefault();

	});

});