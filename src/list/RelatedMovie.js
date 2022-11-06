import React from 'react';

const RelatedMovie = () => {
    return (
        <div class="w-full flex flex-row gap-2 mb-4">
            <div
                class="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]"
            >
                <a href="video.html">
                    <img
                        src="https://img.freepik.com/free-photo/beautiful-milky-way-night-sky_53876-139825.jpg?w=996&t=st=1667758169~exp=1667758769~hmac=c34bbff910715cf1bffd32ac10e47f5e4cc7389ff3a812ecb18a0d269e8e9e7b"
                        class="object-cover"
                        alt="Some video title"
                    />
                </a>
                <p
                    class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                >
                    12:10
                </p>
            </div>

            <div class="flex flex-col w-full">
                <a href="#">
                    <p
                        class="text-slate-900 text-sm font-semibold"
                    >
                        Some video title
                    </p>
                </a>
                <a
                    class="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    href="#"
                >
                    Movie Application
                </a>
                <p class="text-gray-400 text-xs mt-1">
                    100K views . 23 Oct 2022
                </p>
            </div>
        </div>
    );
};

export default RelatedMovie;