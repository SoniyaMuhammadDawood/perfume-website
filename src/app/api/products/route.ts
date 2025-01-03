import { NextResponse } from 'next/server'

const products = [
  { id: 1, name: "Product 1", price: 199.99, description: "This is product 1" },
  { id: 2, name: "Product 2", price: 29.99, description: "This is product 2" },
  { id: 3, name: "Product 3", price: 39.99, description: "This is product 3" },
  { id: 4, name: "Product 4", price: 49.99, description: "This is product 4" },
 
]

export async function GET() {
  return NextResponse.json(products)
}

