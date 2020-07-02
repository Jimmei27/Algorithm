const isOneLetterString =(s)=>{
    
    for (let i=1; i< s.length; i++){
         if (s[i-1]!==s[i]){
             return false;
         }
    }
    return true;
}


var longestDupSubstring = function(S) {
    
    let n = S.length;
    if (n<2){
        return '';
    }
   
     if (isOneLetterString(S)){
         return S.substr(1,n);
     }
    
    let sufixes = [];
    
    for (let i=0; i<n; i++){
        sufixes.push(S.substr(i,n-1));
    }
    let found ='';
    sufixes.sort();
    for(let i =0 ;i <sufixes.length-1;i++)
    {
        if (found.length< sufixes[i].length && found.length< sufixes[i+1].length)
            {
            let j =0;
            while( sufixes[i][j]===sufixes[i+1][j]){
                j++;
            }
            if (j>0 && j> found.length){
                found = sufixes[i].substr(0,j);
            }
        }
    }
    console.log(found)
    console.log(sufixes)
    return found;
};

console.log(longestDupSubstring("banana"))