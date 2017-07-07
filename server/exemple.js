var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/users");
// save new something


var newTodo = new Todo({
    text: "   asd    "
});

var newTodo1 = new Todo({
    text:"asddd",
    completed:true,
    completeAt:0
});

newTodo.save().then((doc) => {
    console.log(doc);
}, (e) => {
    console.log("unable to save Todo");
});

newTodo1.save().then((doc) => {
    console.log(doc);
}, (e) => {
    console.log("unable to save Todo");
});


// User model
    //email - require it - trim it - set type - set min length of i
    


var Users = new User({
    email: "erick@gmail.com"
});

Users.save().then((docs)=>{
    console.log(docs);
},(e) => {
   console.log("unable to save"); 
});