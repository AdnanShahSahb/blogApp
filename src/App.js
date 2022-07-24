import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./comps/Navbar";
import CreatePost from "./pages/createPost";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {

  const [isAuth,setIsAuth]=useState(localStorage.getItem("isAuthing"));
  
  
  return (
    <div className="App" >
      

      <Navbar setIsAuth={setIsAuth} isAuth={isAuth} />

      <h1 className="my-5">Welcome to Adnans Blog App</h1>
      <Routes>
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/" element={<Home accLoggedIn={isAuth}/>} />
        <Route path="/createPost" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </div>
  );
}

export default App;
