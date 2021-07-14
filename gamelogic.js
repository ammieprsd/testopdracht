function displayWordSoFar(word, guesses) {
//   let string = "";
//   const array = word.split("");
//   // console.log(array);
//   for (let i = 0; i < array.length; i++) {
//     // console.log(array[i]);
//     // if (guesses.includes(array[i])) {
//     //   string += array[i] + " ";
//     // } else
//       string += "_ ";
//   }
//   return string
// }

  underscore = ""
  wordArray = word.split("")
  for (let i = 0; i < wordArray.length; i++) {
    underscore += "_ "

  }
  return underscore
}


function isGameWon(word, guesses) {
  // WRITE ME
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
