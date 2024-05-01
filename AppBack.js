const express = require('express')
const cors = require('cors')

const app = express()
const user = require('./mongo')

app.use(express.json())
app.use(cors())

app.get('/',cors(),(req,res) => {

})

app.post('/',async(req,res) => {
    const {email,password} = req.body
    try{
        const check = await user.findOne({email:email})
        if (check) {
            res.json('exist')
        }else{
            res.json('notexist')
        }
    }catch(err){
        res.json('notexist')
    }
})

app.post('/signup',async(req,res) => {
    const {email,password} = req.body
    const data = {
        email:email,
        password:password
    }

    try{
        const check = await user.findOne({email:email})
        if (check) {
            res.json('exist')
        }else{
            res.json('notexist')
            await user.insertMany([data])
        }
    }catch(err){
        res.json('notexist')
    }
})

app.listen(8000,()=>{
    console.log('connected');
})
