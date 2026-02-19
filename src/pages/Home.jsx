import React, { useState } from 'react';
import Latest from '../components/home.latest.jsx';
import Cards from '../components/Cards.jsx';
import Hero from '../components/Hero.jsx';
import Footer from '../components/footer.jsx';
import Offer from '../components/Offer.jsx';
import Unique from '../components/Unique.jsx';
import Trending from '../components/Trending.jsx';
import Discount from '../components/Discount.jsx';
import TopCategory from '../components/topCategory.jsx';
import Newsletter from '../components/Newsletter.jsx';
import { API_BASE_URL_FULL } from '../api';

function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [latestProducts, setLatestProducts] = useState([]);

  const newArrivals = [
    { name: "Cantilever Chair", price: "$199.99", image: "images/latest1.png" },
    { name: "Modern Lounge Chair", price: "$349.00", image: "images/chair2.png" },
    { name: "Wooden Accent Chair", price: "$279.00", image: "images/latest3.png" },
    { name: "Ergonomic Office Chair", price: "$139.50", image: "images/latest4.png" },
    { name: "Minimalist Armchair", price: "$189.00", image: "images/latest5.png" },
    { name: "Rustic Leather Chair", price: "$459.00", image: "images/latest6.png" }
  ];

  const featured = [
    { name: "Classic Lounge Chair", price: "$459.00", image: "images/latest3.png" },
    { name: "Ergo Task Chair", price: "$189.00", image: "images/latest6.png" },
    { name: "Cozy Armchair", price: "$199.99", image: "images/chair2.png" },
    { name: "Vintage Leather Chair", price: "$279.00", image: "images/latest4.png" },
    { name: "Sleek Work Chair", price: "$139.50", image: "images/latest5.png" },
    { name: "Wooden Lounge Chair", price: "$349.00", image: "images/latest1.png" }
  ];

  const SpecialOffer = [
    { name: "Premium Office Chair", price: "$349.00", image: "images/latest6.png" },
    { name: "Scandinavian Armchair", price: "$199.99", image: "images/latest4.png" },
    { name: "Comfy Lounge Chair", price: "$139.50", image: "images/latest3.png" },
    { name: "Contemporary Chair", price: "$459.00", image: "images/latest5.png" },
    { name: "Retro Fabric Chair", price: "$189.00", image: "images/latest1.png" },
    { name: "Stylish Accent Chair", price: "$279.00", image: "images/chair2.png" }
  ];

  const card = [
    { itemName: "Cantilever Chair", code: "Y523201", price: "$42.00", img: "images/chair1.png" },
    { itemName: "Cantilever Chair", code: "Y523202", price: "$50.00", img: "images/chair2.png" },
    { itemName: "Cantilever Chair", code: "Y523203", price: "$36.00", img: "images/chair3.png" },
    { itemName: "Cantilever Chair", code: "Y523204", price: "$40.00", img: "images/chair4.png" }
  ];

  const tabs = [
    { name: "New Arrival", id: 1 },
    { name: "Best Seller", id: 2 },
    { name: "Featured", id: 3 },
    { name: "Special Offer", id: 4 }
  ];

const fetchBestSellers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL_FULL}/product`);
    const data = await response.json();
    console.log("BEST SELLER RESPONSE:", data); // ← CHECK THIS

    // Safe: fallback to empty array if undefined
    setLatestProducts(Array.isArray(data.products) ? data.productName : []);
  } catch (error) {
    console.error("API error:", error);
    setLatestProducts([]); // prevent app crash
  }
};

  const handleChange = (id) => {
    setActiveIndex(id);

    if (id === 1) {
      setLatestProducts(newArrivals);
    } else if (id === 2) {
      fetchBestSellers(); // 🔄 dynamically fetch best sellers from backend
    } else if (id === 3) {
      setLatestProducts(featured);
    } else {
      setLatestProducts(SpecialOffer);
    }
  };

  // Initialize with newArrivals on first render
  React.useEffect(() => {
    setLatestProducts(newArrivals);
  }, []);

  return (
    <div>
      <Hero />

      <div className='flex justify-center mt-20 mb-20 items-center bg-[white] w-full h-[361px] gap-5'>
        {card.map((item, index) => (
          <Cards
            key={index}
            itemName={item.itemName}
            code={item.code}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>

      {/* Latest Products Section */}
      <div className='flex flex-col items-center justify-center gap-5 w-full'>
        <p className='text-[42px] font-[700] text-[#151875]'>Latest Products</p>

        {/* ✅ FIXED: no <p> inside <p> */}
        <div className='flex gap-5 text-[14px] font-[500] text-[#151875]'>
          {tabs.map((tab) => (
            <span
              key={tab.id}
              onClick={() => handleChange(tab.id)}
              className={`px-4 py-2 rounded cursor-pointer 
              ${activeIndex === tab.id ? "text-[#FB2E86]" : "text-[#151875]"}`}
            >
              {tab.name}
            </span>
          ))}
        </div>

        <div className='flex gap-5 gap-y-8 flex-wrap justify-center items-center w-[80%] h-[650px]'>
          {latestProducts.map((product, index) => (
            <Latest
              key={index}
              name={product.productName}
              price={product.price}
              img={product.image}
            />
          ))}
        </div>
      </div>

      <Offer />
      <Unique />
      <Trending />
      <Discount />
      <TopCategory />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
