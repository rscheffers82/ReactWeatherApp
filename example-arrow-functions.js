// Use the arrow key when you are dealing with anonymous functions

var names = ['Roy', 'Zorana', 'Mutti', 'Tajo'];

// normal way
//names.forEach(function (name) {
//  console.log('forEach', name );
//});

// use when you want to execute multiple lines of code
//names.forEach((name) => {
//  console.log('arrowFunc', name);
  //more stuff here
//});

// use when you only have one line of code
//names.forEach( (name) => console.log(name) );

// Main difference, anonymous functions have a this binding
// => arrow functions have a binding to their parents this binding

// Example

// With     names.forEach(function (name) { this is undefined as it refers to the anonymous function
// with     names.forEach( (name) => { here this refers to the person object
// change to => function, remove function and add the => after the var

var person = {
  name: 'Roy Scheffers',
  greet: function () {
    names.forEach( (name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

person.greet();

// Challenge Area \\

// below a normal function
function add (a, b) {
  return a + b;
}

//  console.log( add(1, 3) );
//  console.log( add(9, 0) );

// create 2 arrow functions

// addStatement
var addStatement = (a, b) => {
  return a + b;
}
console.log( 'addStatement ', addStatement(9, 3) );

// addExpression
var addExpression = (a, b) => a + b;      // in this format, the expression is automatically returned, so no need to add it.
console.log( 'addExpression ', addExpression(7, -3) );
