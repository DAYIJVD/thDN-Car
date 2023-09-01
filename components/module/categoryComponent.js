import React from 'react';
import Suv from '../icons/Suv';
import Sport from '../icons/Sport';
import Sedan from '../icons/Sedan';
import Hatchback from '../icons/Hatchback';
import Link from 'next/link';

const Category = () => {
    return (
        <div className="flex justify-center items-center mt-1 sm:flex-wrap animate-fade-left animate-once animate-duration-1000 animate-delay-500 animate-ease-in animate-normal animate-fill-backwards   ">
            <Link href="/Suv" >
            <div className="flex m-1 justify-center items-center flex-col p-1  w-[100px]  bg-slate-500 rounded-[5px] duration-150 transition-all hover:bg-slate-600 sm:w-[172px] ">
                <span>Suv</span>
                <Suv/>
            </div>
            </Link>
            <Link href="/Sedan">
            <div className="flex m-1 justify-center items-center flex-col p-1  w-[100px]  bg-slate-500 rounded-[5px] duration-150 transition-all hover:bg-slate-600 sm:w-[172px] ">
                <span>Sedan</span>
                <Sedan/>
            </div>
            </Link>
            <Link href="/Hatchback">
            <div className="flex m-1 justify-center items-center flex-col p-1  w-[100px]  bg-slate-500 rounded-[5px] duration-150 transition-all hover:bg-slate-600 sm:w-[172px] ">
                <span>Hatchback</span>
                <Hatchback/>
            </div>
            </Link>
            <Link href="/Sport">
            <div className="flex m-1 justify-center items-center flex-col p-1  w-[100px]  bg-slate-500 rounded-[5px] duration-150 transition-all hover:bg-slate-600 sm:w-[172px] ">
                <span>Sport</span>
                <Sport/>
            </div>
            </Link>
           
        </div>
    );
}

export default Category;
