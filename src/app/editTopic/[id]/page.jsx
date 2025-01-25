import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTopicById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, { cache: 'no-store' })
        if (!res.ok) {
            throw new Error("Something Went Wrong in getTopicById function")
        }

        return res.json()
    } catch (error) {
        console.log(error);

    }
}
async function page({ params }) {
    const { id } = await params
    const { topic } = await getTopicById(id)
    console.log(topic);

    const { title, desc } = topic

    return (
        <EditTopicForm id={id} title={title} description={desc} />
    )
}

export default page
