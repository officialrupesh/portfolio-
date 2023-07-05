import React from 'react'

const Contact = () => {
  return (
    <>
        <div name="contact" className='bg-[rgba(1,1,1,1)]  w-full h-screen  flex  justify-center items-center p-4 '>
            <form method='POST' action='https://getform.io/f/043b34a0-3f7a-4b44-9956-67b5cdc9fef6'  className='flex flex-col max-w-[600px] p-4 w-full'>
                <div className='pb-8 '>
                    <p className='text-gray-300 text-4xl font-bold border-b-4 border-pink-600 inline'>Contact</p>
                    <p className='text-gray-300 py-4'>// Contact me through following form.</p>
                </div>
                <input className='bg-white p-2 type="text' placeholder='Name' name="name" />
                <input className='my-4 p-2 bg-white ' type="email" placeholder="Email" name="email"/>
                <input className='mb-4 p-3 bg-white ' type="text" placeholder="Subject" name="Subject"/>
                <textarea rows="10" className='bg-white p-2' name="message" placeholder='Message'></textarea>
                <button type='submit' className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-lg submission'>Submit</button>

            </form>
        </div>
    
    
    </>
  )
}

export default Contact