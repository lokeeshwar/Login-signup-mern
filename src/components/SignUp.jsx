import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function SignUp() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const home = useNavigate()

    const submit = async (e) => {
        e.preventDefault()
        try{
            await axios.post('http://localhost:8000/signup',{
                email,password
            })
            .then(res => {
                if (res.data==="exist") {
                   alert('already exist')
                }
                else if(res.data==='notexist'){
                    home('/home',{state:{id:email}})
                }
            })
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div>
      <h1>Sign up</h1>
      <form action="" onSubmit={submit}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input type= "submit" />
      </form>
      <p>OR</p>
      <Link to = '/'>Go to login</Link>
    </div>
  );
}
