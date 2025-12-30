import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center px-4">
            <h1 className="font-bold text-5xl tracking-tight">Thinakaran Manokaran</h1>
            <nav className="flex space-x-6 text-black pr-4">
                <a href="https://thinakaran.dev/Resume.pdf" target="_blank" rel="noopener noreferrer" className='text-xl hover:underline flex items-center '>Portfolio 2.0 <GoArrowUpRight className='text-2xl text-dark/60' /></a>
                <a href="https://thinakaran.dev/Resume.pdf" target="_blank" rel="noopener noreferrer" className='text-xl hover:underline flex items-center '>Resume <GoArrowUpRight className='text-2xl text-dark/60' /></a>
            </nav>
        </header>
    )
}

export default Header;
