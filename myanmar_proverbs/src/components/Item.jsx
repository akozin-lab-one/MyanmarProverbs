import React from 'react'
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const Item = ({main}) => {
    console.log(main);
    const itemId = useParams();
    console.log(itemId.id, itemId.itemId);

    if (JSON.stringify(main) !== '[]') {
        const items = Array.isArray(main) === true ? main.filter(ma => parseInt(ma.TitleId) === parseInt(itemId.id) && parseInt(ma.ProverbId) === parseInt(itemId.itemId)) : "";
        console.log(items);
        
        return (
            <div className=' h-screen flex items-center'>
                {
                    Array.isArray(items) === true ? items.map(item => {
                        return [
                            <div className=' relative h-[39%] lg:h-[38%] lg:w-[50%] w-[70%] mx-auto rounded-lg drop-shadow-md'>
                                <h2 className='text-center font-extrabold text-3xl pt-5'>{item.ProverbName}</h2>
                                <p className='lg:text-sm md:text-sm text-xs pt-5 px-3 leading-7 lg:leading-6 lg:tracking-wide'>{item.ProverbDesp}</p>
                                <div className='flex justify-end mt-3 mr-8'>
                                    <NavLink to={`/wordList/${itemId.id}`}>
                                    <p className='cursor-pointer bg-black text-white text-xs rounded-lg p-2'>မူလနေရာသို့</p>
                                    </NavLink>
                                </div>
                                <div className="absolute h-12 w-4 top-0 bg-green-400 rounded-l-lg rounded-t-sm">
                                    
                                </div>
                                <div className="absolute h-4 w-12 top-0 bg-green-400 rounded-l-lg rounded-t-lg">
                                    
                                </div>
                                <div className="absolute h-12 w-4 bottom-0 right-0 bg-green-400 rounded-r-lg rounded-t-sm">
                                    
                                </div>
                                <div className="absolute h-4 w-12 bottom-0 right-0 bg-green-400 rounded-l-lg rounded-t-lg">
                                    
                                </div>
                            </div>
                        ]
                    }) : ""
                }
            </div>
          )   
    }
}

export default Item