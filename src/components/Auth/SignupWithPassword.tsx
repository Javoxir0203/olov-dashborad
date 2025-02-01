'use client'

import React, { useState } from 'react'

interface User {
  firstName: string
  lastName: string
  email: string
  password: string
  phoneNumber: string
}

const SignupWithPassword = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState<string | null>(null)

  const createAccount = async () => {
    setError(null)

    // Check if the required fields are provided
    if (!firstName || !lastName || !email || !password || !phoneNumber) {
      return
    }

    try {
      // Prepare data to send to the backend
      const data = { firstName, lastName, email, password, phoneNumber }

      const response = await fetch('http://45.92.173.46:5000/api/Users/CreateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        return
      }

      const responseData = await response.json()
      console.log('User created:', responseData)

      // Reset the form fields after successful creation
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      setPhoneNumber('')
    } catch (error) {
      console.error('Error creating account:', error)
      setError('Failed to create account. Please try again.')
    }
  }

  return (
    <div className='max-w-4xl mx-auto p-6 rounded-lg mt-10 mb-10'>
      <h1 className='text-3xl font-semibold text-center text-gray-800 mb-8'>Ro‘yxatdan o‘tish</h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className='space-y-4'>
        <label>First Name
          <input
            type='text'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none'
          />
        </label>

        <label>Last Name
          <input
            type='text'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none'
          />
        </label>

        <label>Email
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none'
          />
        </label>

        <label>Password
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none'
          />
        </label>

        <label>Phone Number
          <input
            type='tel'
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none'
          />
        </label>

        <button
          onClick={createAccount}
          className='w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition'
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default SignupWithPassword
