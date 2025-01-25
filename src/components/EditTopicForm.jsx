"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function EditTopicForm({ id, title, description }) {
    const [newTitle, setNewTitle] = useState(title)
    const [newDesc, setNewDesc] = useState(description)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ newTitle, newDesc })
            })

            if (!res.ok) {
                throw new Error('Something Went Wrong')
            }

            router.push('/')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className='w-full border border-slate-500 px-8 py-2' type='text' placeholder='Topic Title' />
            <input value={newDesc} onChange={(e) => setNewDesc(e.target.value)} className='w-full border border-slate-500 px-8 py-2' type='text' placeholder='Topic Description' />
            <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Update Topic</button>
        </form>
    )
}

export default EditTopicForm
