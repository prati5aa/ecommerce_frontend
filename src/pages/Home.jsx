import React from 'react'
import Header from '../components/header.jsx'
import Navbar from '../components/navbar.jsx'
import Latest from '../components/home.latest.jsx'
import Cards from '../components/Cards.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/footer.jsx'
import Offer from '../components/Offer.jsx'
import Unique from '../components/Unique.jsx'
function Home() {
    const card=[
  {
    itemName: "Cantilever Chair",
    code: "Y523201",
    price: "$42.00",
    img: "images/chair1.png"
  },
  {
    itemName: "Cantilever Chair",
    code: "Y523202",
    price: "$50.00",
    img: "images/chair2.png"
  },
  {
    itemName: "Cantilever Chair",
    code: "Y523203",
    price: "$36.00",
    img: "images/chair3.png"
  },
  {
    itemName: "Cantilever Chair",
    code: "Y523204",
    price: "$40.00",
    img: "images/chair4.png"
  }
];

const latestProducts = [
  {
    name: "Cantilever Chair ",
    price: "$199.99",
    image: "images/latest1.png" 
  },
  {
    name: "Modern Lounge Chair",
    price: "$349.00",
    image: "images/chair2.png" 
  },
  {
    name: "Wooden Accent Chair ",
    price: "$279.00",
    image: "images/latest3.png" 
  },
  {
    name: "Ergonomic Office Chair ",
    price: "$139.50",
    image: "images/latest4.png"
  },
  {
    name: "Minimalist Armchair ",
    price: "$189.00",
    image: "images/latest5.png" 
  },
  {
    name: "Rustic Leather Chair ",
    price: "$459.00",
    image: "images/latest6.png" 
  }
];






  return (
    <div>
      <Header/>
      <Navbar/>
     <Hero/>
     <div className='flex justify-center mt-20 mb-20 items-center bg-[white] w-full h-[361px] gap-5'>
    { card.map((item,index)=>(
        <Cards
          key={index}
          itemName={item.itemName}
          code={item.code}
          price={item.price}
          img={item.img}/>
    ))
} </div>

{/* latest */}

    <div className='flex flex-col items-center justify-center gap-5 w-full'>
        <p className='text-[42px] font-[700] text-[#151875]'>Leatest Products</p>
        <p className='flex gap-5 text-[14px] font-[500] text-[#151875]'>
            <span>New Arrival</span>
            <span>Best seller</span>
            <span>Featured</span>
            <span>Special Offer</span>
        </p>
        <div className='flex gap-5 gap-y-8 flex-wrap justify-center items-center w-[80%] h-[650px]'>

    {latestProducts.map((product, index) => (
        <Latest key={index} name={product.name} price={product.price} img={product.image} />
    ))}
    </div>
    </div>

    <Offer/>

    <Unique/>
    <Footer/>


     
    </div>
  )
}

export default Home
