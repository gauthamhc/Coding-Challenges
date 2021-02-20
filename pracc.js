// function reverseStrg(str) {
    
//   //  return str.toUpperCase().split("").reverse().join("");
//   let final = [];
//   for(i=str.length -1; i>=0; i--) {
//     // console.log(str[i]);
//     final = final + str[i];
//   }
//   return final;
// }

// const data = reverseStrg("Gautham");
// console.log(data);

//function to factorilize the number

// let value = 1;
// function factorilizeNumber(num) {
//   for(i=1; i<=num; i++) {
//     value = value * i;
//   }
//   return value;
// }

// console.log(factorilizeNumber(5));

//function to identify whether it is a panadrome or not
// function panadrome(str) {
//   let correct = str.split("")
//   let reverse = str.split("").reverse();
//   for(i=0; i<str.length;i++) {
//     if(correct[i] === reverse[i]) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

// function panadrome(str) {
//   const reg = /[\W_]/g;
//   console.log(reg);
//   const strReg = str.toLowerCase().replace(reg, "");

//   const reversed = strReg.split("").reverse().join("");
//   if(strReg === reversed) return true;

//   return false;

// }

// console.log(panadrome("rally%*_"))

//function to find the longest word in a sentence

// function longestWordFunc(str) {
//   const wordds = str.split(" ")
//   console.log(wordds.length);
//   let result = "";
//   // console.log(wordds);
//   for(i=0; i<=wordds.length; i++) {
//     for(j=1; j<=wordds.length; j++) {
//       if(wordds[i]>wordds[j])
//       result = wordds[i];
//     }
//   }
//   return result;
// }

// function longestWordFunc(str) {
//   const wordds = str.split(" ");
//   let longest = "";
//   wordds.forEach(word => {
//     if(word.length > longest.length ) {
//       longest = word;
//     }
//   })
//   return longest;
// }

// function longestWordFunc(str) {
//   const wordss = str.split(" ");
//   let longest = "";
//   for(let word of wordss) {
//     if(word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return `The longest word is ${longest} and the length is of ${longest.length} letters`;
// }


// function longestWordFunc(str) {
//   return str.split(" ").sort(function(a,b) {return b.length - a.length})[0].length; 
// }
// console.log(longestWordFunc("Hi my name is Gautham and I am a Web Developer"));

//function to do title case
// function titleCase(str) {
//   let wordds = str.toLowerCase().split(' ');
//   for(i=0; i<wordds.length; i++) {
//     // console.log(wordds[i]);
//     wordds[i] = wordds[i][0].toUpperCase() + wordds[i].slice(1); 
//   }
//   return wordds.join(' ')
// }


// function titleCase(str) {
//   let wordds = str.toLowerCase().split(" ");
//   let sentence = wordds.map(function(words) {
//     return words[0].toUpperCase() + words.slice(1);
//   })
//   return sentence.join(" ");
// }
// console.log(titleCase("I am doing well, hope you are doing well too"));


// function largestOfFour(arr) {
//   let max = [];
//   for(let i=0; i<arr.length; i++) {
//     // console.log(arr[i]);
//     let tempMax = arr[i][0];
//     for(let j=0; j<arr[i].length; j++) {
//       // console.log(arr[i][j]);
//       let currentElement = arr[i][j];
//       if(currentElement >= tempMax) {
//         tempMax = currentElement; 
//       }
//     }
//     max.push(tempMax);
//   }
//   return max; 
// }



// console.log(largestOfFour([[1,2,3,4], [4,5,6,7], [6,7,8,9], [54,67,87,98]])); 

//function to do title case
// function titleCase(str) {
//   const wordds = str.toLowerCase().split(" ");
//   for(var i=0; i<wordds.length; i++) {
//     wordds[i] = wordds[i][0].toUpperCase() + wordds[i].slice(1);
//     console.log(wordds[i]);
//   }
//   console.log(wordds);
//   return wordds.join(" ");
// }


// console.log(titleCase("I will be successful in this field"));

//function to find the largest of four

// function largestOfFour(arr) {
//   const max = [];
//   for(i=0; i<arr.length; i++) {
//     let tempMax = arr[i][0];
//     for(j=0; j<arr[i].length; j++) {
//       let currentElement = arr[i][j];
//       if(currentElement >= tempMax) {
//         tempMax = currentElement;
//       }
//     }
//     max.push(tempMax) 
//   }
//   return max;
// }

// console.log(largestOfFour([[1,2,3,4], [4,5,6,7], [6,7,8,9], [54,67,87,98]])); 


const confirmEnding = (sentence, target) => {
  return sentence.substr(-target.length) === target;
  
}


console.log(confirmEnding('I will be a developer soon', 'on')); 