// take location, return temp
/*
function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Picton', function(err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp)
  }
});

function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    resolve(79);
    reject('City not found');
  });
}

getTempPromise('Picton').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
});
*/

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if ( typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    }
    reject('Please provide two numbers');
  });
}

addPromise(10,20)
  .then(function ( sum ){
    console.log('success', sum)
  }, function ( err ){
    console.log('error', err);
  });

addPromise('Roy Scheffers', 11)
  .then( function ( sum ) {
    console.log('this should not display');
  }, function ( err ){
    console.log('This should appear', err);
  });
