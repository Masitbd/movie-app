import React from 'react';
import { Link } from 'react-router-dom';

const RelatedMovie = ({movie}) => {
    const {id, title, thumbnail} = movie || {}
    return (
        <div className="w-full flex flex-row gap-2 mb-4">
            <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
                <Link to={`/movies/${id}`}>
                    <img src={thumbnail} className="object-cover" alt={title} />
                </Link>
                
            </div>

            <div clas="flex flex-col w-full">
                <Link to={`/movies/${id}`}>
                    <p className="text-slate-900 text-sm font-semibold">
                        {title}
                    </p>
                </Link>
                <Link
                    className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    to={`/movies/${id}`}
                >
                    
                </Link>
               
            </div>
        </div>
    );
};

export default RelatedMovie;