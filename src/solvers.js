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
    callback();
    return;
  }
  for(var i = 0; i < n; i++) {
    board.togglePiece(rowToCheck, i);
    //console.log(n, i, rowToCheck, JSON.stringify(board.rows()));
    if(board[validator]() === false) {
      findSolution(board, rowToCheck+1, n, validator, callback);
    }
    board.togglePiece(rowToCheck, i);
  }
};

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
  var solution;

  var recursor = function (board, placedPieces, rowToCheck) {
    var board = new Board({n: n});
    placedPieces.map(function(cur) {
      board.togglePiece(cur[0],cur[1]);
    });
    if(placedPieces.length === n) {
      solution = board.rows();
      return solution;
    } else if (rowToCheck < n) {
      for(var i = 0; i < board.get(rowToCheck).length; i++) {
        board.togglePiece(rowToCheck, i);
        if (board.hasAnyQueensConflicts() === false) {
          if ((placedPieces.length + 1) === n) {
            solution = board.rows();
            return board.rows();
          } else {
            var checker = recursor(board, placedPieces.concat([[rowToCheck, i]]), rowToCheck + 1);
            if (checker === undefined) {
              board.togglePiece(rowToCheck,i);
            }
          }
        } else {
          board.togglePiece(rowToCheck, i);
        }
      }
    }
  };

  if (n === 0) {
    solution = board.rows();
    return solution;
  } else if (n === 1) {
    solution = [[1]];
    return solution;
  } else {
    //loop through all possible first piece spots
    for (var i = 0; i < n; i++) {
      board.togglePiece(0, i);
      recursor(board, [[0,i]], 1);
      if (solution) {
        return solution;
      }
      board.togglePiece(0, i);
    }
    //console.log('no result found n='+n);
    return (new Board({n: n})).rows();
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
