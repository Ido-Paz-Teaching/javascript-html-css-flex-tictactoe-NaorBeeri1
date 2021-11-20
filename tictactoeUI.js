/*
enter code to handle:
1. User cell selection click 
2. game status update messages
3. Start button click
*/
window.onload = function () {
    const boardArray = new Array(9);
    const buttonArray = new Array(9);
    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i] = document.getElementById("b".concat(i.toString()));
        
    }
    disableButtons(buttonArray);
    var turn;
    const statusFooter = document.getElementById("gameStatusTag");
    statusFooter.innerHTML="Press Start to begin";
    function restart() {
        for (let i = 0; i < buttonArray.length; i++) {
            buttonArray[i].innerHTML='';
            enableButtons(buttonArray);
        }
        boardArray = new Array(9);
        turn = "x";
    }
    var should_click = false;
    document.querySelector("header>button").onclick = function () {
        if (document.querySelector("header>button").innerHTML === "Restart") {
            restart();
        }
        else {
            document.querySelector("header>button").innerHTML = "Restart";
            turn = "x";
            enableButtons(buttonArray);
            for (let i = 0; i < buttonArray.length; i++) {
                buttonArray[i].addEventListener('click', clickhandler(i)); // runs this 
            }
            should_click = true;
        }
        statusFooter.innerHTML=`${turn}'s turn`;
    }
    function clickhandler(button_num) {
        if(should_click) {
            if(buttonArray[button_num].innerHTML == '') {
                buttonArray[button_num].innerHTML = turn;
                boardArray[button_num] = turn;
                if (hasWon(boardArray)) {
                    disableButtons(buttonArray);
                    statusFooter.innerHTML=`${turn} wins! Hit RESTART to start a new game`;
                }
                else if(hasDraw(boardArray)) {
                    statusFooter.innerHTML=`Draw! You both suck!`;
                }
                if(turn === "x")
                    turn = "o";
                else
                    turn = "x";
                statusFooter.innerHTML=`${turn}'s turn`;
            }
        }
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
}