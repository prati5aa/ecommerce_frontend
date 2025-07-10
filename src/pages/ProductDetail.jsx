import React from 'react'
import Header from '../components/header.jsx'
import Nav from '../components/navbar.jsx'
import ShowPro from '../components/ShowPro.jsx'
import ProDesc from '../components/ProDesc.jsx'
import Footer from '../components/footer.jsx'
import HeroNav from '../components/Resuable/HeroNav.jsx'
import Breadcrumbs from '../components/Resuable/Breadcrumb.jsx'
const ProductDetail = () => {
    const pageName = "Product Details";
  return (

    <div>
      

      <HeroNav  name={pageName}/>
        

      <ShowPro/>
        <ProDesc/>

       

    </div>
  )
}

export default ProductDetail
