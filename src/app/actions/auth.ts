"use server"

import { z } from "zod"

const signUpSchema = z.object({
  firstName: z.string().min(2, "Ism kamida 2 ta belgidan iborat bo'lishi kerak"),
  lastName: z.string().min(2, "Familiya kamida 2 ta belgidan iborat bo'lishi kerak"),
  email: z.string().email("Noto'g'ri email format"),
  password: z.string().min(8, "Parol kamida 8 ta belgidan iborat bo'lishi kerak"),
  phoneNumber: z.string().min(9, "Telefon raqami kamida 9 ta raqamdan iborat bo'lishi kerak"),
})

export async function signUp(formData: FormData) {
  const validatedFields = signUpSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
    phoneNumber: formData.get("phoneNumber"),
  })

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors }
  }

  // API ga so'rov yuborish
  try {
    const response = await fetch("http://45.92.173.46:5000/api/Users/CreateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedFields.data),
    })

    if (!response.ok) {
      throw new Error("Serverda xatolik yuz berdi")
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    return { error: "Ro'yxatdan o'tishda xatolik yuz berdi" }
  }
}
