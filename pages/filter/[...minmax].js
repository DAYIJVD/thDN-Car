import { useRouter } from 'next/router';
import React from 'react';
import carsData from '@/data/dataCars';
import Card from '@/components/CardComponent';
const Minmax = () => {
    const Router=useRouter()
    const Minmax=Router.query.minmax
    const minmaxArr=Minmax?Minmax[0].split("-"):[];
    const filtred=Minmax?carsData.filter(i=>i.price<minmaxArr[1]&&minmaxArr[0]<i.price):[];
    if(filtred.length){
        return (<>
            <div className="ml-[10rem] my-[4rem] sm:ml-[4rem]">
            <button onClick={()=>Router.back()} className=" hover:bg-slate-400 w-[80px] px-3 py-1  transition-all duration-300 rounded-[10px] bg-blue-500 ">{`< back`}</button>
            </div>
            <div className="mx-[2rem] my-[4rem] flex flex-wrap justify-center">
                {filtred.map(card=><Card key={card.id} id={card.id} name={card.name} model={card.model} location={card.location} price={card.price} year={card.year} image={card.image} category={card.category} distance={card.distance}/>)}  
            </div>
            </>
        );
       }else{
        {
          setTimeout(()=>{
            return(<>
              <div className="ml-[10rem] my-[4rem] sm:ml-[4rem]">
              <button onClick={()=>Router.back()} className=" hover:bg-slate-400 w-[80px] px-3 py-1  transition-all duration-300 rounded-[10px] bg-blue-500 ">{`< back`}</button>
              </div>
          <div className="flex justify-center items-center mt-9">
              <h1 className="text-white sm:w-[250px]">
              There are no machines with the minimum and maximum you specified {`:(`}
              </h1>
          </div>
          </>)
          },2000)
        }
       
       } 
}

export default Minmax;
