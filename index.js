const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//This function  return a new array with all the titles is in "title case",
//in other words, the first letter of each word is capitalized. 

/* const titleCased = () => {
  return tutorials.map(item => {
   
    const newStringArray = item.split(' '); // a string converts to an array with elements-words
    let str = '';
    for(const element of newStringArray) { //every element-word in the array got capitalized
       str += element.charAt(0).toUpperCase() + element.slice(1) + " "; // take the first letter and capitalize + the rest of the word using slice
     
   }
    return str.slice(0, (str.length - 1)); //get rid of the last space in the sentence
})
 
}
*/

const titleCased = () => {
  return tutorials.map(item => {
   
    const newStringArray = item.split(' '); // a string converts to an array with elements-words
	  return newStringArray.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
})
 
}