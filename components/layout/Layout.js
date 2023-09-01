import Link from 'next/link';
import React from 'react';
import Search from '../module/SearchComponent';

const Layout = ({children}) => {
    return (
        <>
         <header className="text-center p-[1rem] mt-3 mx-auto w-[429.562px] bg-blue-700 rounded-[10px] sm:w-[350px] animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-backwards">
            <Link href="/">
            <h1 className="font-extrabold text-[1.5rem] transition-all duration-200 hover:text-slate-50">
                TheDN-Car
            </h1>
            </Link>
            <p className="border-b-2">Choose Your Car </p>
            <Search/>
        </header> 
        <div class="min-h-[1000px]">
         {children}
         </div> 
         <footer className="text-center mx-auto bg-blue-700 p-[1rem]">
            @TheDN-Car Project-2023 
        </footer> 
        </>
    );
}

export default Layout;
