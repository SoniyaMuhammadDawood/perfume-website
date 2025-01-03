import React from 'react'
import Image from 'next/image'

const Promotions = () => {
  return (
    <div className="bg-blue-50 ">
      <div className="text-center py-12 sm:py-20 ">
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">
          Our Promotion
        </h1>
        <div className="flex mt-6 justify-center">
          <div className="w-24 sm:w-44 h-1 rounded-full bg-[#E8B86D] inline-flex" />
        </div>
      </div>

      <div
        className="flex flex-col-reverse lg:flex-row items-center lg:justify-between bg-cover bg-no-repeat p-4 lg:h-[70vh] text-black"
      >
        {/* Image Section */}
        <div className="flex justify-center lg:ml-16 my-8 lg:my-0 w-full lg:w-1/2">
          <Image
            src="/images/perfu22.png"
            height={450}
            width={470}
            alt="perfume image"
            className="max-w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="px-4 w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Our Value</h1>
          <p className="text-lg sm:text-lg leading-relaxed">
            At Local Face, our perfume retail store is built on a foundation of passion and authenticity.
            We believe in celebrating the individuality of every customer, providing a diverse collection
            of scents that resonate with their unique personality and style. Our dedicated team of
            fragrance enthusiasts is committed to creating a welcoming and inclusive environment,
            where connections are forged, and inspiration thrives. <br /><br />
            Embracing sustainability and continuous learning, Local Face strives to be more than just a
            shopping destination; we are a community that inspires and empowers individuals on their
            fragrance journey.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Promotions
