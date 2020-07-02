var calculateMinimumHP = function(dungeon) {
    let right = dungeon[0].length
    let bottom = dungeon.length
    let hp = dungeon[0][0];
    let x = 0;
    let y = 0;
    console.log([x,y])
    console.log([right,bottom])
    // while ([x, y] !== [right, bottom]) {
    // if (dungeon[x + 1][y] < dungeon[x][y+1]) {
    // 
    // }
    // }
        

    console.log(hp)
};

console.log(calculateMinimumHP([[-2,-3,3],[-5,-10,1],[10,30,-5]]))