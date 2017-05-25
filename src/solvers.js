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
  var board = new Board({n: n});
  var solutionCount = 0;
  var recursor = function (board, placedPieces, rowToCheck) {
    if(placedPieces.length === n) {
      //console.log('adding to solution count');
      solutionCount++;
    } else if (rowToCheck < n) {
      for(var i = 0; i < board.get(rowToCheck).length; i++) {
        //loop through every place in the row and place a piece there
        board.togglePiece(rowToCheck, i);
        //check for rook conflicts
        if(board.hasAnyRooksConflicts() === false) {
          // are conflicts -> toggle the square back off
          //console.log('found a solution', placedPieces.concat([[rowToCheck, i]]));
          recursor(board, placedPieces.concat([[rowToCheck, i]]), rowToCheck+1);
        }
        board.togglePiece(rowToCheck, i);
      }
      // no conflicts ->  toggle the square back off, add to availPieces
      //end loop
      // if available pieces > 0, for each piece
      //toggle piece
      //recursive call( board, placed pieces .concat(curPiece))
      //toggle piece off
      //end of available pieces loop
      // end of pieces count

    }
  };


  for (var i = 0; i < n; i++) {
    board.togglePiece(0, i);
    recursor(board, [[0,i]], 1);
    board.togglePiece(0, i);
  }
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
  //loop through all possible first piece spots
  var board = new Board({n: n});
  var solutionCount = 0;
  var recursor = function (board, placedPieces, rowToCheck) {
    if(placedPieces.length === n) {
      //console.log('adding to solution count');
      solutionCount++;
    } else if (rowToCheck < n) {
      for(var i = 0; i < board.get(rowToCheck).length; i++) {
        //loop through every place in the row and place a piece there
        board.togglePiece(rowToCheck, i);
        //check for rook conflicts
        if(board.hasAnyQueensConflicts() === false) {
          // are conflicts -> toggle the square back off
          //console.log('found a solution', placedPieces.concat([[rowToCheck, i]]));
          recursor(board, placedPieces.concat([[rowToCheck, i]]), rowToCheck+1);
        }
        board.togglePiece(rowToCheck, i);
      }
      // no conflicts ->  toggle the square back off, add to availPieces
      //end loop
      // if available pieces > 0, for each piece
      //toggle piece
      //recursive call( board, placed pieces .concat(curPiece))
      //toggle piece off
      //end of available pieces loop
      // end of pieces count

    }
  };


  for (var i = 0; i < n; i++) {
    board.togglePiece(0, i);
    recursor(board, [[0,i]], 1);
    board.togglePiece(0, i);
  }
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
