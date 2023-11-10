import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    {path:"/", title:"Search Job"},
    {path:"/my-job", title:"My Jobs"},
    {path:"/salary", title:"Salary"},
    {path:"/post-job", title:"Post Job"},
  ]
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a className="flex items-center text-2xl gap-2 text-blue" href="/">
          <img
            src="https://i.ibb.co/DYVBS9D/logoaa.png"
            className="bg-blue rounded-full w-10 "
            alt=""
          />
          <span>JobConnect</span>
        </a>

        {/* nav items for large devices */}
        <ul className="hidden md:flex gap-12">
            {
                navItems.map(({path, title})=>(
                    <li key={path}>
                         <NavLink
                         to={path}
                         className={({isActive})=>
                        isActive? "active" : ""
                        }
                         >
                          {title}
                         </NavLink>
                    </li>
                ))
            }
        </ul>

        {/* signup and login */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
            <Link to='/login' className="py-2 px-5 border rounded">Log in</Link>
            <Link to='/signup' className="py-2 px-5 border bg-blue text-white rounded">Sign up</Link>
        </div>

        {/* mobile menu */}
        <div className="md:hidden block">
            <button onClick={handleMenuToggler}>
                {
                    isMenuOpen ? <FaXmark className="h-5 w-5 text-primary"/> : <FaBarsStaggered className="h-5 w-5 text-primary"/>
                }
            </button>
        </div>
      </nav>
      {/* nav items for mobile */}
      <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen? "" : "hidden"}`}>
      <ul>
            {
                navItems.map(({path, title})=>(
                    <li key={path} className="text-base text-white first:text-white py-1">
                         <NavLink
                         to={path}
                         className={({isActive})=>
                        isActive? "active" : ""
                        }
                         >
                          {title}
                         </NavLink>
                    </li>
                    
                ))
                
            }
            <li><Link to='/login' className=" text-white">Log in</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
