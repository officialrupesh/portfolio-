import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useTypewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'

const Home = () => {
    const [text] = useTypewriter({
        words: ["Frontend Developer", "Tech Enthusiast", "Software Engineer"],
        loop: {},
    })
    return (
        <>
            <div name="home" className='bg-[rgba(10,25,47,1)] w-full h-screen'>

                {/* Container part */}
                <div className="max-w-[950px] mx-auto px-8 flex flex-col justify-center h-full text-white">
                    <p className='text-pink-600'>Hi, My name is </p>
                    <h1 className='text-4xl sm:text-7xl font-bold text-white'>Rupesh Raut</h1>
                    <h2 className='text-4xl sm:text-6xl font-bold text-gray-500'>I'm a
                    <span className="ml-4 text-4xl sm:text-7xl font-bold text-[#8892b0]">
                        {text}
                    </span>
                    </h2>   
                    <p className=' text-gray-500 py-4 max-w-[700px]'>I am currently working as an Associate Software Engineer at Amnil Technologies since January 2023.
                    </p>
                    <div>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        <Link to="work" smooth={true} duration={500}>View Work</Link>
                            <span className='group-hover:rotate-90 duration-[1000ms] items-center'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home