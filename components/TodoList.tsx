import TodoItem from './TodoItem'

const TodoList = async () => {
	let todos = []
	try {
		const response = await fetch(`${process.env.HOST}/api/todos`, {
			cache: 'no-store'
		})
		const { data } = await response.json()
		console.log(data)
		todos = data
	} catch (error) {
		console.log(error)
	}

	return (
		<div className='min-w-full'>
			{todos.map(todo => (
				<TodoItem
					title={todo.title}
					key={todo._id}
					isCompleted={todo.isCompleted}
					id={todo._id}
				/>
			))}
		</div>
	)
}

export default TodoList
