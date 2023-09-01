import React from 'react';
import data from "@/data/dataCars"
import Card from './CardComponent';
const CardsHome = () => {
    const filter=data.filter(i=>i.id<5)
    return (
        <div className="mx-[2rem] my-[4rem] flex flex-wrap justify-center">
           
            {filter.map(card=><Card key={card.id} id={card.id} name={card.name} model={card.model} location={card.location} price={card.price} year={card.year} image={card.image} category={card.category} distance={card.distance}/>)}
        </div>
    );
}

export default CardsHome;
