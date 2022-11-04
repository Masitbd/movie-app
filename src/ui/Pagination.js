import React from 'react';

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return (
        <section className="pt-12">
        <div
            className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end"
        >
                      {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={`${page === currentPage ? "bg-blue-500" : ""} bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}

                       >
                        {page}
                    </button>
                );
            })}
   
        </div>
    </section>

    );
};

export default Pagination;