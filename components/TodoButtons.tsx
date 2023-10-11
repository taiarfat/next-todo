'use client'

const TodoButtons = ({ id, isCompleted }) => {
	const handleDone = async () => {
		await fetch(`/api/todos/${id}`, {
			method: 'PATCH',
			body: JSON.stringify({
				id
			})
		})
	}
	const handleDelete = async () => {
		await fetch(`/api/todos/${id}`, {
			method: 'DELETE',
			body: JSON.stringify({
				id
			})
		})
	}
	return (
		<div className='flex'>
			{!isCompleted && <button
				className='py-1 px-2 rounded-md bg-green-700 text-white opacity-0 group-hover:opacity-100 hover:bg-green-500'
				onClick={handleDone}
			>
				Done
			</button>}
			<button
				className='py-1 px-2 rounded-md bg-red-700 text-white opacity-0 ml-4 group-hover:opacity-100 hover:bg-red-500'
				onClick={handleDelete}
			>
				Delete
			</button>
		</div>
	)
}

export default TodoButtons
