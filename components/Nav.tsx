import Link from 'next/link'
import React from 'react'

const Nav = () => {
	return (
		<nav className='flex justify-between w-full mb-16 py-3 px-10 border-b border-slate-700'>
			<Link href='/' className='flex p-2 flex-center'>
				<p className='logo_text'>Home</p>
			</Link>
			<div className='sm:flex hidden'>
				<div className='flex gap-3 md:gap-5'>
					<Link href='/create-todo' className='p-2'>
						Create TODO
					</Link>

					<Link href='/profile' className='p-2'>
						Profile
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Nav
