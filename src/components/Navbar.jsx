import React, { useEffect, useState } from "react";
import Login from "./Login";

function Navbar() {
        
const [theme, setTheme] = useState(
   localStorage.getItem("theme")? localStorage.getItem("theme"):"light"
);
const element = document.documentElement;
useEffect(()=>{
  if(theme === "dark"){
    element.classList.add("dark");
    localStorage.setItem("theme","dark");
    document.body.classList.add("dark");

  }else{
    element.classList.remove("dark");
    localStorage.setItem("theme","light");
    document.body.classList.remove("dark");
  }

},[theme]);

  const [sticky,setSticky]=useState(false)
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>0){
        setSticky(true)
      }
      else{
        setSticky(false)
      }
    }
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
  const navItems = (
    <>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/Course'>Course</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );
  return (
    <>
      <div className={`max-w-screen-2xl container dark:bg-slate-900 dark:text-white mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-40 "${
        sticky?"sticky-navbar shadow-md dark:bg-slate-900 dark:text-white bg-base-200 duration-300 translate-all ease-in-out":""
      }`}>
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            <a className=" text-2xl font-bold cursor-pointer">BookStore</a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems} </ul>
            </div>
            <div className="hidden md:block">
              <label className="px-3 py-1 border rounded-md flex items-center gap-2">
                <input type="text" className="grow outline-none dark:bg-slate-900 dark:text-white" placeholder="Search" />
                <svg
                xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-8 w-8 opacity-70"

                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={()=>setTheme(theme === "light"?"dark":"light")}

              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              onClick={()=>setTheme(theme === "dark"?"light":"dark")}
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>

            <div className="">
              <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-500 cursor-pointer"
                onClick={()=>document.getElementById("my_modal_3").showModal()}
                >
                Login
              </a>
              <Login/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
