function mergeRanges(meetings) {

    // Merge meetings ranges
    let newArr = [meetings[0]];
    
    for (let i = 1; i < meetings.length; i += 1) {
      if (meetings[i].startTime > newArr[newArr.length - 1].endTime){
        newArr.push(meetings[i])
      }
      if(meetings[i].endTime > newArr[newArr.length - 1].endTime){
        newArr[newArr.length - 1].endTime = meetings[i].endTime
      }
      if(meetings[i].startTime < newArr[newArr.length - 1].startTime && meetings[i].endTime < newArr[newArr.length - 1].startTime){ 
          newArr.unshift(meetings[i])
      } else if (meetings[i].startTime < newArr[newArr.length - 1].startTime && meetings[i].endTime < newArr[newArr.length - 1].endTime){
        newArr[newArr.length - 1].startTime = meetings[i].startTime
      }
    }
    return newArr;
  }
  /*
   {0 , 1} , {3, 8} , {9, 12}
     */

  let  times =   [
    { startTime: 0,  endTime: 1 },
    { startTime: 2,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ]
  // console.log(times.sort((a, b) => a.startTime - b.startTime))

  // console.log('test', mergeRanges(times))
  
  // console.log('test', mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]))
  
  // console.log('test', mergeRanges([{ startTime: 5, endTime: 6 }, { startTime: 6, endTime: 8 }]))
  
  // console.log('test', mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }])
  // )
  // console.log('test', mergeRanges([{ startTime: 1, endTime: 8 }, { startTime: 2, endTime: 5 }]))
  
  
  // console.log('test', mergeRanges([
  //   { startTime: 5, endTime: 8 },
  //   { startTime: 1, endTime: 4 },
  //   { startTime: 6, endTime: 8 },
  // ]))
  
  // console.log(mergeRanges([
  //   { startTime: 1, endTime: 10 },
  //   { startTime: 2, endTime: 5 },
  //   { startTime: 6, endTime: 8 },
  //   { startTime: 9, endTime: 10 },
  //   { startTime: 10, endTime: 12 }
  // ]))
  
  // console.log('test', mergeRanges(times))