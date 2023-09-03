import React from 'react';

import Card from './CardComponent';
const CardsHome = ({data}) => {
   
    const filter=data.filter(i=>i.id<5)
    return (
        <div className="mx-[2rem] my-[4rem] flex flex-wrap justify-center">
           
            {filter.map(card=><Card key={card.id} id={card.id} name={card.name} model={card.model} location={card.location} price={card.price} year={card.year} image={card.image} category={card.category} distance={card.distance}/>)}
        </div>
    );
}

export default CardsHome;
