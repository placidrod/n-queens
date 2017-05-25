/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n: n}); //fixme
  for (var i = 0; i < n; i++) {
    solution.togglePiece(i,i);
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //loop through all possible first piece spots
  var solutionCount = 0;
  var availPieces = [];
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      availPieces.push([i, j]);
    }
  }
  var curPieces = [];
  curPieces.push(availPieces.shift());
  var recursor = function (board, pieces) {
    // availPieces.length > 0
      // curPieces.length !== n
        // create a new board and toggle all Current Pieces on
        //loop through every availPiece and place a piece there
          //check for rook conflicts
             // no conflicts ->  toggle the square back off, leave the piece in availPieces
             // are conflicts -> toggle the square back off, and remove that piece from availPieces
        //end loop
      // else add 1 to the solution tracking variable
    //end of conditional no available pieces
  };

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
