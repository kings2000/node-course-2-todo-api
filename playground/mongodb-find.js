const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, function(err, db) {
  if(err){
    return console.log('unable to connect to mongo db');
  }
  console.log('connectedto the mongoDB server');
  var _db = db.db('TodoApp');

  _db.collection('Testers').find({
    _id : new ObjectID('5d5d6b7476ebbc4194ade495')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2),"\n" ,docs);
  }, (err) =>{
    console.log('unable to find todos: ', err);
  });


  // db.db('TodoApp').collection('Todos').insertOne({
  //   text:'Somthing to do',
  //   completed : false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Error inserting date: ', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // var _db = db.db('TodoApp');
  // _db.collection('Testers').insertOne({
  //   name: 'Andrew',
  //   age : 25,
  //   location : 'Nigeria',
  //   raw : '{"name" : "kings", "coin" : 25}'
  // }, (err, result) => {
  //   if (err){
  //     return console.log('cannot add user: ', err);
  //   }
  //   console.log(JSON.stringify(result.ops));
  // });

  db.close();
});
