// declare a variable to keep count
// iterate through the 2D array
// if any element is an island 
// recursive invoke the helper function on the island checking surrounding number
// if any surrounding numbers is an island change the number to make sure it does not get check twice

const numIslands = (grid) => {
    let count = 0;
    const checkIsland = (grid, i , j) => {
      grid[i][j] = 0
      if(i > 0 && grid[i - 1][j] === '1') checkIsland(grid, i - 1, j)
      
      if(i < grid.length - 1 && grid[i + 1][j] === '1') checkIsland(grid, i + 1, j)
      
      if(j < grid[i].length + 1 && grid[i][j + 1] === '1') checkIsland(grid, i, j + 1)
      
      if(j > 0 && grid[i][j - 1] === '1') checkIsland(grid, i, j - 1)
    } 
    for (let i = 0; i < grid.length; i += 1){
      for (let j = 0; j < grid[i].length; j += 1){
        if(grid[i][j] === '1'){
          count += 1
          checkIsland(grid, i , j)
        }
      }
    }
    return count 
  };
  
  //console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))