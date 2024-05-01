const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://lokeeshwar:rZ269PxXseKyQ48O@cluster0.071yfup.mongodb.net/lokeeshwar?retryWrites=true&w=majority&appName=Cluster0"
)
.then(()=>{
console.log('mongo Db connected');
})

.catch(()=>{
    console.log('failed');
})

const newSchema = new mongoose.Schema ({
    email :{
        type :String,
        required : true
    },
    password :{
        type :String,
        required : true
    }
})

const user = mongoose.model('user',newSchema)

module.exports = user