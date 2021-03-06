// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var list = [
  { id: 1, description: 'first todo', done: false },
  { id: 2, description: 'second todo', done: false },
  { id: 3, description: 'third todo', done: false },
];

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }
    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo){
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    var newTodos = this.cloneArrayOfObjects(todos);
    var newItem = [{ id: this.generateId(), description: newTodo, done: false }];
    return newTodos.concat(newItem);
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
  },
  deleteTodo: function(todos, idToDelete) {
    var newTodos = this.cloneArrayOfObjects(todos);
    newTodos = newTodos.filter(item => item.id != idToDelete);
    return newTodos;
  },
  markTodo: function(todos, idToMark) {
    var newTodos = this.cloneArrayOfObjects(todos);
    newTodos.map(x =>
      { if(x.id === idToMark) {
        if(x.done !== true) {
        (x.done = true) }else{ (x.done = false);}
      }});


    return newTodos;

  },
  sortTodos: function(todos, sortFunction) {
    var newTodos = this.cloneArrayOfObjects(todos);
    console.log('foo');
    console.log('newTodos');

     sortFunction(newTodos);
    return newTodos;
  },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;

}
