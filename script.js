const gameBoard = (() => {
    const board = ['x','x','x','o','o','o','x','x','x'];

    //cache DOM
    const table = document.querySelector('#table');

    render();

    function render() {
        board.forEach(el => {
            const square = document.createElement('div');
            square.classList.add('square');
            square.textContent = el;
            table.appendChild(square);
        });
    }
    return {board}
})();