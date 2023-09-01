import React ,{useState}from 'react';
import { useRouter } from 'next/router';
const Search = () => {
    const [SearchValue,setValue]=useState({value:""})
   const router=useRouter()
    const search_v=(e)=>{
        setValue({
            value:e.target.value
        })
    }
    const search_b=()=>{
        if(SearchValue.value){
            router.push(`/Search/${SearchValue.value}`)
            setValue({
                value:""
             });      
        }else{
            alert("The search box is empty.")
        }
     
    }
    return (
        <div>
            <input type='text' value={SearchValue.value} onChange={search_v} className="focus:outline-none   mr-2 w-[297.55px] mt-1 p-1 rounded-[5px] text-slate-700 sm:w-[240px] " placeholder="Search"/>
            <button onClick={search_b} className=" bg-slate-400 w-[80px] sm:w-[70px] sm:px-0 px-3 py-1  transition-all duration-200 rounded-[10px] hover:bg-slate-500 ">Search</button>
        </div>
    );
}



export default Search;
