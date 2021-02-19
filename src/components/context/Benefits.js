import React from 'react'
import Happy from '../../images/happy.jpg'

function Benefits() {
    return (
        <div className='benefits row'>
            <div className='context'>
                <p className='header-two'>Advantages of Good Posture</p>
                <p className='paragraph-two'>
                    1. Reduced low back pain.
                <br/>
                    2. Fewer headaches.
                <br/>
                    3. Increased energy levels.
                <br/>
                    4. Less tension in your shoulders and neck.
                <br/>
                    5. Decreased risk of abnormal wearing of the joint surfaces.
                <br/>
                    6. Increased lung capacity.
                <br/>
                    7. Improved circulation and digestion.
                </p>
            </div>
            <img src={Happy} alt='happy family' className='img benefit-img' />
        </div>
    )
}

export default Benefits
