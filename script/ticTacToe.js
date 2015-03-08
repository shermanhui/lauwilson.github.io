// tracks turns
var turn = 0;
var player1Image = '<img id="drag1" src="images/dragon.png" alt="dragon" draggable="true" ondragstart="drag(event)" width="100" height="100" />';
var player2Image = '<img id="drag2" src="images/dog.png" alt="dog" draggable="true" ondragstart="drag(event)" width="100" height="100" />';

// identify winner - No Winner = 0; Player 1 = 1; Player 2 = -1
var winner = 0;

var cellOwner = [0,0,0,0,0,0,0,0,0];

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
    
    // Prevent dragging from target
    document.getElementById(data).setAttribute("draggable", "false");
    document.getElementById(data).removeAttribute("id");

    // Prevent dragging into target
    document.getElementById(ev.target.id).removeAttribute("ondragover");
    
    // Replace images
    if (data == "drag1") {
        document.getElementById("gamePieces").innerHTML = player2Image;
    } else if (data == "drag2") {
        document.getElementById("gamePieces").innerHTML = player1Image;
    }
    // Change color of background
    if ( event.target.className.split(" ")[0] == "drophere" ) {
        if (data == "drag1") {
            event.target.style.background = "linear-gradient(blue, cyan, blue)";
            switch (event.target.id) {
                case "a1":
                    cellOwner[0] = 1;
                    break;
                case "b1":
                    cellOwner[1] = 1;
                    break;
                case "c1":
                    cellOwner[2] = 1;
                    break;
                case "a2":
                    cellOwner[3] = 1;
                    break;
                case "b2":
                    cellOwner[4] = 1;
                    break;
                case "c2":
                    cellOwner[5] = 1;
                    break;
                case "a3":
                    cellOwner[6] = 1;
                    break;
                case "b3":
                    cellOwner[7] = 1;
                    break;
                case "c3":
                    cellOwner[8] = 1;
                    break;
            }
        } else if (data == "drag2") {
            event.target.style.background = "linear-gradient(red, rgb(255, 223, 0), red)";
            switch (event.target.id) {
                case "a1":
                    cellOwner[0] = -1;
                    break;
                case "b1":
                    cellOwner[1] = -1;
                    break;
                case "c1":
                    cellOwner[2] = -1;
                    break;
                case "a2":
                    cellOwner[3] = -1;
                    break;
                case "b2":
                    cellOwner[4] = -1;
                    break;
                case "c2":
                    cellOwner[5] = -1;
                    break;
                case "a3":
                    cellOwner[6] = -1;
                    break;
                case "b3":
                    cellOwner[7] = -1;
                    break;
                case "c3":
                    cellOwner[8] = -1;
                    break;
            }
        }
    }

    // Tie condition
    turn++;
    if ( turn == 9 ) {
        replaceText();
        document.all.win.innerHTML = '<p>TIE GAME<br/><button onClick="reload()">Play Again!</button></p>';
    }

    // Check victory condition
    checkWinner();
}

function checkWinner() {
    var lineScore = 0;
    for (var i = 0; i < 9; i += 3) { // for loop to check the conditions for column 1
        lineScore += cellOwner[i];
        if (lineScore == 3) {
            replaceText();
            document.all.win.innerHTML = 'Player 1 Wins<br/><button onClick="reload()">Play Again!</button>';
        } else if (lineScore == -3) {
            replaceText();
            document.all.win.innerHTML = 'Player 2 Wins<br/><button onClick="reload()">Play Again!</button>';
        }
    }

    lineScore = 0;
    for (var i = 1; i < 9; i += 3) { // for loop to check the conditions for column 2
        lineScore += cellOwner[i];
        if (lineScore == 3) {
            replaceText();
            document.all.win.innerHTML = 'Player 1 Wins<br/><button onClick="reload()">Play Again!</button>';
        } else if (lineScore == -3) {
            replaceText();
            document.all.win.innerHTML = 'Player 2 Wins<br/><button onClick="reload()">Play Again!</button>';
        }
    }

    lineScore = 0;
    for (var i = 2; i < 9; i += 3) { // for loop to check the conditions for column 3
        lineScore += cellOwner[i];
        if (lineScore == 3) {
            replaceText();
            document.all.win.innerHTML = 'Player 1 Wins<br/><button onClick="reload()">Play Again!</button>';
        } else if (lineScore == -3) {
            replaceText();
            document.all.win.innerHTML = 'Player 2 Wins<br/><button onClick="reload()">Play Again!</button>';
        }
    }

    lineScore = 0;
    for (var i = 0; i < 3; i++) { // for loop to check the conditions for row 1
        lineScore += cellOwner[i];
        if (lineScore == 3) {
            replaceText();
            document.all.win.innerHTML = 'Player 1 Wins<br/><button onClick="reload()">Play Again!</button>';
        } else if (lineScore == -3) {
            replaceText();
            document.all.win.innerHTML = 'Player 2 Wins<br/><button onClick="reload()">Play Again!</button>';
        }
    }

    lineScore = 0;
    for (var i = 3; i < 6; i++) { // for loop to check the conditions for row 2
        lineScore += cellOwner[i];
        if (lineScore == 3) {
            replaceText();
            document.all.win.innerHTML = 'Player 1 Wins<br/><button onClick="reload()">Play Again!</button>';
        } else if (lineScore == -3) {
            replaceText();
            document.all.win.innerHTML = 'Player 2 Wins<br/><button onClick="reload()">Play Again!</button>';
        }
    }

    lineScore = 0;
    for (var i = 6; i < 9; i++) { // for loop to check the conditions for row 3
        lineScore += cellOwner[i];
        if (lineScore == 3) {
            replaceText();
            document.all.win.innerHTML = 'Player 1 Wins<br/><button onClick="reload()">Play Again!</button>';
        } else if (lineScore == -3) {
            replaceText();
            document.all.win.innerHTML = 'Player 2 Wins<br/><button onClick="reload()">Play Again!</button>';
        }
    }

    lineScore = 0;
    for (var i = 0; i < 9; i += 4) { // for loop to check the conditions for diagonal 1
        lineScore += cellOwner[i];
        if (lineScore == 3) {
            replaceText();
            document.all.win.innerHTML = 'Player 1 Wins<br/><button onClick="reload()">Play Again!</button>';
        } else if (lineScore == -3) {
            replaceText();
            document.all.win.innerHTML = 'Player 2 Wins<br/><button onClick="reload()">Play Again!</button>';
        }
    }

    lineScore = 0;
    for (var i = 2; i < 7; i += 2) { // for loop to check the conditions for diagonal 2
        lineScore += cellOwner[i];
        if (lineScore == 3) {
            replaceText();
            document.all.win.innerHTML = 'Player 1 Wins<br/><button onClick="reload()">Play Again!</button>';
        } else if (lineScore == -3) {
            replaceText();
            document.all.win.innerHTML = 'Player 2 Wins<br/><button onClick="reload()">Play Again!</button>';
        }
    }
}

// Reload function to start a new game
function reload() {
    location.reload();
}

function replaceText() {
    if (!!document.getElementById("gamePieces")) {
        var elem = document.getElementById("gamePieces");
        elem.parentNode.removeChild(elem);
    }
}
