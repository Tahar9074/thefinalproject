import { useEffect } from 'react';
import './App.css';
import AppNavBar from './components/pages/AppNavBar';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import { useDispatch,useSelector } from 'react-redux';
import { getAuthUser } from './redux/actions';
import Navigbar from './components/pages/Navigbar';
import Services from './components/pages/Services';
import About from './components/pages/About';
import AvailableCars from './components/pages/AvailableCars';
import Conditions from './components/pages/Conditions';

function App() {
  const dispatch=useDispatch()
  const getAuth=()=>{
  dispatch(getAuthUser())
  }
  useEffect(getAuth,[])
  const isAuth=useSelector((state)=>state.isAuth)
  return (
    <div className="App">
      
      <Navigbar />
    <AppNavBar />
  
   
    
    {isAuth &&
    <Routes>
      <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
        }
      <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/OurServices" element={<Services/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path='/AvailableCars' element={<AvailableCars/>}/>
  <Route path='/Conditions' element={<Conditions/>}/>
</Routes>
  


    </div>
  );
}

export default App;
