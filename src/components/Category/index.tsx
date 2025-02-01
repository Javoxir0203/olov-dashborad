import Image from 'next/image'
import Link from 'next/link'

// Bu ma'lumotlar odatda API yoki ma'lumotlar bazasidan olinadi
const categories = [
  {
    id: 1,
    name: "Elektronika",
    description: "Har qanday ehtiyoj uchun gadjetlar va qurilmalar",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 2,
    name: "Kiyim-kechak",
    description: "Barcha mavsumlar uchun zamonaviy kiyimlar",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 3,
    name: "Uy va bog'",
    description: "Yashash joyingiz uchun kerak bo'lgan hamma narsa",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 4,
    name: "Sport va ochiq havoda",
    description: "Keyingi sarguzashtingiz uchun jihozlaning",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 5,
    name: "Kitoblar",
    description: "O'qish orqali dunyolarni kashf eting",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 6,
    name: "Go'zallik va shaxsiy parvarish",
    description: "O'zingizni eng yaxshi ko'rinishda his qiling",
    image: "/placeholder.svg?height=300&width=400"
  }
]

export default function CategoryBoxes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-black mb-6">Mahsulot kategoriyalari</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-black">{category.name}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <Link
                href={`/categories/${category.id}`}
                className="text-blue-600 hover:underline"
              >
                Mahsulotlarni ko'rish
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
