import { useRouter } from 'next/router';

import React from 'react';
import Company from './Company';
import Model from './Model';
import Calender from './Calender';
import Road from './Road';
import Location from './Location';
import Money from './Money';

const AbouteCarComponent = ({car}) => {
    const Router=useRouter()
    if(car){ return (<>
        <div className=" mr-[520px] sm:mr-[250px] mt-5">
        <button onClick={()=>Router.back()} className=" bg-slate-400 w-[80px] px-3 py-1  transition-all duration-300 rounded-[10px] hover:bg-slate-700  ">{`< Back`}</button>
        </div>
        <div className="flex  flex-col my-4 sm:w-[365px]  w-[fit-content] p-[0.5rem] rounded-[10px]   animate-fade-left animate-once animate-duration-1000 animate-delay-[500ms] animate-ease-in animate-normal animate-fill-backwards">
            <img alt='car' className="rounded-[10px] w-[600px] sm:w-[350px] " src={car.image} />
            <h1 className="my-1 text-[20px] ">{car.name}-{car.model}</h1>
            <div className="rounded-[10px] p-2 bg-slate-500 sm:w-[350px]" >
                <div className="flex justify-between">
                    <div className="flex justify-center items-center">
                    <Company/>
                    <h3 className="ml-2">Company</h3>
                    </div>
                    <h2>{car.name}</h2>
                </div>
                <div className="flex justify-between mt-3">
                    <div className="flex justify-center items-center">
                    <Model/>
                    <h3 className="ml-2">Model</h3>
                    </div>
                    <h2>{car.model}</h2>
                </div>
                <div className="flex justify-between mt-3">
                    <div className="flex justify-center items-center">
                    <Calender/>
                    <h3 className="ml-2">First Rigestration</h3>
                    </div>
                    <h2>{car.year}</h2>
                </div>
                <div className="flex justify-between mt-3">
                    <div className="flex justify-center items-center">
                    <Road/>
                    <h3 className="ml-2">Kms driven</h3>
                    </div>
                    <h2>{car.distance} km</h2>
                </div>
            </div>
            <div className="rounded-[10px] pb-2 px-2 bg-slate-500 mt-3 sm:w-[350px]" >
            <div className="flex justify-between mt-3">
                    <div className="flex justify-center items-center">
                    <Location/>
                    <h3 className="ml-2">Location</h3>
                    </div>
                    <h2>{car.location}</h2>
                </div>
            </div>
            <div  className="rounded-[10px] py-2 px-2 bg-slate-500 mt-3 w-[600px] sm:w-[350px]">
                <h2>Description :</h2>
                <p>{car.description}</p>
            </div>
            <div  className="rounded-[10px] pb-2 px-2 bg-slate-500 mt-3 w-[600px] sm:w-[350px]">
            <div className="flex justify-between mt-3">
                    <div className="flex justify-center items-center">
                    <Money/>
                    <h3 className="ml-2"> Price :</h3>
                    </div>
                    <h2>{car.price} $</h2>
                </div>
            </div>
            <div  className="flex cursor-pointer transition-all duration-300 hover:bg-slate-500 justify-center rounded-[10px] py-2 px-2 bg-blue-700 mt-3 w-[600px] sm:w-[350px]">
               <h1 >Buy</h1>
            </div>
        </div>
        </>
    );}else{
        return <div></div>
    }
}

export default AbouteCarComponent;
