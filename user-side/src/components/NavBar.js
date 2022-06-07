import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar(props) {
    return (
        
        <nav className="flex lg:flex-grow items-center justify-end mt-5 p-3 bg-[#c57e13] bg-opacity-50 w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            {/* <div className=""> */}
                    <ul className="flex justify-end">
                        <li className="block mt-4 lg:inline-block lg:mt-0 text-white text-lg hover:text-xl hover:font-bold mr-4">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        
                        <li className="block mt-4 lg:inline-block lg:mt-0 text-white text-lg hover:text-xl hover:font-bold mr-4">
                            <NavLink className="nav-link" to="/add-content">Add content</NavLink>
                        </li>
                        
                        <li className="block mt-4 lg:inline-block lg:mt-0 text-white text-lg hover:text-xl hover:font-bold mr-4">
                            {/* Log out user. Then go to home page. */}
                            <NavLink className="nav-link" to="/" onClick={props.logoutCb}>Logout</NavLink>
                        </li>
                    </ul>
                {/* </div> */}                
            
        </nav>
    );
}

export default NavBar;