'use strict';
function map_to_even(collection){

  // return collection.map((x) => x*2);
  
  let result = []
  collection.forEach(element => {
    result.push(element * 2)
  });
  return result;

}
module.exports = map_to_even;
