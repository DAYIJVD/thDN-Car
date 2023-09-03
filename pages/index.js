import CardsHome from "@/components/CardsHomeComponent";
import Category from "@/components/CategoryComponent";
import FilterPrice from "@/components/FilterPrice";

export default function Home({data}) {
  return (
    <>
    <Category/>
    <FilterPrice/>
    <CardsHome data={data}/>
    </>
  )
}
export async function getStaticProps(){
  const res =await fetch(` http://localhost:4500/data`);
  const data=await res.json()
return{
  props:{
      data,
  }
}
}

