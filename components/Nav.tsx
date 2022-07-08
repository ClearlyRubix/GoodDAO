import React from 'react'
import Connect from './Connect'
import NavButton from './NavButton'

const Nav = () => {
	return (
		<>

			<nav className='h-24 w-screen p-3 bg-gradient-to-br from-sky-600 to-violet-900 text-white font-bold flex items-center justify-center fixed'>

				<ul>
					<NavButton link={'/'} text={'Home'}/>
					<NavButton link={'/stake'} text={'Stake'}/>
					<NavButton link={'/proposals'} text={'Proposals'}/>
					<NavButton link={'/faqs'} text={'FAQs'}/>
					<Connect/>
				</ul>
			</nav>
			<div className="hover:cursor-pointer fixed h-24 w-24 bg-[url('../public/logo.jpg')] bg-contain bg-no-repeat"></div>

		</>
	)
}

export default Nav