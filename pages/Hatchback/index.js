import HatchbackComponent from '@/components/HatchbackComponent';
import React from 'react';

const Hatchback = ({data}) => {
    return (
        <div>
           <HatchbackComponent data={data}/> 
        </div>
    );
}

export default Hatchback;
export async function getStaticProps(){
    const res =await fetch(` http://localhost:4500/data`);
    const data=await res.json()
  return{
    props:{
        data,
    }
  }
  }
  
