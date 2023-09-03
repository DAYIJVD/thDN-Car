import AllCards from '@/components/AllCardsComponent';

import React from 'react';

const Home = ({data}) => {
    return (
        <div>
          <AllCards data={data}/> 
        </div>
    );
}

export default Home;
export async function getStaticProps(){
  const res =await fetch(` http://localhost:4500/data`);
  const data=await res.json()
return{
  props:{
      data,
  }
}
}
