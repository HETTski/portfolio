import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0C2D57] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#FC6736]'>
                    About
                    </p>
                </div>
                <div>
                </div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Hubert, nice to meet you. Please take a look around.</p>
                    </div>
                    <div >
                        <p>I'm a second year cybersecurity student from Wroclaw University of Science and Technology. I also do full-stack web developing in free time. I'm intrerested in blockchain and web3 technologies. I'm very excited improve my developer skills!</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About