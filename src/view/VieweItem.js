import React from 'react';

const VieweItem = ({items}) => {
    return (
        <section className="pt-12">
            <h1 className='text-center mb-5'>Recently viewed</h1>
        <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">

            {items?.map(item=>{
                
              return <div class="flex justify-center bg-slete-200">
              <div class="block p-6 rounded-lg shadow-lg bg-slate-100 max-w-sm">
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{item.title}</h5>
                <p class="text-gray-700 text-base mb-4">
                  {item.type}
                </p>
              </div>
            </div>
                        }
              
        )} 
              </div>
        </section>
    );
};

export default VieweItem;