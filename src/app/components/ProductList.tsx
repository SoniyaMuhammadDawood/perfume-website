import Link from 'next/link'
import Image from 'next/image'
import { products } from '../data/products'

export default function ProductList() {
  return (
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="relative">
            <Image 
              src={product.image} 
              alt={product.alt} 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover"
            />
            {product.discount > 0 && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                {product.discount}% OFF
              </span>
            )}
          </div>
          <div className="p-4 flex-grow">
            <h3 className="font-bold text-lg mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold">
                ${(product.price * (1 - product.discount / 100)).toFixed(2)}
              </p>
              {product.discount > 0 && (
                <p className="text-sm text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </p>
              )}
            </div>
          </div>
          <button className="p-4">
            <Link href={`/products/${product.id}`} className="block w-full text-center
             bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded tracking-wider border-[3px] border-[#E8B86D]">
              View Details
            </Link>
          </button>  
        </div>
      ))}
    </div>
  )
}
