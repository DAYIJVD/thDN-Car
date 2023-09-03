import React from 'react';
import SedanComponent from '@/components/SedanComponent';
const Sedan = ({data}) => {
    return (
        <div>
            <SedanComponent data={data}/>
        </div>
    );
}

export default Sedan;
export async function getStaticProps(){
    const res =await fetch(` http://localhost:4500/data`);
    const data=await res.json()
  return{
    props:{
        data,
    }
  }
  }
  
