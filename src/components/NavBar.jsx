import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import logo from '../assets/logo.png'
import { Link } from "react-scroll"

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav);
    return (
        <>
            <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[rgba(10,25,47,0.9)] text-green-100 '>
                <div>
                    <img src={logo} alt="Logo Image" className='w-52 ' />
                </div>
                <div className='hidden sm:flex'>
                    <ul className='flex'>
                        <li>
                            <Link to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} duration={500}>Skills</Link>
                        </li>
                        <li>
                            <Link to="work" smooth={true} duration={500}>Work</Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Hamburger */}
                <div onClick={handleClick} className='sm:hidden z-10 hover:cursor-pointer'>
                    {!nav ? <FaBars className='delay-100' /> : <FaTimes className='delay-100 ' />}
                </div>
                {/* Mobile menu */}

                <ul className={!nav ? "hidden" : "absolute mt-[80px] top-0 left-0 w-full h-screen bg-[rgba(10,25,47,1)] flex flex-col justify-center text-center "}>
                    <li className='py-6 text-4xl hover:bg-[rgba(3,3,3,0.8)]'>
                        <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className='py-6 text-4xl hover:bg-[rgba(3,3,3,0.8)]'>
                        <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li className='py-6 text-4xl hover:bg-[rgba(3,3,3,0.8)]'>
                        <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
                    </li>
                    <li className='py-6 text-4xl hover:bg-[rgba(3,3,3,0.8)]'>
                        <Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link>
                    </li>
                    <li className='py-6 text-4xl hover:bg-[rgba(3,3,3,0.8)]'>
                        <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>

                {/* Social Media icon */}
                <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                    <ul>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                            <a className='flex justify-between items-center w-full text-gray-300 '
                                href="https://www.linkedin.com/in/therupeshraut/" target="_blank">
                                Linkedin<FaLinkedin size={30} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                            <a className='flex justify-between items-center w-full text-gray-300 '
                                href="https://github.com/officialrupesh" target="_blank">
                                Github<FaGithub size={30} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500'>
                            <a className='flex justify-between items-center w-full text-gray-300 '
                                href="#">
                                Email<HiOutlineMail size={30} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
                            <a className='flex justify-between items-center w-full text-gray-300 '
                                href="#">
                                Resume<BsFillPersonLinesFill size={30} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default NavBar