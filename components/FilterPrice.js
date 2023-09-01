import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const FilterPrice = () => {
    const router=useRouter()
    const [minmax,setminmax]=useState({min:"",max:""})
    const setmin=(e)=>{
        setminmax({
            ...minmax,min:e.target.value
        })
    }
    const setmax=(e)=>{
        setminmax({
            ...minmax,max:e.target.value
        })
    }
    const filterHandler=()=>{
       if(minmax.min&&minmax.min) {
        setminmax({
            min:"",max:""
        });
     router.push(`/filter/${minmax.min}-${minmax.max}`)
    }else{
            alert("The Filter box is empty.")
        }
    }
    return (
        <div className="bg-blue-700 w-[429.562px] sm:w-[350px] mt-2 h-[fit-content] p-5 rounded-[10px] text-center mx-auto flex flex-wrap animate-fade-right animate-once animate-duration-1000 animate-delay-[500ms] animate-ease-in animate-normal animate-fill-backwards ">
            <input type='number' value={minmax.min} onChange={setmin} placeholder='Min-Price' className="focus:outline-none sm:w-[240px]   mr-2 w-[297.55px] mt-1 p-1 rounded-[5px] text-slate-700"/>
           <Link href="/AllCars"> <button className=" py-1 mt-1 bg-slate-400 w-[80px] sm:w-[60px] sm:text-[15px] sm:px-0 sm:mt-1 px-3  transition-all duration-200 rounded-[10px] hover:bg-slate-500 ">All Cars</button></Link>
            <input type='number' value={minmax.max} onChange={setmax} placeholder='Max-Price' className=" focus:outline-none sm:w-[240px]   mr-2 w-[297.55px] mt-1 p-1 rounded-[5px] text-slate-700" />
            <button onClick={filterHandler} className=" bg-slate-400 w-[80px] sm:w-[60px] px-3  transition-all mt-2 duration-200  rounded-[10px] hover:bg-slate-500 ">Filter</button>
        </div>
    );
}

export default FilterPrice;
