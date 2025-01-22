import mongoose from "mongoose";
import Topic from "@/models/Topics";
import { NextResponse } from "next/server";
import connectMongoDb from "@/libs/mongodb";

export async function PUT(request, { params }) {
    const { id } = await params
    const { newTitle: title, newDesc: desc } = await request.json()
    await connectMongoDb()
    await Topic.findByIdAndUpdate(id, { title, desc })
    return NextResponse.json({ message: "Topic updated successfully" }, { status: 200 })
}

export async function GET(request, { params }) {
    const { id } = await params
    await connectMongoDb()
    const topic = await Topic.findOne({ _id: id })
    return NextResponse.json({ topic }, { status: 200 })
}