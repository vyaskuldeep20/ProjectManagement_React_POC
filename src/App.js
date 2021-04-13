import './App.css';
import React,{useState,useEffect} from 'react'
import RoutingComponent from './Routing/RoutingComponent';
import Header from './Components/common/Header';
import Footer from './Components/common/Footer';
import './Styles/common.css'
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { ToastContainer } from "react-toastify";


function App() {

  return (
    <div className="App">
        <ToastContainer autoClose={3000} hideProgressBar />
        <div className='header'>
          <Header/>
        </div>
        <div className='body'>
          <RoutingComponent />
        </div>
        <div className='footer'>
          <Footer />
        </div>
    </div>
  );
}

export default App;
