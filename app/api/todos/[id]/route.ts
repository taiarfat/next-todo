import Todo from '@/models/todo.model'
import { connectToDB } from '@/utils/database.util'
import { NextRequest, NextResponse } from 'next/server'

export const PATCH = async (request: NextRequest, { params }) => {
	try {
		await connectToDB()
		const updatedTodo = await Todo.findOneAndUpdate(
			{ _id: params.id },
			{
				isCompleted: true
			}
		)
		return NextResponse.json({ data: updatedTodo }, { status: 200 })
	} catch (error) {
		console.log(error)
	}
}

export const DELETE = async (request: NextRequest, { params }) => {
	try {
		await connectToDB()
		const deletedTodo = await Todo.findOneAndDelete({ _id: params.id })
		return NextResponse.json({ data: deletedTodo }, { status: 200 })
	} catch (error) {
		console.log(error)
	}
}
