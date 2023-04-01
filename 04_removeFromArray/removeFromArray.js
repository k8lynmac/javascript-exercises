const removeFromArray = function(array, ...args) {

  const newArray = [];

  for (i=0; i<array.length; i++) {
    if (!args.includes(array[i])) {
        newArray.push(array[i]);
    }
  }
 
//   function itempush(item) {
//     if (!args.includes(item)) {
//         newArray.push(item);
//     }
//  }

//    array.forEach(itempush);


   return newArray;
}
// Do not edit below this line
module.exports = removeFromArray;
