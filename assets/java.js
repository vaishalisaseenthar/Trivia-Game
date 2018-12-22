$(document).ready(function() {
   
    var questionCounter = 0;
    
    var time = 15;
 
    var correctGuesses = 0;

    var incorrectGuesses = 0;

    var questions = [
      {
	    question: "Who was the Whomping Willow planted for?",
	    choices: ["Hagrid", "Harry Potter", "James Potter", "Remus Lupin"],
	    correctAnswer: "Remus Lupin",
	    image: "<img src='images/lupin.jpg' class='img-circle shadow'>"
	  }, 
	  {
	    question: "What is Dumbledore's sister's name?",
	    choices: ["Ariana", "Lilly", "Elizabeth", "Keana"],
	    correctAnswer: "Ariana",
	    image: "<img src='images/ariana.jpg' class='img-circle shadow'>"
	  }, 
	  {
	    question: "Who was the Half-Blood Prince",
	    choices: ["Harry Potter", "Voldemort", "Snape", "Dumbledore"],
	    correctAnswer: "Snape",
	    image: "<img src='images/snape.jpg' class='img-circle shadow'>"
	  }, 
	  {
	    question: "Where did Harry live before his parent's died?",
	    choices: ["Hogwarts", "Godric's Hollow", "America", "Penve's Alley"],
	    correctAnswer: "Godric's Hollow",
	    image: "<img src='images/godric.jpg' class='img-circle shadow'>"
	  }, 
	  {
	    question: "Who was the 5th year Defense aganist the Dark Arts teacher?",
	    choices: ["Snape", "Lupin", "Umbridge", "McGonagall"],
	    correctAnswer: "Umbridge",
	    image: "<img src='images/umbridge.jpg' class='img-circle shadow'>"
	  },
	  {
	    question: "What is the name of the school Victor Krum is from?",
	    choices: ["Durmstrang", "Dunstran", "Bauxbatons", "Hogwarts"],
	    correctAnswer: "Durmstrang",
	    image: "<img src='images/durm.jpg' class='img-circle shadow'>"
	  },
	  {
	    question: "What is the last name of the three brothers who originally owned the Deathly Hallows?",
	    choices: ["Riddle", "Tiffton", "Peverell", "Bellview"],
	    correctAnswer: "Peverell",
	    image: "<img src='images/deathly.jpg' class='img-circle shadow'>"
	  },
	  {
	    question: "What was the name of Hagrid's half-giant brother?",
	    choices: ["Grawp", "Groot", "Gap", "Grown"],
	    correctAnswer: "Grawp",
	    image: "<img src='images/grawp.jpg' class='img-circle shadow'>"
	  },
	  {
	    question: "What is the first position Ginny Weasley plays on the Gryffindor quidditch team?",
	    choices: ["Chaser", "Seeker", "Keeper", "Beater"],
	    correctAnswer: "Seeker",
	    image: "<img src='images/seeker.jpg' class='img-circle shadow'>"
	  },
	  {
	    question: "What type of dragon does Harry have to face in the first challenge of the Triwizard tournament?",
	    choices: ["Hungarian Horntail", "Norwegian Ridgeback", "Swedish Snort Snout", "Chinese Fireball"],
	    correctAnswer: "Hungarian Horntail",
	    image: "<img src='images/horn.jpg' class='img-circle shadow'>"
	  },
	  {
	    question: "What is the name of dragon that hatched in the first year?",
	    choices: ["Norbert", "Aragog", "Buckbeck", "Fermander"],
	    correctAnswer: "Norbert",
	    image: "<img src='images/norbert.jpg' class='img-circle shadow'>"
	  },
	  {
	    question: "What is the name of the Phoenix that helped Harry?",
	    choices: ["Furry", "Hedwig", "Max", "Fawk"],
	    correctAnswer: "Fawk",
	    image: "<img src='images/fawk.jpg' class='img-circle shadow'>"
	  },
	  {
	    question: "What is the name of the language that snakes speak?",
	    choices: ["Parsletongue", "Serpentine", "Snake Tongue", "Slythertine"],
	    correctAnswer: "Parsletongue",
	    image: "<img src='images/snake.jpg' class='img-circle shadow'>"
	  },
	  {
	    question: "What monster did Salazar Slytherin place inside the chamber?",
	    choices: ["Owls", "Dragons", "Spiders", "Basilisk"],
	    correctAnswer: "Basilisk",
	    image: "<img src='images/basilisk.jpg' class='img-circle shadow'>"
	  },
	  {
	    question: "What is the max speed for a Firebolt broomstick?",
	    choices: ["150 mph", "200 mph", "175 mph", "120 mph"],
	    correctAnswer: "150 mph",
	    image: "<img src='images/broom.jpg' class='img-circle shadow'>"
	  }];
	  

	function questionContent() {
    	$("#gameScreen").append("<p><strong>" + 
    		questions[questionCounter].question + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[0] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[1] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[2] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[3] + 
    		"</strong></p>");
	}

	function userWin() {
		$("#gameScreen").html("<p>You got it right!</p>");
		correctGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	function userLoss() {
		$("#gameScreen").html("<p>Nope, that's not it!</p>");
		incorrectGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	function userTimeout() {
		if (time === 0) {
			$("#gameScreen").html("<p>You ran out of time!</p>");
			incorrectGuesses++;
			var correctAnswer = questions[questionCounter].correctAnswer;
			$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
				correctAnswer + 
				"</span></p>" + 
				questions[questionCounter].image);
			setTimeout(nextQuestion, 4000);
			questionCounter++;
		}
	}

	function resultsScreen() {
		if (correctGuesses === questions.length) {
			var endMessage = "Perfect";
			var bottomText = "Official Harry Potter Nerd";
		}
		else if (correctGuesses > incorrectGuesses) {
			var endMessage = "Pretty good";
			var bottomText = "You got an E on your OWLS";
		}
		else {
			var endMessage = "Time to go back to Hogwarts";
			var bottomText = "Muggle";
		}
		$("#gameScreen").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" + 
			correctGuesses + "</strong> right.</p>" + 
			"<p>You got <strong>" + incorrectGuesses + "</strong> wrong.</p>");
		$("#gameScreen").append("<h1 id='start'>Start Over?</h1>");
		$("#bottomText").html(bottomText);
		gameReset();
		$("#start").click(nextQuestion);
	}

	function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				userTimeout();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html("<strong>" + time + "</strong>");
		}
	}

	function nextQuestion() {
		if (questionCounter < questions.length) {
			time = 15;
			$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
			questionContent();
			timer();
			userTimeout();
		}
		else {
			resultsScreen();
		}
	
	}

	function gameReset() {
		questionCounter = 0;
		correctGuesses = 0;
		incorrectGuesses = 0;
	}

    function startGame() {
    	$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
    	$("#start").hide();
		questionContent();
    	timer();
    	userTimeout();
    }

    $("#start").click(nextQuestion);

	$("#gameScreen").on("click", ".choices", (function() {
		var userGuess = $(this).text();
		if (userGuess === questions[questionCounter].correctAnswer) {
			clearInterval(clock);
			userWin();
		}
		else {
			clearInterval(clock);
			userLoss();
		}
	}));
});