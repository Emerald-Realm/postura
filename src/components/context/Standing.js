import React from 'react'
import Stand from '../../images/standing.jpg'
function Standing() {
    return (
        <div className='standing'>
            <p className='header-two'>Good Standing Posture</p>
            <p className='subHeader-two'>To Discover your correct standing posture find a wall</p>
            <div className='row'>
                <p className='paragraph-two'>
                    1. Stand with head, shoulders, and back against a wall and your heels about 5-6 inches forward.
                    <br/>
                    2. Draw in the lower abdominal muscles, decreasing the arch in your lower back.
                    <br/>
                    This is what good posture feels like.
                    <br/>
                    3. Now push away from the wall and try to maintain this upright, vertical alignment.
                </p>
                <img src={Stand} alt='standing posture' className='stand img' />
            </div>
        </div>
    )
}

export default Standing
