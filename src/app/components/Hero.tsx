import React from "react";

const Hero = () => {
  return (
   
    <div className="flex justify-between px-16 font-sans items-center  h-[36rem] bg-[url('/images/bg1.png')] bg-fixed bg-cover bg-no-repeat ">
    
    <div>
    <h1 className="text-4xl text-white md:text-5xl  mb-6">
        Elevate Your Spirit with <br /> Victory Scented <span className='text-teal-500 italic font-medium'> Fragrances!</span>
      </h1>

      <p className="text-2xl font-light text-white">
        Shop now and embrace the sweet smell of victory <br /> with Local Face.
      </p>
      
      <button className="mt-10">
      <a
  href="#_"
  className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
>
  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease" />
  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease" />
  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease" />
  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease" />
  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100" />
  <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
    Shop Now
  </span>
</a>
</button>    
    </div>


  </div>



  );
};

export default Hero;
