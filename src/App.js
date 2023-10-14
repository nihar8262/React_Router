import { Route,Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivatRoute from "./components/PrivatRoute";


function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (<div className="w-screen h-screen bg-richblack-900 flex flex-col">

    <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />

       <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={
        <PrivatRoute isLoggedIn = {isLoggedIn}>
             <Dashboard/>
        </PrivatRoute>
        }/>
        
       </Routes>
  </div>);
}

export default App;
