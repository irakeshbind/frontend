import React from "react";
import Home from "./Home/Home";
import Courses from "./Courses/Courses";

import { Routes,Route } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Courses />} />
       <Route path="/signup" element={<Signup/>}/>
     
       
      </Routes>
      </div>
    </>
  );
}

export default App;
