import React from 'react'
import Walk from '../../images/walking.jpg'

function Walking() {
    return (
        <div className='walking row' id='walking id'>
            <div className='context'>
                <p className='header-two'>
                    Walking Right
                </p>
                <p className='subHeader-two'>
                    To correct your walking posture
                </p>
                <p className='paragraph-two'>
                    1. Stand as straight as possible.
                <br/>
                    2. Exercise a little before walking.
                <br/>
                    3. Step lightly.
                <br/>
                    4. Ensure your shoulders are relaxed.
                <br/>
                    5. Swing from your shoulders, but not to much.
                <br/>
                    6. Wear comfortable shoes.
                </p>
            </div>
            <img src={Walk} alt='walk family' className='img walk-img' />
        </div>
    )
}

export default Walking
