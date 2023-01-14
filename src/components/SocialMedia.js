import React from 'react'
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <IoLogoLinkedin />
            </div>
            <div>
                <IoLogoGithub />
            </div>
        </div>
    )
}

export default SocialMedia