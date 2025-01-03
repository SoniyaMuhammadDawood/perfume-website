'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CartItem {
  id: number
  name: string
  price: number
  size: string
  color: string
  quantity: number
  image: string
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(cart)
  }, [])

  const removeFromCart = (index: number) => {
    const newCart = [...cartItems]
    newCart.splice(index, 1)
    setCartItems(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
    window.dispatchEvent(new Event('storage'))
  }

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity > 0) {
      const newCart = [...cartItems]
      newCart[index].quantity = newQuantity
      setCartItems(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
      window.dispatchEvent(new Event('storage'))
    }
  }

  const handleCheckout = () => {
    // Here you would typically integrate with a payment gateway
    // For now, we'll just show an alert
    alert('Checkout process initiated. This would typically redirect to a payment gateway.');
    
    // Clear the cart after successful checkout
    setCartItems([]);
    localStorage.setItem('cart', JSON.stringify([]));
    window.dispatchEvent(new Event('storage'));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto my-12 h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-xl mb-4">Your cart is currently empty.</p>
          <Link href="/products" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center border-b py-4">
              <div className="flex-shrink-0 w-24 h-24 mr-4">
                <Image 
                  src={item.image || '/placeholder.svg'} 
                  alt={item.name} 
                  width={96} 
                  height={96} 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>Size: {item.size}, Color: {item.color}</p>
                <div className="flex items-center mt-2">
                  <button 
                    onClick={() => updateQuantity(index, item.quantity - 1)}
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">Quantity: {item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(index, item.quantity + 1)}
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl">${(item.price * item.quantity).toFixed(2)}</p>
                <button 
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-700 mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>
            <button 
              onClick={handleCheckout}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

