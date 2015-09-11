$(document).ready(function() {
    console.log( "ready!" );


var turn = 0;


$("button").click(function() {

  if ($(this).text() !=="X" && ($(this).text() !=="O")) {
	
	if (turn%2===0) {
		$(this).text("X");
	  }
	else if (turn%2===1) {
		$(this).text("O");
	 }
	 turn++;
	winnerIsX();
	winnerIsO();
	// catGame();

  }
});

//function for cat game

// function catGame() {
// 	if (turn===9 && winnerisX()===false && winnerisO()===false){
// 		console.log("meow");
// 	}
// }



//function to find if X won

function winnerIsX() {
	if ($("#b1").text()==="X" && $("#b2").text()==="X" && $("#b3").text()==="X"){
		setWinner();
	}
	else if ($("#b1").text()==="X" && $("#b4").text()==="X" && $("#b7").text()==="X"){
		setWinner();
	}
	else if ($("#b4").text()==="X" && $("#b5").text()==="X" && $("#b6").text()==="X"){
		setWinner();
	}
	else if ($("#b7").text()==="X" && $("#b8").text()==="X" && $("#b9").text()==="X"){
		setWinner();
	}
	else if ($("#b1").text()==="X" && $("#b5").text()==="X" && $("#b9").text()==="X"){
		setWinner();
	}
	else if ($("#b3").text()==="X" && $("#b5").text()==="X" && $("#b7").text()==="X"){
		setWinner();
	}
	else if ($("#b3").text()==="X" && $("#b6").text()==="X" && $("#b9").text()==="X"){
		setWinner();
	}
}

function setWinner() {
	$(".Winner").text("X is winner");

}

// console.log(winnerIsX());

//function to find if O won

function winnerIsO() {
	if ($("#b1").text()==="O" && $("#b2").text()==="O" && $("#b3").text()==="O"){
		setWinner2();
	}
	else if ($("#b1").text()==="O" && $("#b4").text()==="O" && $("#b7").text()==="O"){
		setWinner2();
	}
	else if ($("#b4").text()==="O" && $("#b5").text()==="O" && $("#b6").text()==="O"){
		setWinner2();
	}
	else if ($("#b7").text()==="O" && $("#b8").text()==="O" && $("#b9").text()==="O"){
		setWinner2();
	}
	else if ($("#b1").text()==="O" && $("#b5").text()==="O" && $("#b9").text()==="O"){
		setWinner2();
	}
	else if ($("#b3").text()==="O" && $("#b5").text()==="O" && $("#b7").text()==="O"){
		setWinner2();
	}
	else if ($("#b3").text()==="O" && $("#b6").text()==="O" && $("#b9").text()==="O"){
		setWinner2();
	}
}

function setWinner2() {
	$(".Winner").text("O is winner");
}





// //function to visually display running log (scoreboard) of winners

// function getWinner() {
// 	if (winnerIsX()) {
// 		return 'Winner is X';
// 	}
// 	if (winnerisO()) {
// 		return 'Winner is O';
// 	}
// 	return null;

// }




$("#Restart").click(function(){
	location.reload(true);
	console.log("hello");
});





});

