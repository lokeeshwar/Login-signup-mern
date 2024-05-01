import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const home = useNavigate()

    const submit = async (e) => {
        e.preventDefault()
        try{
            await axios.post('http://localhost:8000/',{
                email,password
            })
            .then(res => {
                if (res.data ==="exist") {
                    home('/home',{state:{id:email}})
                }
                else if(res.data==='notexist'){
                    alert('user dose not exist')
                }
            })
        }catch(err){
            alert('wrong details')
            console.log(err);
        }
    }

  return (
    <div>
      <h1>Login</h1>
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
      <Link to = '/signup'>Go to Sign up</Link>
    </div>
  );
}
