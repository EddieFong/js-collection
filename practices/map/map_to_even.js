'use strict';
function map_to_even(collection){

  const mapFn = function(x){
    return x * 2
  }

  return collection.map(mapFn);

  // let result = []
  // collection.forEach(element => {
  //   result.push(element * 2)
  // });
  // return result;

  // for (var i = 0; i < collection.length; i++) {
  //   collection[i] = collection[i] * 2
  // }
  // return collection

}
module.exports = map_to_even;
