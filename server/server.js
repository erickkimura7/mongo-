var express = require("express");
var bodyParser = require("body-parser");

const {ObjectID} = require("mongodb");

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/users");


var app = express();

app.use(bodyParser.json());

// app.post('/todos',(req,res)=>{
//     var todo = new Todo({
//       text: req.body.text,
//       completed: req.body.completed
//     });
//     todo.save().then((doc)=> {
//         res.send(doc);
        
//     }, (e) => {
//         res.status(400).send(e);
//     });
//     console.log(req.body);    
// });

// app.get('/todos',(req,res)=>{
//   Todo.find().then((todos)=>{
//       res.send({todos});
//   }, (e) => {
//       res.status(400).send(e);
//   }); 
// });

app.get('/todos/:id',(req,res) => {
   var id = req.params.id;
   
   if(!ObjectID.isValid(id)){
       return res.status(404).send();
   }
 
    
    Todo.findById(id).then((todos) => {
        if(todos){
            return res.send({todos});
        }else{
            return res.status(400).send("");
        }
    }).catch((e) => res.status(400).send());
    
   
});

app.listen(process.env.PORT, () => {
    console.log('Starting server');
});