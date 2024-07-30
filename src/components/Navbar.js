import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Named import
import { NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';

function Navbar() {
  const navigate = useNavigate();
  const { user, logOutUser } = useContext(AuthContext);

  const clickLogin = () => {
    navigate("/login");
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#fff" }}>
      <Toolbar>
        <nav className="bg-white h-16 text-black font-bold flex w-full">
          <div className="w-[60%]">
            <ul className="flex">
              <li className="mt-4 mb-4 mx-8 cursor-pointer text-orange-500 hover:text-orange-700 hover:text-lg">
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-2 w-[40%] text-right mr-4">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              {user ? (
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full" onClick={logOutUser}>
                  Logout
                </button>
              ) : (
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full" onClick={clickLogin}>
                  Sign In
                </button>
              )}
            </div>
          </div>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
