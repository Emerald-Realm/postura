import React from 'react';
import Case from '../../images/yoga-flower.jpg'


function Showcase() {
    return (
        <div className='showcase row'>
        {/* <div className='showcase'> */}
            {/* <img src='#' alt='nature' className='' /> */}
            <img src={Case} alt='nature' className='show-img img' />
            <p className='header-two green'>Posture is how you hold your body</p>
        </div>
    )
}

export default Showcase
