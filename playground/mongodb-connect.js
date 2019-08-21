const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, function(err, db) {
  if(err){
    return console.log('unable to connect to mongo db');
  }
  console.log('connectedto the mongoDB server');


  // db.db('TodoApp').collection('Todos').insertOne({
  //   text:'Somthing to do',
  //   completed : false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Error inserting date: ', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  var _db = db.db('TodoApp');
  _db.collection('Testers').insertOne({
    name: 'Andrew',
    age : 25,
    location : 'Nigeria',
    raw : '{"name" : "kings", "coin" : 25}'
  }, (err, result) => {
    if (err){
      return console.log('cannot add user: ', err);
    }
    console.log(JSON.stringify(result.ops));
  });

  db.close();
});
