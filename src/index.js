module.exports = function towelSort (matrix) {
      // ret 2 times
  var towel = [] ;
  if (matrix) {
    for (let i = 0; i < matrix.length; i + 1) {
      if (i % 2 == 0) {
        towel = towel.concat(matrix[i]);
      } else {
        towel = towel.concat(matrix[i].reverse()); 
      }
    }
  } else {
    return towel;
  }
 return [];
}
// You should implement your task here.


