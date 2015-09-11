$(document).ready(function() {
    console.log( "ready!" );


var turn = 0;

$(".square").click(function() {

  if ($(this).text() !=="X" && ($(this).text() !=="O")) {
	
	// if (turn%2===0) {
	// 	$(this).text("X").addClass("x");
	//   }
	// else if (turn%2===1) {
	// 	$(this).text("O").addClass("o");
	//  }
	if (turn%2===0) {
		$(this).text('X').prepend('<img id="x_img" src="x.png">').addClass("x");
	  }
	else if (turn%2===1) {
		$(this).text('O').prepend('<img id="o_img" src="o.png">').addClass("o");
	 }
	 turn++;
	winnerIsX();
	winnerIsO();
	winnerIsCat();
  }
});

//function for cat game

function winnerIsCat() {
		if (turn===9 && winnerIsX()===false) {
		alert("meow");
	}
}



//function to find if X won

function winnerIsX() {
	if ($("#b1").text()==="X" && $("#b2").text()==="X" && $("#b3").text()==="X") {
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
	else if ($("#b2").text()==="X" && $("#b5").text()==="X" && $("#b8").text()==="X"){
		setWinner();
	}
	else {
		return false;
	}
	return true;
}

function setWinner() {
	$(".Winner").text('Excellent! "X" is the winner!');

}

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
	else if ($("#b2").text()==="O" && $("#b5").text()==="O" && $("#b8").text()==="O"){
		setWinner2();
	}
}

function setWinner2() {
	$(".Winner").text('wOoOoO.. "O" is the winner!');
}




$("#Restart").click(function(){
	location.reload(true);

});





});

