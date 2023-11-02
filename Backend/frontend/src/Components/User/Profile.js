import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {  get_product } from '../../JS/Action/ActionProduct'
import { logOut } from '../../JS/Action/ActionUser'

const Profile = () => {
    const user=useSelector((state)=>state.userReducer.user  )
    const errors= useSelector((state)=>state.userReducer.error)
    console.log(user)
    console.log(errors)
    const dispatch=useDispatch()

  return (
    <div>
<h1>{user.username}</h1>
<h1>{user.email}</h1>
<h1>{user.phone}</h1>
<Link to="/Login"><button onClick={()=>dispatch(logOut())}>logout</button></Link>
<Link to="/Productlist"><button onClick={()=>dispatch(get_product())}>product List</button></Link>


    </div>
  )
}

export default Profile