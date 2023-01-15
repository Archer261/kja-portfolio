import React from 'react'
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href='https://www.linkedin.com/in/kjarcher/'><IoLogoLinkedin /></a>
            </div>
            <div>
                <a href='https://github.com/Archer261'><IoLogoGithub /></a>
            </div>
        </div>
    )
}

export default SocialMedia