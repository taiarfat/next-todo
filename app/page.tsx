import TodoList from '@/components/TodoList'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h2>My TODO App</h2>
      <TodoList />
    </main>
  )
}
