import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
import { useRef } from 'react';


const Nav = () => {
    const barList = useRef(null);
    const toggleBar = () => {
        barList.current.classList.toggle('hidden');
    }
  return (
    <header className='py-8 absolute z-10 w-full'>
        <nav className='padding-x flex justify-between items-center max-container'>
            <a href="/">
                <img 
                    src={headerLogo} 
                    alt="Logo"
                />
            </a>
            <ul className='flex-1 flex justify-center itmes-center gap-14 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal text-slate-gray hover:text-coral-red'>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div>
                <img src={hamburger} alt="bar icon" width={25} height={25} onClick={toggleBar} className='block lg:hidden cursor-pointer'/>
            </div>
        </nav>
        <ul ref={barList} className='bg-white my-2 shadow-md hidden lg:hidden'>
            {navLinks.map((item) => (
                <li key={item.label} className='hover:bg-slate-100 transition w-full text-center hover:text-coral-red'>
                    <a href={item.href} className='block p-5 font-montserrat leading-normal text-slate-gray hover:text-inherit'>{item.label}</a>
                </li>
            ))}
        </ul>
    </header>
  )
}

export default Nav