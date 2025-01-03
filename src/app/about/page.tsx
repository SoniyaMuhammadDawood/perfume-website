import React from 'react'
import Image from 'next/image'


const page = () => {
  return (

    <div>

      {/* <div
  className="hero min-h-[87vh] w-[198vh] mx-auto bg-no-repeat bg-center bg-fixed  "
  style={{
    backgroundImage: "url(/images/about.png)"}}>
  <div className="flex justify-center items-center bg-opacity-10">
  <div className="text-neutral-content text-center">
    <div className="max-w-md bg-[#cc726a89] rounded-xl ">
      <h1 className="mb-5 text-5xl font-bold">About Us</h1>
      <p className="mb-5 p-6 text-xl font-semibold">
      At Local Face, we believe that perfumes are more than just scents; they are expressions of one's individuality and style. Our passion for exquisite fragrances led us to curate a collection that captures the essence of diverse personalities, bringing you an unparalleled olfactory experience.
      </p>
    </div>
  </div>
  </div>
</div> */}

<div
  className="hero min-h-[87vh] w-full mx-auto bg-no-repeat bg-center bg-fixed"
  style={{
    backgroundImage: "url(/images/about.png)"
  }}
>
  <div className="flex justify-center items-center h-full bg-opacity-10">
    <div className="text-neutral-content text-center">
      <div className="max-w-md bg-[#cc726a89] rounded-xl p-6 mx-auto">
        <h1 className="mb-5 text-4xl sm:text-5xl font-bold">About Us</h1>
        <p className="mb-5 text-lg sm:text-xl font-semibold">
          At Local Face, we believe that perfumes are more than just scents; they are expressions of ones individuality and style. Our passion for exquisite fragrances led us to curate a collection that captures the essence of diverse personalities, bringing you an unparalleled olfactory experience.
        </p>
      </div>
    </div>
  </div>
</div>



{/* text content */}

  <section className="container px-5 py-20 mx-auto">
  <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-16'>What make us Unique</h1>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image
            alt="testimonial"
            className="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-orange-400 bg-gray-100"
            src="/images/about1.png"
            height={300}
            width={300}
          />
          <p className="leading-relaxed font-semibold">
            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
            taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman
            taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
            fanny pack vaporware.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-semibold title-font tracking-wider text-sm">
            SONIYA DAWOOD
          </h2>
          <p className="text-gray-500 font-semibold tracking-wider">Senior Product Designer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image
            alt="testimonial"
            className="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-400 bg-gray-100"
            src="/images/about2.png"
            height={300}
            width={300}
          />
          <p className="leading-relaxed font-semibold">
            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
            taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman
            taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
            fanny pack vaporware.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-semibold title-font tracking-wider text-sm">
            SONIYA
          </h2>
          <p className="text-gray-500 font-semibold tracking-wider">UI Develeoper</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <Image
            alt="testimonial"
            className="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-pink-400 bg-gray-100"
            src="/images/about3.png"
            height={300}
            width={300}
          />
          <p className="leading-relaxed font-semibold">
            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
            taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman
            taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
            fanny pack vaporware.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-[#E8B86D] mt-6 mb-4" />
          <h2 className="text-gray-900 font-semibold title-font tracking-wider text-sm">
            SONIYA
          </h2>
          <p className="text-gray-500 font-semibold tracking-wider">CTO</p>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default page 