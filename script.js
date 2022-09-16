const gameBoard = (() => {
    const board = ['','','','','','','','',''];
    let turn = 'x'

    //cache DOM
    const table = document.querySelector('#table');
    const squares = table.querySelectorAll('.square');

    //bind events
    squares.forEach(el => {
        el.addEventListener('click', addMark)
    })


    render();

    function render() {
        board.forEach((el, index) => {
            const square = table.querySelector(`[data-key="${index}"]`);
            square.textContent = el;
            table.appendChild(square);
        });
    }

    function addMark(){
        const index = this.dataset.key;
        if(turn=='x' && !board[index]){
            board[index] = 'x'
            turn = 'o'
        } else if(turn=='o' && !board[index]){
            board[index] = 'o'
            turn = 'x'
        }
        render();
    }

    return {board}
})(); 