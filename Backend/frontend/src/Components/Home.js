import React from 'react'
import NavBar from '../Shared/NavBar'
import Contact from './Contact'
import LoginRegister from './User/LoginRegister'
import Footer from '../Shared/Footer'
import Bande from './Bande'
import First from './First'
import Second from './Second'
import Third from './Third'


const Home = () => {
  return (
    <div>
<NavBar></NavBar>
<First></First>
<Second></Second>
<Third></Third>

<LoginRegister></LoginRegister>

<Contact></Contact>

<Bande></Bande>

<Footer></Footer>
    </div>
  )
}

export default Home