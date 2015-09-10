$(document).ready(function() {
    console.log( "ready!" );
});


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
  }
});




//function to visually display which side won

function getWinner () {
	if (winnerIsX()) {
		return 'Winner is X';
	}
	if (winnerisO()) {
		return 'Winner is O';
	}
	return null;

	
}


//function to restart game








