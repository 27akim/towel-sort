module.exports = function towelSort (matrix) {
  let m = [];
  for(let i of matrix.flat())
  {
    m.push(i);
  }
  m.sort(function(a,b){ 
    return a - b;
  })
  return m;
}