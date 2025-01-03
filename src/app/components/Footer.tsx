import React from "react"
import Image from "next/image"

export default function Footer() {
    return (
      <footer className="flex flex-col space-y-10 justify-center py-12 bg-[#E8B86D] w-full">
  <nav className="flex justify-center flex-wrap gap-8 font-semibold tracking-wider">
    <a className="hover:underline hover:underline-offset-4" href="#">
      Home
    </a>
    <a className="hover:underline hover:underline-offset-4" href="#">
      About
    </a>
    <a className="hover:underline hover:underline-offset-4" href="/products">
      Products
    </a>
    <a className="hover:underline hover:underline-offset-4" href="/services">
      Services
    </a>
    
    <a className="hover:underline hover:underline-offset-4" href="/contact">
      Contact
    </a>
  </nav>
  <div className="flex justify-center space-x-5">
    <a href="#" target="_blank" rel="noopener noreferrer">
    <Image
       src="/images/icon/facebook.png" 
       alt="instagram image"
       height={30}
       width={30}
       />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
    <Image
       src="/images/icon/linkdin.png" 
       alt="instagram image"
       height={30}
       width={30}
       />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
    <Image
       src="/images/icon/instagram.png" 
       alt="instagram image"
       height={30}
       width={30}
       />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <Image
       src="/images/icon/messenger.png" 
       alt="messenger image"
       height={30}
       width={30}
       />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <Image
       src="/images/icon/twitter.png" 
       alt="twitter image"
       height={30}
       width={30}
       />
    </a>
  </div>
  <p className="text-center font-semibold tracking-wider">
    © 2022 Company Ltd. All rights reservered.
  </p>
</footer>

    )
  }
  