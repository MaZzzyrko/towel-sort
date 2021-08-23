module.exports = function towelSort (matrix) {
  var towel = [];
  if (matrix) {
    for (let i = 0; i < matrix.length; i++) {
          if (i % 2 == 0) {
            towel = towel.concat(matrix[i]);
          } else {
            towel = towel.concat(matrix[i].reverse());
      }
    }
  } else {
  return towel;
  }
  return towel;
}