/* variables */
var turn = 1; 
var turnCount = 2; 
var arrayWins = [11,22,3,4,5,6,7,8,9];
var a = 5;
var b = 5;

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev) {
	var data=ev.dataTransfer.getData("Text");
	var imgelement = document.getElementById(data);
	console.log(data);
	var boxelement = ev.target;
	/* appendChild appends another html element to an existing one */
	boxelement.appendChild(imgelement);
	ev.preventDefault();
	
	if (imgelement.id == "x1" || imgelement.id == "x2" || imgelement.id == "x3" ||
	imgelement.id == "x4" || imgelement.id == "x5"){
		boxelement.setAttribute("style","background-color:#FFCC99;");
	}
	else
	if (imgelement.id == "o1" || imgelement.id == "o2" || imgelement.id == "o3" ||
	imgelement.id == "o4" || imgelement.id == "o5"){
	/* use it to change or add new attributes */
		boxelement.setAttribute("style","background-color:#E9E9F7;");
	};
	var box = parseInt(boxelement.id.charAt(3)) - 1;
	arrayWins[box] = turn;
	notDraggable();
}

function notDraggable() {
	
	if (turn == 2){
	// Ram turn
	document.getElementById("x" + a).setAttribute("draggable", "false");
	document.getElementById("o" + b).setAttribute("draggable", "true");
	document.getElementById("o" + b).removeAttribute("hidden");
	a--;
	turn = 1; 
	}
	else {
	// Dragon turn
	document.getElementById("x" + a).setAttribute("draggable", "true");
	document.getElementById("x" + a).removeAttribute("hidden");
	document.getElementById("o" + b).setAttribute("draggable", "false");
	b--;
	turn = 2; 
	}
	turnCount++;
}

/* all possible winning outcomes including diagonally, vertically, and horizontally
	across the grid */
function toWin(){
	if(arrayWins[0] == arrayWins[1] && arrayWins[0] == arrayWins[2]){
			gameWinner();
	} 
	else if(arrayWins[3] == arrayWins[4] && arrayWins[3] == arrayWins[5]){
			gameWinner();
	}
	else if(arrayWins[6] == arrayWins[7] && arrayWins[6] == arrayWins[8]){
			gameWinner();
	}
	else if(arrayWins[0] == arrayWins[3] && arrayWins[0] == arrayWins[6]){
			gameWinner();
	}
	else if(arrayWins[1] == arrayWins[4] && arrayWins[1] == arrayWins[7]){	
			gameWinner();
			}
	else if(arrayWins[2] == arrayWins[5] && arrayWins[2] == arrayWins[8]){
			gameWinner();
	}
	else if(arrayWins[0] == arrayWins[4] && arrayWins[0] == arrayWins[8]){
			gameWinner();
	}
	else if(arrayWins[2] == arrayWins[4] && arrayWins[2] == arrayWins[6]){
			gameWinner();
	}
	/* in the case of a tied game */
	else if (turnCount == 11){
		alert("You have a tied game.")
	}
}

function gameWinner(){
	var winner;
	if(turn == 2)
		winner = "Ram";
	else
		winner = "Dragon";
		
	alert(winner + " won the game!"); 
}

function noDrop(id){
document.getElementById(id).removeAttribute('ondragover');
document.getElementById(id).removeAttribute('ondrop');
}