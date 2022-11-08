import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import {  Link } from 'react-router-dom';

const MovieGridItem = ({movie={}}) => {
    
    const {id, title, type, rating, thumbnail} = movie

   
   

    const setData= ()=>{

        if (sessionStorage) {
            let cart;
            if (!sessionStorage['cart']) cart = [];
            else cart = JSON.parse(sessionStorage['cart']);            
            if (!(cart instanceof Array)) cart = [];
            cart.push({id, title, type});
            sessionStorage.setItem('cart', JSON.stringify(cart));
        }
    }


    
    return (
        <div
        className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
        <div className="w-full flex flex-col">
            <div className="relative">
                <Link to={`/movies/${id}`}>
                    <img
                        src={thumbnail}
                        className="w-full h-36"
                        alt={title}
                        
                        onClick={()=>setData()}
                    />
                    
                </Link>

            </div>

            <div className="flex flex-row mt-2 gap-2">
                
                <div clas="flex flex-col">
                    <Link to='/videos/1'>
                        <p
                            className="text-slate-900 text-sm font-semibold"
                        >
                            {title}
                        </p>
                        <p
                            className="text-slate-900 text-sm font-semibold"
                        >
                            {type}
                        </p>
                    </Link>
                    <Link
                        className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                        to="/videos/1"
                    >
                        {/* {producer} */}
                    </Link>
                    <p className="text-gray-400 text-xs mt-1">
                        200 views . May 3, 2022
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                        <ReactStars 
                         size= {25}
                         count= {5}
                         value={rating}
                         isHalf = {true}
                        color= "#fffffg"
                         
                        />
                        {rating}
                    </p>
                </div>
            </div>
        </div>
        
    </div>
    );
};

export default MovieGridItem;