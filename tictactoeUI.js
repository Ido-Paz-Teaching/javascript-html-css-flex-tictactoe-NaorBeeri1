/*
enter code to handle:
1. User cell selection click 
2. game status update messages
3. Start button click
*/
window.onload = function () {
    let boardArray = new Array(9);
    const buttonArray = new Array(9);
    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i] = document.getElementById("b".concat(i.toString()));
    }
    disableButtons(buttonArray);
    var turn;
    const statusFooter = document.getElementById("gameStatusTag");
    statusFooter.innerHTML = "Press Start to begin";
    function restart() {
        for (let i = 0; i < buttonArray.length; i++) {
            buttonArray[i].innerHTML = '';
            enableButtons(buttonArray);
        }
        boardArray = new Array(9);
        turn = "x";
    }
    document.querySelector("header>button").onclick = function () {
        if (document.querySelector("header>button").innerHTML === "Restart") {
            restart();
        }
        else {
            document.querySelector("header>button").innerHTML = "Restart";
            turn = "x";
            enableButtons(buttonArray);
            for (let i = 0; i < buttonArray.length; i++) {
                clickhandler(buttonArray[i], i); // runs this 
            }
        }
        statusFooter.innerHTML = `${turn}'s turn`;
    }
    function disableButtons(array) {
        for (let i = 0; i < array.length; i++) {
            array[i].disabled = true;
        }
    }
    function enableButtons(array) {
        for (let i = 0; i < array.length; i++) {
            array[i].disabled = false;
        }
    }
    function clickhandler(elem, i) {
        elem.addEventListener('click', function () {
            if (buttonArray[i].innerHTML == '') {
                buttonArray[i].innerHTML = turn;
                boardArray[i] = turn;
                if (hasWon(boardArray)) {
                    disableButtons(buttonArray);
                    statusFooter.innerHTML = `${turn} wins! Hit RESTART to start a new game`;
                }
                else if (hasDraw(boardArray)) {
                    disableButtons(buttonArray);
                    statusFooter.innerHTML = `Draw! You both suck!`;
                }
                else {
                    if (turn === "x")
                        turn = "o";
                    else
                        turn = "x";
                    statusFooter.innerHTML = `${turn}'s turn`;
                }
            }
        }, false);
    }
}