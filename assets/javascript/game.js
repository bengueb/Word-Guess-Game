var wordGuess = {

    wordChoices: {
        beyonce:{},
        diana:{},
        motherteresa:{},
        oprah:{},
        ruthbaderginsburg:{},
        halsey:{},
        gloriasteinem:{},
        malala:{},
        rosaparks:{},
        michelleobama:{},
    }

    currentWord: null,
    lettersOfTheWord: [],
    correctLetters:[],
    guessedLetters:[],
    guessesLeft: 0,
    totalGuesses: 0,
    lettersGuessed: null,
    wins:0,

    setupGame: function(){
        var objKeys = Object.keys (this.wordChoices);
        this.currentWord = objKeys[Math.floor(Math.Random() * objKeys.lenth)];

        this.lettersOfTheWord = this.currentWord.split("");

        this.rebuildWordView();

        this.processUpdateTotalGuesses();
    },
    
    updateGuesses: function(letter){
        if((this.guessedLetters.indexOf(letter)=== -1) && (this.lettersOfTheWord.indexOf(letter)=== -1)){

            this.guessedLetters.push(letter);
            this.guessesLeft--;

            document.querySelector("#remaining-guesses").innerHTML = this.guessesLeft;
            document.querySelector("#letters-guessed").innerHTML = this.guessedLetters.join(",")
        }
    },

    updatePage: function(letter){
        if(this.guessesLeft===0){
            this.restartGame();
        }

        else{
            this.UpdateGuesses(letter);
            this.updateCorrectLetters(letter);
            this.rebuildWordView();

            if (this.UpdateWins()===true){
                this.restartGame();
            }
        }
    },

    processUpdateTotalGuesses: function(){
        this.totalGuesses =  this.lettersOfTheWord.length + 5;
        this.guessesLeft = this.totalGuesses;

        document.querySelector("#remaining-guesses").innerHTML = this.guessesLeft;
    }
};
