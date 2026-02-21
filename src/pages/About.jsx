import React from 'react'

import Breadcrumbs from '../components/Resuable/Breadcrumb'

import { FaHeart } from 'react-icons/fa'
import { SiTicktick } from 'react-icons/si'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { CiDeliveryTruck } from 'react-icons/ci'
import { GrSecure } from 'react-icons/gr'
import { GiReturnArrow } from 'react-icons/gi'
import { BiMessage } from 'react-icons/bi'

const About = () => {
  return (
    <div>
      <Breadcrumbs />
    
      
      <div className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#151875] mb-4">
              Welcome to Our Ecommerce Store
            </h1>
            <p className="text-lg text-[#A9ACC6] max-w-3xl mx-auto">
              We are dedicated to providing you with the best products and exceptional service. 
              Our mission is to make online shopping easy, enjoyable, and accessible for everyone.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#151875] mb-6">Our Mission</h2>
              <p className="text-[#A9ACC6] leading-relaxed mb-4">
                At our ecommerce platform, we strive to deliver high-quality products that meet 
                your needs and exceed your expectations. We believe in building lasting relationships 
                with our customers through transparency, reliability, and outstanding customer service.
              </p>
              <p className="text-[#A9ACC6] leading-relaxed">
                Our commitment extends beyond just selling products - we're here to enhance your 
                shopping experience and make your life easier with carefully curated selections 
                and competitive prices.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#151875] mb-6">Our Vision</h2>
              <p className="text-[#A9ACC6] leading-relaxed mb-4">
                We envision becoming the most trusted and customer-centric ecommerce platform, 
                where quality meets affordability. We aim to continuously innovate and improve 
                our services to better serve our community.
              </p>
              <p className="text-[#A9ACC6] leading-relaxed">
                Through sustainable practices and ethical business operations, we're building a 
                future where online shopping is seamless, secure, and satisfying for everyone.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-[#F9F8FE] rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#151875] mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FB2E86] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl"> <SiTicktick />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#151875] mb-2">Quality</h3>
                <p className="text-[#A9ACC6]">
                  We ensure every product meets our high standards of quality and durability.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#08D15F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl"><FaHeart />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#151875] mb-2">Customer First</h3>
                <p className="text-[#A9ACC6]">
                  Your satisfaction is our top priority. We're here to help you find exactly what you need.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2F1AC4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl"><AiOutlineThunderbolt />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#151875] mb-2">Innovation</h3>
                <p className="text-[#A9ACC6]">
                  We continuously improve our platform and services to provide the best shopping experience.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#151875] mb-8 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="text-[#FB2E86] text-2xl"><CiDeliveryTruck />
                </div>
                <div>
                  <h3 className="font-bold text-[#151875] mb-2">Fast & Free Shipping</h3>
                  <p className="text-[#A9ACC6] text-sm">We offer fast and reliable shipping options to get your products to you quickly.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="text-[#FB2E86] text-2xl"><GrSecure />
                </div>
                <div>
                  <h3 className="font-bold text-[#151875] mb-2">Secure Payments</h3>
                  <p className="text-[#A9ACC6] text-sm">Your payment information is protected with industry-standard security measures.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="text-[#FB2E86] text-2xl"><GiReturnArrow />
                </div>
                <div>
                  <h3 className="font-bold text-[#151875] mb-2">Easy Returns</h3>
                  <p className="text-[#A9ACC6] text-sm">Not satisfied? We offer hassle-free returns within 30 days of purchase.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="text-[#FB2E86] text-2xl"><BiMessage />
                </div>
                <div>
                  <h3 className="font-bold text-[#151875] mb-2">24/7 Support</h3>
                  <p className="text-[#A9ACC6] text-sm">Our customer support team is always ready to assist you with any questions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          
        </div>
      </div>

      
    </div>
  )
}

export default About
