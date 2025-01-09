'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { products } from '@/app/data/products';

const toast = (message: string) => {
  alert(message);
};

export default function ProductDetails({ params }: { params: { id: string } }) {
  
  const product = products.find(p => p.id === parseInt(params.id))
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]))
    }
  }, [])

  if (!product) {
    return <div>Product not found</div>
  }

  const discountedPrice = product.price * (1 - product.discount / 100)

  const handleAddToCart = () => {
    if (!size || !color) {
      toast("Please select size and color");
      return
    }

    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItemIndex = cart.findIndex((item:any) => 
      item.id === product.id && item.size === size && item.color === color
    )

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += quantity
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: discountedPrice,
        size,
        color,
        quantity,
        image: product.image  
      })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    window.dispatchEvent(new Event('storage'))

    toast(`${quantity} ${product.name} added to your cart.`);
  }

  return (
    <div className="container mx-auto my-12 px-6 ">
      <h1 className="text-4xl font-bold mb-8">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <Image 
            src={product.image} 
            alt={product.alt} 
            width={600} 
            height={400} 
            className="w-[620px] h-[420px] object-cover rounded-lg "
          />
          {product.discount > 0 && (
            <span className="absolute top-4 right-4 bg-red-500 text-white text-lg px-3 py-1 rounded-full">
              {product.discount}% OFF
            </span>
          )}
        </div>
        <div>
          <p className="text-2xl font-bold mb-2">${discountedPrice.toFixed(2)}</p>
          {product.discount > 0 && (
            <p className="text-lg text-gray-500 line-through mb-4">
              ${product.price.toFixed(2)}
            </p>
          )}
          <p className="mb-4">{product.description}</p>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
            <select 
              value={size} 
              onChange={(e) => setSize(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select size</option>
              <option value="s">Small</option>
              <option value="s">X-Small</option>
              <option value="m">Medium</option>
              <option value="l">Large</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
            <select 
              value={color} 
              onChange={(e) => setColor(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Pink</option>
              <option value="green">Green</option>
              <option value="green">gold</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button 
            onClick={handleAddToCart} 
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded 
            border-[#E8B86D] border-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}