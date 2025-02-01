'use client'

import React, { useState } from 'react'

interface Product {
	firstName: string
	lastName: string
	email: string
	password: string
	phoneNumber: string
}

const SignupWithPassword = () => {
	const [firstName, setFirstName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [phoneNumber, setPhoneNumber] = useState<string>('')
	const [, setProducts] = useState<Product[]>([])

	const createUser = async () => {
		try {
			const response = await fetch('http://45.92.173.46:5000/api/Users/CreateUser', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ firstName, lastName, email, password, phoneNumber }),
			})

			if (!response.ok) {
				throw new Error('Failed to create user')
			}

			setFirstName('')
			setLastName('')
			setEmail('')
			setPassword('')
			setPhoneNumber('')
			setProducts([]) // Clear products after creation
		} catch (error) {
			console.error('Error creating user:', error)
		}
	}

	return (
		<div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 mb-10'>
			<h1 className='text-3xl font-semibold text-center text-gray-800 mb-8'>Biz bilan bog`lanishingiz uchun</h1>

			<div className='space-y-4'>
				<input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} placeholder='First Name' className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none' />
				<input type='text' value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Last Name' className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none' />
				<input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none' />
				<input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none' />
				<input type='tel' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder='Phone Number' className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none' />

				<button onClick={createUser} className='w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition'>
					Sign Up
				</button>
			</div>
		</div>
	)
}

export default SignupWithPassword
