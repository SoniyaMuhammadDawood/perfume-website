import React from 'react'
import { FcInTransit } from "react-icons/fc";
import { FcSalesPerformance } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";

const page = () => {
  return (
    <div>



      <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">
        Our Services
      </h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
      At Local Face, our passion for perfumery drives us to serve you better olfactory dreams to life. Let our friendly team make your fragrance exploration truly memorable.
      </p>
      <div className="flex mt-6 justify-center">
        <div className="w-44 h-1 rounded-full bg-indigo-500 inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      

      {/* Free Delivery */}
      <div className="p-4 md:w-1/3 group flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 text-2xl font-bold ">
         
        <FcInTransit className='h-12 w-12 '/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-bold mb-3 group-hover:text-yellow-600 duration-300">
            Free Delivery
          </h2>
          <p className="leading-relaxed text-lg font-medium text-gray-800">
            Free delivery on order above $1000</p>
        </div>
      </div>

      <div className="p-4 md:w-1/3 group flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 text-2xl font-bold ">
         
        <FcAssistant className='h-10 w-10 '/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-bold mb-3 group-hover:text-yellow-600 duration-300">
          24/7 Customer Services
          </h2>
          <p className="leading-relaxed text-lg font-medium text-gray-800">
            Free delivery on order above $1000</p>
        </div>
      </div>


       {/* Discount */}
      <div className="p-4 md:w-1/3 group flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 text-2xl font-bold ">
         
        <FcSalesPerformance className='h-14 w-14 '/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-bold mb-3 group-hover:text-yellow-600 duration-300">
            Exclusive Discounts
          </h2>
          <p className="leading-relaxed text-lg font-medium text-gray-800">
            Free delivery on order above $1000</p>
        </div>
      </div>

    </div>
   
  </div>
</section>

    </div>
  )
}

export default page
