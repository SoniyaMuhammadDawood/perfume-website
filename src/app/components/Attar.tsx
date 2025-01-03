import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Attar = () => {
  return (
    <div className="bg-blue-50">
      {/* Header */}
      <div className="text-center py-10">
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">
          Attar Collection
        </h1>
        <div className="flex mt-6 justify-center">
          <div className="w-44 h-1 rounded-full bg-[#E8B86D] inline-flex" />
        </div>
      </div>
      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-6 lg:mx-12">
        {/* Card Component */}
        {[
          { src: '/images/attar14.png', title: 'CRYSTAL RONEN' },
          { src: '/images/attar13.png', title: 'MEN NBLOE' },
          { src: '/images/attar11.png', title: 'ONXY POWER' },
          { src: '/images/attar4.png', title: 'CALDON BLUSH' },
          { src: '/images/attar1.png', title: 'CALDON BLUSH' },
          { src: '/images/attar16.png', title: 'CALDON BLUSH' },
          { src: '/images/attar8.png', title: 'CALDON BLUSH' },
          { src: '/images/attar9.png', title: 'CALDON BLUSH' },
        ].map((item, index) => (
          <Link href={'products'} key={index}>
            <div className="relative group border-2 rounded-xl border-white overflow-hidden mx-auto w-full sm:w-auto">
              <Image
                src={item.src}
                alt={item.title}
                height={500}
                width={400}
                className="h-60 sm:h-72 w-full object-cover rounded-xl duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-6 lg:block lg:-bottom-24 lg:group-hover:bottom-0 duration-500 text-center w-full">
                <h1 className="uppercase text-xl sm:text-2xl font-bold tracking-tight lg:text-3xl bg-gray-700/70 text-gray-50">
                  {item.title}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Attar
