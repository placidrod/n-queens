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

window.findSolution = function (board, rowToCheck, n, validator, callback) {
  if(rowToCheck === n) {
    return callback();
  }
  for(var i = 0; i < n; i++) {
    board.togglePiece(rowToCheck, i);
    if(board[validator]() === false) {
      var result = findSolution(board, rowToCheck+1, n, validator, callback);
      if (result) {
        return result;
      }
    }
    board.togglePiece(rowToCheck, i);
  }
};

window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  var solution = findSolution(board, 0, n, 'hasAnyRooksConflicts', function(){
    return _.map(board.rows(), function(row) {
      return row.slice();
    });
  });
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n: n});
  var solutionCount = 0;
  findSolution(board, 0, n, 'hasAnyRooksConflicts', function(){
    solutionCount++;
  });
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var board = new Board({n: n});
  var solution = findSolution(board, 0, n, 'hasAnyQueensConflicts', function(){
    return _.map(board.rows(), function(row) {
      return row.slice();
    });
  });
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));

  if (solution) {
    return solution;
  } else {
    return board.rows();
  }
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  //loop through all possible first piece spots
  var board = new Board({n: n});
  var solutionCount = 0;
  findSolution(board, 0, n, 'hasAnyQueensConflicts', function(){
    solutionCount++;
  });
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
