const gameBoard = (() => {
    const board = ['x','x','x','o','o','o','x','x','x'];

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
        board[index] = 'x'
        render();
    }

    return {board}
})(); 