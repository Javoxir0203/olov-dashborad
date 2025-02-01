"use client"

import { useState } from "react"
import Link from "next/link"

// Mahsulotlar ma'lumotlari
const products = [
  { id: 1, name: "Smartfon X", price: 799, category: "Elektronika", image: "/images/electronics.svg" },
  { id: 2, name: "Noutbuk Pro", price: 1299, category: "Maishiy texnika", image: "/images/home-appliances.svg" },
  { id: 3, name: "Sport krossovkasi", price: 89, category: "Kiyim kechak", image: "/images/clothing.svg" },
  { id: 4, name: "Qishki kurtka", price: 129, category: "Oyoq kiyimlar", image: "/images/shoes.svg" },
  { id: 5, name: "Aqlli soat", price: 199, category: "Aksessuarlar", image: "/images/accessories.svg" },
  { id: 6, name: "Kosmetika", price: 39, category: "Kosmetika", image: "/images/cosmetics.svg" },
  { id: 7, name: "Medtexnikalar", price: 39, category: "Medtexnikalar", image: "/images/medical.svg" },
  { id: 8, name: "Health", price: 39, category: "Health", image: "/images/health.svg" },
  { id: 9, name: "Zoomagazin", price: 39, category: "Zoomagazin", image: "/images/pets.svg" },
  { id: 10, name: "Konstovarlar", price: 39, category: "Konstovarlar", image: "/images/stationery.svg" },
  { id: 11, name: "Kitoblar", price: 39, category: "Kitoblar", image: "/images/books.svg" },
  { id: 12, name: "Avto tovarlar", price: 199, category: "Avto tovarlar", image: "/images/car-products.svg" },
  { id: 13, name: "Bitavoy Ximiya", price: 49, category: "Bitavoy Ximiya", image: "/images/chemicals.svg" },
  { id: 14, name: "Oziq ovqat", price: 19, category: "Oziq ovqat", image: "/images/food.svg" },
  { id: 15, name: "FastFood", price: 10, category: "FastFood", image: "/images/fastfood.svg" },
  { id: 16, name: "Sport magazinlari", price: 59, category: "Sport magazinlari", image: "/images/sports-store.svg" },
  { id: 17, name: "Qurilish materiallari", price: 299, category: "Qurilish materiallari", image: "/images/construction-materials.svg" },
  { id: 18, name: "Nogironligi bor insonlar uchun maxsus mahsulotlar", price: 39, category: "Nogironligi bor insonlar uchun maxsus mahsulotlar", image: "/images/special-products.svg" },
  { id: 19, name: "Uy ro'zg'or buyumlari", price: 89, category: "Uy ro'zg'or buyumlari", image: "/images/home-goods.svg" },
  { id: 20, name: "Xobbi va ijod", price: 29, category: "Xobbi va ijod", image: "/images/hobbies.svg" },
  { id: 21, name: "Tur Paketlar", price: 499, category: "Tur Paketlar", image: "/images/travel-packages.svg" },
  { id: 22, name: "Bolalar kiyimlari", price: 59, category: "Bolalar kiyimlari", image: "/images/children-clothing.svg" },
  { id: 23, name: "O'yinchoqlar", price: 39, category: "O'yinchoqlar", image: "/images/toys.svg" },
  { id: 24, name: "Avtomobillar", price: 20000, category: "Avtomobillar", image: "/images/cars.svg" },
  { id: 25, name: "Ko'chmas mulklar", price: 100000, category: "Ko'chmas mulklar", image: "/images/real-estate.svg" },
]

// Kategoriya ro'yxati
const categories = [
  "Barchasi",
  ...new Set(products.map((product) => product.category)),
]

export default function ShopBoxes() {
  const [selectedCategory, setSelectedCategory] = useState("Barchasi")
  const [sortBy, setSortBy] = useState("name")

  const filteredProducts = products
    .filter((product) => selectedCategory === "Barchasi" || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "price") return a.price - b.price
      return 0
    })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-black mb-6">Bizning do'kon</h1>

      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Kategoriya bo'yicha filtrlash:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
            Saralash:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="name">Nom bo'yicha</option>
            <option value="price">Narx bo'yicha</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-black">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <p className="text-indigo-600 font-bold">${product.price}</p>
              <Link
                href={`/shop/${product.id}`}
                className="mt-2 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
              >
                Batafsil
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
