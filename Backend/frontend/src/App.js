import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Home  from './Components/Home';
import  Profile  from './Components/User/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Components/User/Loading';
import { useSelector } from 'react-redux';
import Detail from './Components/Product/Detail';
import ProductList from './Components/Product/ProductList';
import Contact from './Components/Contact';
import Footer from './Shared/Footer';
import LoginRegister from './Components/User/LoginRegister';



function App() {
  const load=useSelector((state)=>state.userReducer.load  )

  return (
    <div className="App">

<Routes>
<Route path="/" element={<Home />}/> 

<Route path="/Profile"  element={load?<Loading />:<Profile /> }/> 
<Route path="/Login" element={<LoginRegister />}/> 
<Route path="/Contact" element={<Contact />}/> 
<Route path="/Footer" element={<Footer />}/> 
 <Route path="/Productlist" element={<ProductList />}/>
 <Route path="/Details/:_id" element={<Detail />}/>

</Routes>
    </div>
  );
}

export default App;
