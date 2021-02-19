import React from 'react'
import Sit from '../../images/sitting 2.jpg'
function Sitting() {
    return (
        <div className='sitting row'>
            <img src={Sit} alt='chair' className='sit-img img'/>
            <div className='context'>
                <p className='header-two'>
                    Let Start With Sitting
                </p>
                <p className='subHeader-two'>
                    When sitting to discover your good sitting posture, ensure that
                </p>
                <p className='paragraph-two'>
                    1. Ears are above the points of your shoulders.
                    <br/>
                    2. Shoulders are back (don’t slump forward!), but nice and relaxed.
                    <br/>
                    3. Feet flat on the floor with knees, hips, and elbows bent 90 degrees.
                    <br/>
                    4. Take frequent breaks to stand up and move around.
                </p>
            </div>
        </div>
    )
}

export default Sitting
