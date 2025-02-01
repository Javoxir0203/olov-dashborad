"use client"

import { useState } from "react"
import Image from "next/image"
import { useParams } from "next/navigation"

// Bu funksiya odatda API dan ma'lumotlarni oladi
const getProductById = (id: string) => {
  // Bu yerda statik ma'lumotlar ishlatilmoqda, haqiqiy loyihada bu API chaqiruvi bo'ladi
  const products = [
    {
      id: "1",
      name: "Smartfon X",
      price: 799,
      description:
        "Eng so'nggi texnologiyalar bilan jihozlangan smartfon. 5G qo'llab-quvvatlash, yuqori sifatli kamera va kuchli protsessor bilan ta'minlangan.",
      features: [
        "5G qo'llab-quvvatlash",
        "Uch linzali kamera tizimi",
        "Suv va changdan himoyalangan",
        "Tezkor zaryadlash",
      ],
      image: "/placeholder.svg?height=400&width=400",
      stock: 10,
    },
    // Boshqa mahsulotlar...
  ]
  return products.find((p) => p.id === id)
}

export default function ProductBoxes() {
  const params = useParams()
  const productId = params.id as string
  const product = getProductById(productId)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Mahsulot topilmadi</div>
  }

  const handleAddToCart = () => {
    // Bu yerda savatchaga qo'shish logikasi bo'ladi
    console.log(`${quantity} ta ${product.name} savatchaga qo'shildi`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-indigo-600 mb-4">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Xususiyatlar:</h2>
            <ul className="list-disc list-inside">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              Miqdor:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, Number.parseInt(e.target.value))))}
              className="w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <p className="text-sm text-gray-600 mb-4">Omborda: {product.stock} ta</p>
          <button
            onClick={handleAddToCart}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Savatchaga qo'shish
          </button>
        </div>
      </div>
    </div>
  )
}
