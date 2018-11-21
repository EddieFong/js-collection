'use strict';
function divBy(element, div) {
  return (element % div) === 0;
}

function choose_multiples_of_three(collection) {

  //implement here
  
  // let result = []
  // collection.forEach(element => {
  //   if ( divBy(element, 2)){
  //     result.push(element)
  //   }
  // });

  // return result;
  return collection.filter((x)=>divBy(x,3));
}

module.exports = choose_multiples_of_three;
