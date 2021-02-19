import React from 'react'
import Yoga from '../../images/yoga poses.jpg'

function Exercise() {
    return (
        <div className='exercise'>
            <img src={Yoga} className='yoga img' alt='yoga poses' />
            <p className='header-two'>Correcting Bad Posture</p>
            <p className='subHeader-two'>Yoga poses are recommended to correct bad posture.</p>
        </div>
    )
}

export default Exercise
