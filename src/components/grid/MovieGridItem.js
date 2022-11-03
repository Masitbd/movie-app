import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const MovieGridItem = ({movie={}}) => {
    const {id, title, type, producer, rating, thumbnail} = movie
    
    return (
        <div
        className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
        <div className="w-full flex flex-col">
            <div className="relative">
                <Link to={`/movies/${id}`}>
                    <img
                        src={thumbnail}
                        className="w-full h-auto"
                        alt={title}
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
                        {producer}
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