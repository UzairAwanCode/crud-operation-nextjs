import mongoose from "mongoose";
import Topic from "@/models/Topics";
import connectMongoDb from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, desc } = await request.json()
    await connectMongoDb()
    await Topic.create({ title, desc })
    return NextResponse.json({ message: "Topic created successfully" }, { status: 201 })
}

export async function GET() {
    await connectMongoDb()
    const topics = await Topic.find()
    return NextResponse.json({ topics }, { status: 200 })
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDb()
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({ message: "Topic deleted successfully" }, { status: 200 })
}