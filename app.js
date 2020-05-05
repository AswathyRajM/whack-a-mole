document.addEventListener('DOMContentLoaded', () => {
    const resultDisplay = document.querySelector('#result');
    resultDisplay.textContent = '0';
    //card options
    const cardArray = [{
            name: 'cat1',
            img: 'images/cat1.jpg'
        },
        {
            name: 'cat1',
            img: 'images/cat1.jpg'
        },
        {
            name: 'cat2',
            img: 'images/cat2.jpg'
        },
        {
            name: 'cat2',
            img: 'images/cat2.jpg'
        },
        {
            name: 'cat3',
            img: 'images/cat3.jpg'
        },
        {
            name: 'cat3',
            img: 'images/cat3.jpg'
        },
        {
            name: 'cat4',
            img: 'images/cat4.jpg'
        },
        {
            name: 'cat4',
            img: 'images/cat4.jpg'
        },
        {
            name: 'cat5',
            img: 'images/cat5.jpg'
        },
        {
            name: 'cat5',
            img: 'images/cat5.jpg'
        },
        {
            name: 'cat6',
            img: 'images/cat6.jpg'
        },
        {
            name: 'cat6',
            img: 'images/cat6.jpg'
        }

    ];
    const grid = document.querySelector('.grid');
    cardArray.sort(() => 0.5 - Math.random());
    //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/abstract.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }

    }

    //flip card
    var cardChosen = [];
    var cardChosenId = [];
    var cardsWon = [];

    function flipcard() {
        var cardSrc = this.getAttribute('src');
        //to not reflip the card
        if (cardSrc === 'images/white.png') {
            return
        }

        var cardId = this.getAttribute('data-id');
        cardChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardChosen.length === 2) {
            if (!(cardChosenId[0] === cardChosenId[1])) {
                setTimeout(checkForMatch, 500);
            } else {
                // for not to select the same image twice
                let cards = document.querySelectorAll('img');
                let chosenCard = cardChosenId[0];
                cards[chosenCard].setAttribute('src', 'images/abstract.jpg');
                cardChosen = [];
                cardChosenId = [];
            }
        }
    }

    //check for matches

    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const chosenCardOne = cardChosenId[0];
        const chosenCardTwo = cardChosenId[1];

        if (cardChosen[0] == cardChosen[1]) {
            alert(' You found a match!');
            cards[chosenCardOne].setAttribute('src', 'images/white.png');
            cards[chosenCardTwo].setAttribute('src', 'images/white.png');
            cardsWon.push(cardChosen);
        } else {
            cards[chosenCardOne].setAttribute('src', 'images/abstract.jpg');
            cards[chosenCardTwo].setAttribute('src', 'images/abstract.jpg');
            alert('Sorry. Try again!');
        }
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "Congratualtions! You found them all!";
        }

        //reset the array
        cardChosen = [];
        cardChosenId = [];
    }

    createBoard();


})