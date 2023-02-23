import React from 'react'
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
function Fotter() {
    return (
        <div className='flex flex-col justify-center items-center text-2xl space-y-8 h-32 bg-blue-600'>
            <div className='mt-2'>
                If you ❤️ this project ⭐ <a href="https://github.com/Anureng" target={"_blank"} rel="noreferrer">my repo</a>
            </div>
            <div className='flex space-x-6'>
                <a href="https://www.linkedin.com/in/anurag-sidhu-4b518521b/" target={"_blank"} rel="noreferrer">
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/Anureng" target={"_blank"} rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://twitter.com/anurag_sidhu8" target={"_blank"} rel="noreferrer">
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}

export default Fotter