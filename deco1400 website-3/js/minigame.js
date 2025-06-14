document.addEventListener("readystatechange", function(event) {
	if(event.target.readyState == "interactive") {

		// Adding a "JavaScript is Enabled" Body Class

		document.querySelector("body").classList.add("js");

		// "Become Part of the Story!" Form Submission

		const formButton = document.querySelector("#details-form form button");

		document.querySelector("#details-form form").addEventListener("submit", function(event) {

			let firstName = document.querySelector("#form-first-name").value;
			let lastName = document.querySelector("#form-last-name").value;
			let complete = false;

			console.log(firstName);
			console.log(lastName);

			if(firstName != "" && lastName != "") {
				complete = true;
			}

			if(firstName == "") {

				let formFirstName = document.querySelector("#form-first-name");
				formFirstName.classList.add("error");

				let formFirstNameLabel = formFirstName.closest(".form-item").querySelector("label");
				formFirstNameLabel.classList.add("error");

			}

			if(lastName == "") {

				let formLastName = document.querySelector("#form-last-name");
				formLastName.classList.add("error");

				let formLastNameLabel = formLastName.closest(".form-item").querySelector("label");
				formLastNameLabel.classList.add("error");

			}

			if(complete) {

				console.log("Complete Form");
				formButton.innerHTML = "All Done!";
				formButton.setAttribute("disabled", "true");

				const nameSpans = document.querySelectorAll(".name");
				for(let nameSpan of nameSpans) {

					nameSpan.innerHTML = firstName;

					var age = document.querySelector("input[name=age]:checked").value;
					if(age != "") {
						nameSpan.setAttribute("title", `Age: ${age}`);
					}

				}

			}
			else {
				console.log("Incomplete Form");
				formButton.innerHTML = "Try Again";
			}

			event.preventDefault();

		});

		const formFields = document.querySelectorAll("#form-first-name, #form-last-name");
		for(formField of formFields) {
			formField.addEventListener("keydown", function() {
				this.classList.remove("error");
				this.closest(".form-item").querySelector("label").classList.remove("error");
			});
		}

		// Simple Guessing Game

		function runGame(event) {

			let computerGuess = Math.ceil(Math.random() * 30);
			console.log(`Computer Guess: ${computerGuess}`);

			let userGuess = parseInt(document.querySelector("#form-number").value);
			console.log(`User Guess: ${userGuess}`);

			let message = "";
			let messageColour = "";

			if(userGuess == computerGuess) {
				message = "Congratulations! You have won a discount code : WXYDG ";
				messageColour = "green";
			} else {
                message = `Sorry,  try again! The number picked is ${computerGuess}`;
                messageColour = "red";
            }
			// else if(userGuess == (computerGuess - 1) || userGuess == (computerGuess + 1)) {
			// 	message = `Nope. Close! The computer picked ${computerGuess}.`;
			// 	messageColour = "orange";
			// }
			// else if(userGuess != computerGuess) {
			// 	message = `Nope. Nowhere near it! The computer picked ${computerGuess}`;
			// 	messageColour = "red";
			// }

			//alert(message);
			const computerGuessOutput = document.querySelector("#simple-guessing-game .computer-guess");
			computerGuessOutput.innerHTML = message;
			computerGuessOutput.style.color = messageColour;

			event.preventDefault();

		}

		document.querySelector("#simple-guessing-game form").addEventListener("submit", runGame);

	}
});