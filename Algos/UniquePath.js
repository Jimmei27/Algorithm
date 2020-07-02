const uniquePaths = (m, n) => {
    let row = new Array(n).fill(1)
    console.log(row)
    for (let i = 0; i < m-1; i++) {
        for (let j = 1; j < n; j++) {
            row[j] = row[j-1] + row[j]
        }
    }
    console.log(row)
    return row[n-1]
};

console.log(uniquePaths(7,3))