import React from 'react'
import { NavigationDots, SocialMedia } from '../components'
import moment from 'moment'

const currentYear = moment().year();

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />
            <div className='app__wrapper app__flex'>
                <Component />

                <div className='copyright'>
                    <p className='p_text'>
                        @{currentYear} Joseph Archer
                    </p>
                    <p className='p_text'>
                        All rights reserved
                    </p>
                </div>
            </div>
            <NavigationDots active={idName} />
        </div>
    )
}

export default AppWrap