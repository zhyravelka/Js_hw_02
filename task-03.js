const findLongestWord = function(string) {
    let arr = string.split(" "); 
    let maxWord = arr[0];
     for(let word of arr ){
        if(maxWord.length<word.length){
            maxWord=word;
        }
       
    }
    return maxWord;
}

  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  console.log(findLongestWord('Google do a roll')); // 'Google'
  console.log(findLongestWord('May the force be with you')); // 'force'
