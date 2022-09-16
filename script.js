const gameBoard = (() => {
    const board = ['','','','','','','','',''];
    let gameWon = false;
    let turn = 'x'

    //cache DOM
    const ticTacToe = document.querySelector('#game');
    const table = ticTacToe.querySelector('#table');
    const start = ticTacToe.querySelector('#start');
    const squares = table.querySelectorAll('.square');
    const playerOneInput = start.querySelector('#playerOne')
    const playerTwoInput = start.querySelector('#playerTwo')
    
    //bind events
    playerOneInput.addEventListener('change', getPlayerName);
    playerTwoInput.addEventListener('change', getPlayerName);
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
    }
    
    function getPlayerName(){
            const playerOne = playerOneInput.value || 'Player One'
            const playerTwo = playerTwoInput.value || 'Player Two'
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
            board[6] == board[7] && board[6] == board[8] && board[6]){
                gameWon = true;
            } 
        else if(//columns
            board[0] == board[3] && board[0] == board[6] && board[0] ||
            board[1] == board[4] && board[1] == board[7] && board[1] ||
            board[2] == board[5] && board[2] == board[8] && board[2]){
                gameWon = true;
            }
        else if(//diagonal
            board[0] == board[4] && board[0] == board[8] && board[0] ||
            board[6] == board[4] && board[6] == board[2] && board[6]){
                gameWon = true;
        }
    }

    return {playerOne, playerTwo, gameWon}
})(); 