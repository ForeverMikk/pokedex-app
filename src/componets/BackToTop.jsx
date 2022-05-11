import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import './BackToTop.css';

const BackToTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        })
    }

    return(
        <>
            <button className='scroll-top' onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} size="2x" />
            </button>
        </>
    )
}

export default BackToTop;