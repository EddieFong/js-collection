'use strict';
var map_to_four_multiples_add_one = function(collection){

  // return collection.map((x) => x*4+1);

  let result = []
  collection.forEach(element => {
    result.push(element * 4 + 1)
  });
  return result;
};

module.exports = map_to_four_multiples_add_one;
