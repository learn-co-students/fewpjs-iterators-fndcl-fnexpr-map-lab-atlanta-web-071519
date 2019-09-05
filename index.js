const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// let titleCased = tutorials.map(tutorial => {
//   let split = tutorial.split(" ");
//   let newSplit = split.map(word => {
//       return (word.charAt(0).toUpperCase() + word.substring(1))
//   })
//   return newSplit.join(" ")
// })


const titleCased = () => {
  let mapped = tutorials.map(tutorial => {
    let array = tutorial.split(" ")
    let newArray = array.map(word => {
      let newWord = word.charAt(0).toUpperCase()+word.substring(1)
      return newWord
    })
    return newArray.join(" ")
  })
  return mapped
}

console.log(titleCased())