import { redirect } from 'next/navigation'

const CreateTodo = () => {

    const handleSubmit = async (formData) => {
        'use server'

        try {
            const res = await fetch(`${process.env.HOST}/api/todos`, {
                method: 'POST', 
                body: JSON.stringify({
                    title: formData.get('title')
                })
            })
            const data = await res.json()
            console.log(data)    
        } catch (error) {
            console.log(error)
        } finally {
            redirect('/')
        }
        
    }
	return (
		<section className='flex min-h-screen flex-col items-center justify-start p-24'>
			<h1 className=''>Create Todo</h1>

			<form className='mt-10 w-full max-w-2xl flex items-center justify-center' action={handleSubmit}>
				<input
					type='text'
					placeholder='Write your TODO here'
					required
                    name="title"
					className='p-2 text-black rounded-lg'
				/>
				<div className='flex-end ml-5 gap-4'>

					<button
						type='submit'
						className='px-5 py-1.5 text-sm bg-green-900 mx-1 rounded-full text-white hover:bg-green-700'
					>
						Submit
					</button>
					
				</div>
			</form>
		</section>
	)
}

export default CreateTodo
