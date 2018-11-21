'use strict';

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

function grouping_count(collection) {

  //implement here
  let result = {}
  collection.filter(onlyUnique).forEach(element => {
    result[element] = collection.filter((x)=>(x === element)).length;
  });
  return result;
}

module.exports = grouping_count;

