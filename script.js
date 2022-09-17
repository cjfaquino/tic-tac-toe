const gameBoard = (() => {
    const board = ['','','','','','','','',''];
    let playerOne = 'Player One';
    let playerTwo = 'Player Two';
    let currentPlayer = playerOne;
    let gameWon = false;
    let turn = 'x'

    //cache DOM
    const ticTacToe = document.querySelector('#game');
    const table = ticTacToe.querySelector('#table');
    const start = ticTacToe.querySelector('#start');
    const startBtn = start.querySelector('.startBtn');
    const squares = table.querySelectorAll('.square');
    const turnText = ticTacToe.querySelector('.turnText');
    const playerOneInput = start.querySelector('#playerOne');
    const playerTwoInput = start.querySelector('#playerTwo');
    
    //bind events
    playerOneInput.addEventListener('change', changePlayerName);
    playerTwoInput.addEventListener('change', changePlayerName);
    startBtn.addEventListener('click', render)
    squares.forEach(el => {
        el.addEventListener('click', addMark);
        el.addEventListener('click', checkWin)
    })

    render();

    function render() {
        board.forEach((el, index) => {
            const square = table.querySelector(`[data-key="${index}"]`);
            square.textContent = el;
        });
        checkWin();
        if(!gameWon){
            currentPlayer = getCurrentPlayer();
            turnText.textContent = `${currentPlayer}'s turn`
        }
        else if(gameWon){turnText.textContent = `${currentPlayer} won!`};
    }

    function getCurrentPlayer(){
        if(turn=='x') return playerOne;
        if(turn=='o') return playerTwo;
    }

    function changePlayerName(){
        if(playerOneInput.value){
            playerOne = playerOneInput.value;
        }
        if(playerTwoInput.value){
            playerTwo = playerTwoInput.value;
        }
    }

    function addMark(){
        const index = this.dataset.key;
        if(turn=='x' && !board[index] && !gameWon){
            board[index] = 'x'
            turn = 'o'
        } else if(turn=='o' && !board[index] && !gameWon){
            board[index] = 'o'
            turn = 'x'
        }
        render();
    }

    function checkWin(){
        if(//rows
            board[0] == board[1] && board[0] == board[2] && board[0] ||
            board[3] == board[4] && board[3] == board[5] && board[3] ||
            board[6] == board[7] && board[6] == board[8] && board[6] ||
            //columns
            board[0] == board[3] && board[0] == board[6] && board[0] ||
            board[1] == board[4] && board[1] == board[7] && board[1] ||
            board[2] == board[5] && board[2] == board[8] && board[2] ||
            //diagonals
            board[0] == board[4] && board[0] == board[8] && board[0] ||
            board[6] == board[4] && board[6] == board[2] && board[6]){
                gameWon = true;
            } 
    }

    return {playerOne, playerTwo, gameWon}
})(); 