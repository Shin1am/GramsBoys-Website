import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Courses from './components/Pages/Courses';
import AboutUs from './components/Pages/AboutUs';
import ShoppingCart from './components/Pages/ShoppingCart';
import SignUp from './components/Pages/SignUp';
import loginpages from './components/Pages/loginpages';
import AllCourses from './components/Pages/AllCourses';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/courses' Component={Courses}/>
        <Route path='/AboutUs' Component={AboutUs}/>
        <Route path='/shopping-cart' Component={ShoppingCart}/>
        <Route path='/sign-up' Component={SignUp} />
        <Route path='/log-in' Component={loginpages} />
        <Route path='/all-course' Component={AllCourses} />
      </Routes> 
    </Router>
    </>
  );
}

export default App;
