'use strict';

const mapFn = function(x){
  return x * 4 + 1
}

var map_to_four_multiples_add_one = function(collection){

   return collection.map(mapFn);

  // let result = []
  // collection.forEach(element => {
  //   result.push(element * 4 + 1)
  // });
  // return result;

  // for (var i = 0; i < collection.length; i++) {
  //   collection[i] = collection[i] * 4 + 1
  // }
  // return collection

};

module.exports = map_to_four_multiples_add_one;
