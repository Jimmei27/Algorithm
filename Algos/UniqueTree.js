var numTrees = function(n) {
    let dp = []; //
    for(let i=0;i<=n;i++) {
		//calculate the dp array
		//dp[i] means how many combinations for i elements
        let result = 0;
        for(let l=0;l<=i-1;l++) {
			// l elements on left tree, then i-l-1 elements on right tree
            result+=(dp[l] || 1)*(dp[i-l-1] || 1)
            console.log(result)
		} 
        dp.push(result);
    }
    console.log(dp)
    return dp[n]
};


console.log(numTrees(3))


var numTrees1 = function(n) {
    if(n === 1) {
        return 1;
    }
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        for(let j = 0; j < i; j++) {
            if(dp[i] === undefined) {
                dp[i] = 0;
            }
            dp[i] += dp[j] * dp[i - j - 1];
        }
    }
    return dp[n];
};