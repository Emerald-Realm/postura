import React from 'react'
import Sleep from '../../images/sleeping.jpg'

function Sleeping() {
    return (
        <div className='sleeping'>
            <div className='context'>

            <p className='header-two'>Sleeping</p>
            <p className='subHeader-two'>Sleep right for better rest and health</p>
            </div>
            {/* <img src={Sleep} alt='sleeping' className='img cover'/> */}
            <img src={Sleep} alt='sleeping' className='sleep-img img'/>
        </div>
    )
}

export default Sleeping
