var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp')

var Todo = mongoose.model('Todo', {
  text:{
    type : String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed : {
    type: Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default: null
  }
});

var User = mongoose.model('Users', {
  email:{
    type:String,
    required:true,
    trim:true,
    minlength: 1
  }
});

var user = new User({
  email: "kinnykings07@gmail.com"
});

user.save().then((doc) => {
  console.log('Email save to users ', doc);
}, (err) => {
  console.log('cannot save user ', err);
});

var newTodo = new Todo({
  text:true
});

newTodo.save().then((doc) => {
  console.log('Saved todo ', doc);
}, (err) => {
  console.log('unable to save ' , err)
});

var otherTodo = new Todo({
  text : "Chop fish na",
  completed : false,
  completedAt : 123
});

otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
},(err)=> {
  console.log('connot save the data ', err)
});
