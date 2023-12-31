import React from 'react';
import Card from './CardComponent';
import { useRouter } from 'next/router';
const HatchbackComponent = ({data}) => {
  const Router=useRouter()
    const hatch=data.filter(i=>i.category==="hatchback")
    return (<>
        <div className="ml-[10rem] my-[4rem] sm:ml-[4rem]">
        <button onClick={()=>Router.back()} className=" bg-slate-400 w-[80px] px-3 py-1  transition-all duration-300 rounded-[10px] hover:bg-slate-700  ">{`< Back`}</button>

        </div>
        <div className="mx-[2rem] my-[4rem] flex flex-wrap justify-center">
          {hatch.map(card=><Card key={card.id} id={card.id} name={card.name} model={card.model} location={card.location} price={card.price} year={card.year} image={card.image} category={card.category} distance={card.distance}/>)}  
        </div>
        </>
    );
}

export default HatchbackComponent;
