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
        bettywhite:{},
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
    };
};
