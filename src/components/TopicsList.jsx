import React from 'react'
import RemoveBtn from './RemoveBtn'
import { HiPencilAlt } from 'react-icons/hi'
import Link from 'next/link'

function TopicsList() {
    return (
        <div className={`p-4 border border-slate-300 my-3 flex justify-between items-start gap-5`}>
            <div>
                <h2 className='font-bold text-2xl'>Topic Title</h2>
                <div>Topic Description</div>
            </div>

            <div className='flex gap-2'>
                <RemoveBtn />
                <Link href={'/editTopic/123'}>
                    <HiPencilAlt size={24} />
                </Link>
            </div>
        </div>
    )
}

export default TopicsList
