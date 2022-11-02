import React from 'react';
import Search from './Search';
import { BsFillCaretRightSquareFill, BsSearch } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className="bg-slate-100 shadow-md">
        <div
            className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
        > 
          <div className='flex'>
            <p className='pt-1 px-2'><BsFillCaretRightSquareFill /></p>
          
          <p>Movie Application</p>
          </div>

            
            <div
                className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
            >
                <Search />
               <BsSearch />
            </div>
        </div>
    </nav>
    );
};

export default Navbar;