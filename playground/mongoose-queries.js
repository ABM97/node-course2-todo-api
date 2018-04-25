const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5adfda1d0d1fd2d30967605411';
//
// if(!ObjectID.isValid(id)){
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by id: ', todo);
// }).catch((e) => console.log(e));

var id = '5adfa3c81dc679ed032dffff';

User.findById(id).then((user) => {
  if(!user){
    return console.log('Id not found');
  }
  console.log('User: ', user);
}).catch((e) => console.log(e))
