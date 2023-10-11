import Todo from "@/models/todo.model"
import { connectToDB } from "@/utils/database.util"
import { NextRequest, NextResponse } from "next/server";

export const GET =  async (request: NextRequest) => {
    await connectToDB()
    const todos = await Todo.find({})
    return NextResponse.json({data: todos}, {status: 200})
}

export const POST =  async (request: NextRequest) => {
    try {
        const {title, isCompleted=false} = await request.json()
        const newTodo = new Todo({title, isCompleted})
        await newTodo.save()
        console.log('todo saved ', newTodo)
        return NextResponse.json({msg: 'Todo created', data: newTodo}, {status: 201})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({msg: 'Error: ' + error.message})
    }
}