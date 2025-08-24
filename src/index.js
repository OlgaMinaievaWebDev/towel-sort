module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];

  const sortedArr = [];

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      const jIndex = i % 2 === 0 ? j : matrix[i].length - j - 1;
      sortedArr.push(matrix[i][jIndex]);
    }
  }
  return sortedArr;
};
