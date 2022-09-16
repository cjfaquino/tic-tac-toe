const gameBoard = (() => {
    const board = ['x','x','x','o','o','o','x','x','x'];

    //cache DOM
    const table = document.querySelector('#table');

    render();

    function render() {
        board.forEach((el, index) => {
            const square = table.querySelector(`[data-key="${index}"]`);
            square.textContent = el;
            table.appendChild(square);
        });
    }
    return {board}
})(); 