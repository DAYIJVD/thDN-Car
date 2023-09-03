import React from 'react';
import SuvComponent from "@/components/SuvComponent"
const Suv = ({data}) => {
    return (
        <div>
            <SuvComponent data={data}/>
        </div>
    );
}

export default Suv;
export async function getStaticProps(){
    const res =await fetch(` http://localhost:4500/data`);
    const data=await res.json()
  return{
    props:{
        data,
    }
  }
  }
  
