
    // Determine if two movie runtimes add up to the flight length
    // if there are no movies or only one movie return false
    // sort the movies by the duration of each movie
    // loop through the movies using two pointers
    // checking if there a two movies that will add up or less than the length of the flight

const canTwoMoviesFillFlight = (movieLengths, flightLength)  => {

    if(movieLengths.length === 0 || movieLengths.length === 0) return false;
    movieLengths = movieLengths.sort((a,b) => a - b)
    let a = 0;
    let b = movieLengths.length - 1
    while (a !== b) {
      if (movieLengths[a] + movieLengths[b] > flightLength){
        b--
      } else {
        return true
      }
    }
    return false
  }


// console.log(canTwoMoviesFillFlight([2, 4], 1))
// //expected = false;
// console.log(canTwoMoviesFillFlight([2, 4], 6))
// //expected = true;
// console.log(canTwoMoviesFillFlight([3, 8], 6))
// //expected = false;
// console.log(canTwoMoviesFillFlight([3, 8, 3], 6))
// // expected = true;
// console.log(canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7))
// // expected = true;
// console.log(canTwoMoviesFillFlight([4, 3, 2], 5))
// // expected = true;
// console.log(canTwoMoviesFillFlight([6], 6))
// // expected = false;
// console.log(canTwoMoviesFillFlight([], 2))
// // expected = false;
