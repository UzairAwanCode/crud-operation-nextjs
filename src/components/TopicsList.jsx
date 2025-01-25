import React from 'react'
import RemoveBtn from './RemoveBtn'
import { HiPencilAlt } from 'react-icons/hi'
import Link from 'next/link'

const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', { cache: "no-store" })
        if (!res.ok) {
            throw new Error('Something went wront')
        }

        return res.json()
    } catch (error) {
        console.log("Error Loading Topics", error);
    }
}
export default async function TopicsList() {
    const { topics } = await getTopics()

    return (
        <>
            {topics.map((t, i) => (
                <div key={i} className={`p-4 border border-slate-300 my-3 flex justify-between items-start gap-5`}>
                    <div>
                        <h2 className='font-bold text-2xl'>{t.title}</h2>
                        <div>{t.desc}</div>
                    </div>

                    <div className='flex gap-2'>
                        <RemoveBtn id={t._id} />
                        <Link href={`/editTopic/${t._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}
