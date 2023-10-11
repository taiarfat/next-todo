import TodoButtons from './TodoButtons'

const TodoItem = ({ title, isCompleted, id }) => {
	return (
		<div
			className={`w-full min-w-full flex items-center justify-between space-x-4 space-y-2 group border rounded-lg my-2 px-2 py-2 `}
		>
			<p className={`font-semibold ${
				isCompleted ? 'line-through' : ''
			}`}>{title}</p>

			<TodoButtons id={id} isCompleted={isCompleted} />
		</div>
	)
}

export default TodoItem
