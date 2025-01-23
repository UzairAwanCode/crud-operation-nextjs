"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function AddTopic() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title || !desc) {
            alert('Please add both title and description')
            return
        }
        try {
            const res = await fetch('http://localhost:3000/api/topics', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ title, desc })
            })

            if (res.ok) {
                router.push('/')
            }
            else {
                throw new Error('Something went wrong')
            }
        } catch (error) {

        }
    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input onChange={(e) => setTitle(e.target.value)} value={title} className='w-full border border-slate-500 px-8 py-2' type='text' placeholder='Topic Title' />
            <input onChange={(e) => setDesc(e.target.value)} value={desc} className='w-full border border-slate-500 px-8 py-2' type='text' placeholder='Topic Description' />
            <button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Add Topic</button>
        </form>
    )
}

export default AddTopic
