'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart } from 'lucide-react'


export default function Header() {
  const [cartCount, setCartCount] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      setCartCount(cart.reduce((total:number, item:any) => total + item.quantity, 0))
    }
    
    updateCartCount()
    window.addEventListener('storage', updateCartCount)
    
    return () => window.removeEventListener('storage', updateCartCount)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-[#E8B86D]  p-4 ">
      <nav className="container mx-auto flex justify-between items-center">

        <Link href="/" className="text-3xl font-bold font-serif italic">Fragrance Haven</Link>
        
        
        {/* Hamburger menu for sm and md screens */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>

        {/* Regular menu for lg screens */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-gray-700 hover:underline hover:underline-offset-4">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-700 hover:underline hover:underline-offset-4">About</Link></li>
          <li><Link href="/contact" className="hover:text-gray-700 hover:underline hover:underline-offset-4">Contact</Link></li>
          <li><Link href="/products" className="hover:text-gray-700 hover:underline hover:underline-offset-4">Products</Link></li>
          <li><Link href="/services" className="hover:text-gray-700 hover:underline hover:underline-offset-4">Services</Link></li>
          <li>
            <Link href="/cart" className="hover:text-gray-700 flex items-center">
              <ShoppingCart size={20} className="mr-2" />
              Cart ({cartCount})
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 ">
          <ul className="flex flex-col space-y-2">
            <li><Link href="/" className="block hover:text-gray-300" onClick={toggleMobileMenu}>Home</Link></li>
            <li><Link href="/about" className="block hover:text-gray-300" onClick={toggleMobileMenu}>About</Link></li>
            <li><Link href="/contact" className="block hover:text-gray-300" onClick={toggleMobileMenu}>Contact</Link></li>
            <li><Link href="/products" className="block hover:text-gray-300" onClick={toggleMobileMenu}>Products</Link></li>
            <li>
              <Link href="/cart" className=" hover:text-gray-300 flex items-center" onClick={toggleMobileMenu}>
                <ShoppingCart size={20} className="mr-1" />
                Cart ({cartCount})
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

