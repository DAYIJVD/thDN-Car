import AbouteCarComponent from '@/components/AbouteCarComponent';
import React from 'react';

const Carid = ({data}) => {
    return (
        <div className="flex flex-col justify-center items-center" >
            <AbouteCarComponent car={data}/>
        </div>
    );
}

export default Carid;
//http://localhost:4500/data

export async function getStaticPaths(){
    const res =await fetch("http://localhost:4500/data")
    const data =await res.json()
    const paths=data.map(i=>({
        params:{carid:i.id.toString()}
    }))
    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}){
    const res =await fetch(` http://localhost:4500/data/${params.carid}`);
    const data=await res.json()
return{
    props:{
        data,
    }
}
}
