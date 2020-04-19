// iterate each nested array 
// mutate each element by adding less than value of the element above / left of it
// return the last element of the last array (bottom right of the grid)

const minPathSum = (grid) => {
    for (let i = 0; i < grid.length; i += 1){
      for (let k = 0; k < grid[i].length; k += 1){
        if (i > 0 && k > 0){
          grid[i][k] = grid[i][k] + Math.min((grid[i-1][k]), (grid[i][k-1]))
        } else if (i > 0 && k === 0){
          grid[i][k] = grid[i][k] + grid[i-1][k]
        } else if (i === 0 && k > 0){
          grid[i][k] = grid[i][k] + grid[i][k-1]
        }
      }
    }
    return grid[grid.length-1][grid[grid.length-1].length-1]
  };

//console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))