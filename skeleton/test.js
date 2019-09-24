var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});
var item1=todoFunctions.generateId();
var item2=todoFunctions.generateId();
var item3=todoFunctions.generateId();
var item4=todoFunctions.generateId();
var item5=todoFunctions.generateId();
var item6=todoFunctions.generateId();

var list = [
  { id: item1, description: 'first todo' },
  { id: item2, description: 'second todo' },
  { id: item3, description: 'third todo' },
  { id: item4, description: 'fourth todo' },
  { id: item5, description: 'fifth todo' },
  { id: item6, description: 'sixth todo' }
];

test('Testing addTodo', function(t) {

    var actual = todoFunctions.addTodo(list, 'seventh todo');
  var expected = [
    { id: 1, description: 'first todo' },
    { id: 2, description: 'second todo' },
    { id: 3, description: 'third todo' },
    { id: 4, description: 'fourth todo' },
    { id: 5, description: 'fifth todo' },
    { id: 6, description: 'sixth todo' },
    { id: 7, description: 'seventh todo' }
  ];
  t.deepEqual(actual, expected, 'Should return a list with added item');
  t.deepEqual(list, [
    { id: 1, description: 'first todo' },
    { id: 2, description: 'second todo' },
    { id: 3, description: 'third todo' },
    { id: 4, description: 'fourth todo' },
    { id: 5, description: 'fifth todo' },
    { id: 6, description: 'sixth todo' }
  ],"constant array has not been altered");
  t.end();
});


test('Testing deleteTodo id=1', function(t) {

var actual = todoFunctions.deleteTodo(list, 1);
var expected = [
  { id: 2, description: 'second todo' },
  { id: 3, description: 'third todo' },
  { id: 4, description: 'fourth todo' },
  { id: 5, description: 'fifth todo' },
  { id: 6, description: 'sixth todo' },
];

t.deepEqual(actual, expected, 'Should return a list without deleted item');

t.end();
});


test('Testing deleteTodo id=3', function(t) {

  var actual = todoFunctions.deleteTodo(list, 3);
  var expected = [
    { id: 1, description: 'first todo' },
    { id: 2, description: 'second todo' },
    { id: 4, description: 'fourth todo' },
    { id: 5, description: 'fifth todo' },
    { id: 6, description: 'sixth todo' },
  ];
  console.log(actual);
  
  t.deepEqual(actual, expected, 'Should return a list without deleted item');
  
  t.end();
  });





>>>>>>> Stashed changes
