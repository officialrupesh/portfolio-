import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Jquery from '../assets/jquery.jpg';
import Sass from '../assets/sass.png';
import StyledComponents from '../assets/StyledComponents.png'


const Skills = () => {
    return (
        <>
            <div name="skills" className='bg-[rgba(10,25,47,1)] w-full h-[94vh]  text-gray-300   '>
                {/* container */}
                <div className='max-w-[950px] p-4 flex flex-col mx-auto w-full h-full justify-center'>
                    <div>
                        <p className='text-4xl  font-bold border-b-4 border-pink-600 inline '>Skills</p>
                        <p className='mt-2'>These are the technologies I've worked with</p>
                    </div>
                    {/* Technologies used Icons  */}
                    <div className='w-full grid grid-cols-2 text-center py-8 sm:grid-cols-3 gap-4'>
                        <div className='shadow-md shadow-[rgba(0,0,0,1)] hover:scale-[1.1] duration-500'>
                            <div className='min-h-[100px]'>
                                <img src={HTML} className="w-16 mx-auto" alt="HTML icon" />
                            </div>
                            <p className='py-4'>HTML</p>
                        </div>
                        <div className='shadow-md shadow-[rgba(0,0,0,1)] hover:scale-[1.2] duration-500'>
                            <div className='min-h-[100px]'>
                                <img src={CSS} className="w-20 mx-auto" alt="CSS icon" />
                            </div>
                            <p className='py-4'>CSS</p>
                        </div>
                        <div className='shadow-md shadow-[rgba(0,0,0,1)] hover:scale-[1.2] duration-500'>
                            <div className='min-h-[100px]'>
                                <img src={JavaScript} className="w-20 mx-auto" alt="JavaScript icon" />
                            </div>
                            <p className='py-4'>JavaScript</p>
                        </div>
                        <div className='shadow-md shadow-[rgba(0,0,0,1)] hover:scale-[1.2] duration-500'>
                        <div className='min-h-[100px]'>
                            <img src={ReactImg} className="w-20 mx-auto" alt="React icon" />
                        </div>
                            <p className='py-4'>React JS</p>
                        </div>
                        <div className='shadow-md shadow-[rgba(0,0,0,1)] hover:scale-[1.2] duration-500'>
                        <div className='min-h-[100px]'>
                            <img src={Github} className="w-20 mx-auto" alt="Github Icon" />
                        </div>
                            <p className='py-4'>Github</p>
                        </div>
                        <div className='shadow-md shadow-[rgba(0,0,0,1)] hover:scale-[1.2] duration-500'>
                            <div className='min-h-[100px]'>
                                <img src={Tailwind} className="w-20 mx-auto" alt="Tailwind icon" />
                            </div>
                            <p className='py-4'>Tailwind</p>
                        </div>
                        <div className='shadow-md shadow-[rgba(0,0,0,1)] hover:scale-[1.2] duration-500'>
                            <div  className='min-h-[100px]'>
                                <img src={Sass} className="w-20 mx-auto" alt="Sass icon" />
                            </div>
                            <p className='py-4'>Sass</p>
                        </div>
                        <div className='shadow-md shadow-[rgba(0,0,0,1)] hover:scale-[1.2] duration-500'>
                            <div className='min-h-[100px]'>
                                <img src={Jquery} className="w-20 mx-auto" alt="Jquery icon" />
                            </div>
                            <p className='py-4'>jQuery</p>
                        </div>
                        <div className='shadow-md shadow-[rgba(0,0,0,1)] hover:scale-[1.2] duration-500'>
                            <div className='min-h-[100px]'>
                                <img src={StyledComponents} className="w-20 mx-auto " alt="Jquery icon" />
                            </div>
                            <p className='py-4'>Styled Components</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills