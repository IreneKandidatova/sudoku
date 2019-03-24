module.exports = function solveSudoku(matrix) {
    fillSudoku(matrix, 0)
    return matrix;
  }

  function fillSudoku(matrix, i) {
    var  i, j, k;
    for (i = 0; i < 9; i++) {
      for (j = 0; j < 9; j++) {
        if (matrix[i][j] == 0) {
          for (k = 1; k < 10; k++) {
            if (completion(matrix, i, j, k) == true) {
              matrix[i][j] = k;
              if (fillSudoku(matrix, i) == false) {
                matrix[i][j] = 0;}
              else return true;}}
          if (matrix[i][j] == 0) return false;
        }}}}

  function completion(matrix, i, j, k) {
    var a, b, col, row;
    for (a = 0; a < 9; a++) {
      if (matrix[a][j] == k || matrix[i][a] == k) return false;}
    col = Math.floor(i / 3) * 3;
    row = Math.floor(j / 3) * 3;
    for (a = col; a < col + 3; a++) {
      for (b = row; b < row + 3; b++) {
        if (matrix[a][b] == k) return false;}}
    return true;
  }
