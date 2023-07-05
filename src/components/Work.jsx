import React from 'react'
import workImg from '../assets/workimg.jpg'
const Work = () => {
    return (
        <>
            <div name="work" className='w-full md:h-screen bg-[rgba(1,1,1,1)] text-gray-300'>
                <div className='max-w-[950px] p-4 flex flex-col mx-auto w-full h-full justify-center' >
                    <div className='pb-8'>
                        <p className='text-4xl font-bold  border-b-4 inline border-pink-600'>Work</p>
                        <p className='py-6'>// Check out my recent works</p>
                    </div>

                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                        <div  style={{ backgroundImage: `url(${workImg})` }}
                         className='shadow-lg shadow-[rgba(1,1,1,1)] group container rounded-md flex justify-center items-center mx-auto content-div'>
                            {/*Hover Effects */}

                            <div className='opacity-0  group-hover:opacity-100 '>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    React JS Application
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Source Code</button>
                                    </a>
                                    <a href='/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default Work