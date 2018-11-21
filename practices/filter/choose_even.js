'use strict';
function divBy(element, div) {
  return (element % div) === 0;
}

function choose_even(collection) {

  // let result = []
  // collection.forEach(element => {
  //   if ( divBy(element, 2)){
  //     result.push(element)
  //   }
  // });
  //implement here
  // return result;
  return collection.filter((x)=>divBy(x,2));

}

module.exports = choose_even;


