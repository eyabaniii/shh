
import "./Login.css"
import { useState } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { login, register } from '../../JS/Action/ActionUser'


const LoginRegister=()=>{
    const [newUser, setNewUser]=useState({})

	const [user,setUser]=useState({})
	const dispatch=useDispatch()
  const handleUser=(e)=>
  { 
   setUser({...user,[e.target.name]:e.target.value})
  
  }
  
  console.log(user)
return(
    <div className="loginp">

    <div className="sign">

<div className="main1">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form className="formec">
					<label htmlFor="chk" aria-hidden="true">Sign Up</label>
					<input type="text"name="username" onChange={(e)=>handleUser(e)}  placeholder="UserName" required=""/>
					<input type="email" name="email"  onChange={(e)=>handleUser(e)} placeholder="Email" required=""/>
					<input type="password" name="password" onChange={(e)=>handleUser(e)} placeholder="Password" required=""/>
					<Link id="link" to="/Profile"><button onClick={()=>dispatch(register(newUser))}>Sign Up</button></Link>   

            <div className='check'>
                <input className='cb' type='checkbox' />
                <label>I accept the privacy policy
</label>
            </div>
				</form>
			</div>

			<div className="login">
				<form  className="formec" >
					<label htmlFor="chk" aria-hidden="true">Sign In</label>
					<input name="username"  onChange={(e)=>handleUser(e)}  placeholder="UserName" required=""/>
					
					
					<input type="password" placeholder="Password" required="" name="password" onChange={(e)=>handleUser(e)} />
					<Link id="link" to="/Profile"><button onClick={()=>dispatch(login(user))}>Sign In</button></Link>   


            <div className='check'>
                <input className='cb' type='checkbox' />
                <label>Remember me
</label>
            </div>
				</form>
			</div>
	</div>
  </div>

 
</div>
)
}
export default LoginRegister