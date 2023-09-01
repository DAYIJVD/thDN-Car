import React from 'react';
import Location from '../icons/Location';

import { useRouter } from 'next/router';
const Card = ({name,model, id ,location, price,year,image,distance}) => {
    const Router=useRouter()
    const clickHandle=()=>{
        Router.push(`/cars/${id}`)
    }
    return (
        
        <div className="w-[fit-content] sm:w-[350px] p-[0.5rem] rounded-[10px] bg-slate-500 border-solid border-[2px] border-blue-950 m-[15px] animate-fade-left animate-once animate-duration-1000 animate-delay-[500ms] animate-ease-in animate-normal animate-fill-backwards ">
        <img alt='car' className="w-[250px] h-[200px] sm:w-[350px] sm:h-[210px] " src={image} />
        <div className="mt-3">
        <h3 onClick={clickHandle} className="font-bold mr-3 cursor-pointer transition-all duration-300 hover:text-slate-400">{name}-{model}</h3> 
        <span className="text-[12px] text-gray-300">{`${year}-${distance} km`}</span>
        </div>
        <div className="flex justify-between items-center mt-1">
            <span className="bg-blue-700 rounded-[7px] p-1 text-[12px]">{`${price} $`}</span>
            <div className="flex items-center">
            <span className="text-[13px] mr-1">{location}</span>
            <Location/>
            </div>
        </div>
 
        </div>
       
    );
}

export default Card;
