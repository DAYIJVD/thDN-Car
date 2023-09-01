import React from 'react';
import carsData from '@/data/dataCars';
import { useRouter } from 'next/router';
import Card from '../../components/CardComponent';
const SearchPage = () => {
    const Router=useRouter()
    const [Searched]=Router.query.searchPage;
    const search_ed=carsData.filter(i=>i.name.toUpperCase().includes(Searched.toUpperCase())||i.model.toUpperCase().includes(Searched.toUpperCase())||i.category.toUpperCase().includes(Searched.toUpperCase()))
   if(search_ed.length){
    return (<>
        <div className="ml-[10rem] my-[4rem] sm:ml-[4rem]">
        <button onClick={()=>Router.back()} className=" hover:bg-slate-400 w-[80px] px-3 py-1  transition-all duration-300 rounded-[10px] bg-blue-500 ">{`< back`}</button>
        </div>
        <div className="mx-[2rem] my-[4rem] flex flex-wrap justify-center">
            {search_ed.map(card=><Card key={card.id} id={card.id} name={card.name} model={card.model} location={card.location} price={card.price} year={card.year} image={card.image} category={card.category} distance={card.distance}/>)}  
        </div>
        </>
    );
   }else{
    return(<>
        <div className="ml-[10rem] my-[4rem] sm:ml-[4rem]">
        <button onClick={()=>Router.back()} className=" hover:bg-slate-400 w-[80px] px-3 py-1  transition-all duration-300 rounded-[10px] bg-blue-500 ">{`< back`}</button>
        </div>
    <div className="flex justify-center items-center mt-9">
        <h1 className="text-white sm:w-[250px]">
        There is no car with the name and model you searched for {`:(`}
        </h1>
    </div>
    </>)
   } 
}

export default SearchPage;
