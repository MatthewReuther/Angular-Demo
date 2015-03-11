angular
  .module('tas')
  .filter('objToArr', function () {
    return function (obj) {
      if (obj) {
        return Object.keys(obj).map(function (key) {
          obj[key]['_id'] = key;
          return obj[key];
        });
      }
    };
  })
  .filter('toRansomCase', function () {
    return function (element) {
      return element
        .split('')
        .map(function (char, i) {
          if (i % 2 === 0) {
            return char.toUpperCase();
          } else {
            return char.toLowerCase();
          }
        })
        .join('');
    };
  })





































// angular
//   .module('tas')
//   .filter('objToArray', function () {
//     return function(obj) {
//       Object.keys(obj).map(function (prev, key) {
//        return obj[key]);
//       }, []);
//    };
//   })

  //.filter('objToArray', function () {
   // return function(obj) {
      //Object.keys(obj).forEach(function (key)) {      //returns an array of each keys of the object then for each key loops through
      //  arr.push(onj[key]);                 //gives you an array of the values of the keys
      //}

      //return arr;
   // }
 // });

//if even then we will return the letter uppercase

  // .fliter('toRansomCase' function(){
  //  return function (element) {
  //    return element.split('').map(function (char, i) {
  //      if (i % 2 === 0)
  //        return char.toUpperCase();
  //       } else {
  //         return char.toLowerCase();
  //      }
  //     })
  //      .join('');
  //   };
  // })



