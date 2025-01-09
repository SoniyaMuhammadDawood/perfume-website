import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Unique = () => {
  return (
    <div className="bg-blue-50">
      {/* Header */}
      <div className="text-center py-10 ">
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">
          Unique Collection
        </h1>
        <div className="flex mt-6 justify-center">
          <div className="w-44 h-1 rounded-full bg-[#E8B86D] inline-flex" />
        </div>
      </div>
      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-6 lg:mx-12">
        {/* Product Cards */}
        {[
          { src: '/images/uni9.png', title: 'CRYSTAL RONEN' },
          { src: '/images/uni2.png', title: 'Versace Bright Crystal' },
          { src: '/images/uni16.png', title: 'Dolce & Gabbana Light Blue' },
          { src: '/images/uni4.png', title: 'GHALA SAEED' },
          { src: '/images/uni14.png', title: 'Burberry Her' },
          { src: '/images/uni6.png', title: 'DECLOY ROSE' },
          { src: '/images/uni7.png', title: 'COACH NECLO' },
          { src: '/images/uni15.png', title: 'GABBANA' },
        ].map((product, index) => (
          <Link href={'/products'} key={index}>
            <div className="relative group border-2 rounded-xl border-gray-100 overflow-hidden mx-auto w-full sm:w-auto">
              <Image
                src={product.src}
                alt={product.title}
                height={500}
                width={400}
                className="h-60 sm:h-72 w-full object-cover rounded-xl duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-6 lg:block lg:-bottom-24 lg:group-hover:bottom-0 duration-500 text-center w-full">
                <h1 className="uppercase text-xl sm:text-2xl font-bold tracking-tight lg:text-3xl bg-gray-700/70 text-gray-50 px-2">
                  {product.title}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Unique
