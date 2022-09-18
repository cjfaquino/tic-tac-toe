const game = (() => {
    let board;
    let playerOne;
    let playerTwo;
    let currentPlayer;
    let gameStatus;
    let turn;

    //cache DOM
    const ticTacToe = document.querySelector('#game');
    const table = ticTacToe.querySelector('#table');
    const start = ticTacToe.querySelector('#start');
    const gameBoard = ticTacToe.querySelector('#gameBoard');
    const startBtn = start.querySelector('.startBtn');
    const squares = table.querySelectorAll('.square');
    const playText = ticTacToe.querySelector('.playText');
    const resetBtn = ticTacToe.querySelector('.reset');
    const playerOneInput = start.querySelector('#playerOne');
    const playerTwoInput = start.querySelector('#playerTwo');
    
    //bind events
    playerOneInput.addEventListener('change', changePlayerName);
    playerTwoInput.addEventListener('change', changePlayerName);
    startBtn.addEventListener('click', setPlay)
    startBtn.addEventListener('click', render)
    resetBtn.addEventListener('click', initialize)
    squares.forEach(el => {
        el.addEventListener('click', addMark);
        el.addEventListener('click', checkWin)
    })

    function initialize(){
        gameBoard.classList.add('hide');
        start.classList.remove('hide');
        playText.textContent = '';
        playerOneInput.value = '';
        playerTwoInput.value = '';
        board = [null,null,null,null,null,null,null,null,null];
        playerOne = 'Player One';
        playerTwo = 'Player Two';
        currentPlayer = playerOne;
        gameStatus = 'new';
        turn = 'x';
        render();
    }

    function render() {
        board.forEach((el, index) => {
            const square = table.querySelector(`[data-key="${index}"]`);
            square.textContent = el;
        });
        checkWin();
        if(gameStatus == 'playing'){
            currentPlayer = getCurrentPlayer();
            playText.textContent = `${currentPlayer}'s turn`
        }
        else if(gameStatus == 'win'){playText.textContent = `${currentPlayer} won!`}
        else if(gameStatus == 'draw'){
            playText.textContent = "It's a draw..."
        };
    }

    function setPlay() {
        gameStatus = 'playing';
        start.classList.add('hide');
        gameBoard.classList.remove('hide');
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
        if(turn=='x' && !board[index] && gameStatus == 'playing'){
            board[index] = 'x'
            turn = 'o'
        } else if(turn=='o' && !board[index] && gameStatus == 'playing'){
            board[index] = 'o'
            turn = 'x'
        }
        render();
    }

    function checkDraw(){
        // if(
        //     board[0] &&
        //     board[1] &&
        //     board[2] &&
        //     board[3] &&
        //     board[4] &&
        //     board[5] &&
        //     board[6] &&
        //     board[7] &&
        //     board[8]
        // ){
        //     return gameStatus = 'draw'
        // }
        if(board.every(el => el !== null)){
            gameStatus = 'draw'
        }
    }

    function checkWin(){
        if( //rows
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
                gameStatus = 'win';
            } 
        checkDraw();
        return gameStatus;
    }

    return {initialize, getCurrentPlayer, checkWin}
})(); 

game.initialize();