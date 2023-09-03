import React from 'react';
import SportComponents from '@/components/SportComponent';
const Sport = ({data}) => {
    return (
        <div>
           <SportComponents data={data}/> 
        </div>
    );
}

export default Sport;
export async function getStaticProps(){
    const res =await fetch(` http://localhost:4500/data`);
    const data=await res.json()
  return{
    props:{
        data,
    }
  }
  }
  
