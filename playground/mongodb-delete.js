// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // });

  //findOneAndDelete --> delete and return value
  // db.collection('Todos').findOneAndDelete({completed: false}).then((doc) => {
  //   console.log(doc);

  // db.collection('Users').deleteMany({name:'Abdallah'}).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5ade2f95ca876a09f8816587')
  }).then((res) => {
    console.log(res.value);
  });

  //db.close();
});
