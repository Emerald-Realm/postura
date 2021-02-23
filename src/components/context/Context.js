import React from 'react'
import Showcase from './Showcase'
import Aim from './Aim'
import Sitting from './Sitting'
import Sleeping from './Sleeping'
import Standing from './Standing'
import Walking from './Walking'
import Mistakes from './Mistakes'
import Exercise from './Exercise'
import Disadvantages from './Disadvantages'
import Benefits from './Benefits'

function Context() {
    return (
        <div className='main-context'>
            <Showcase />
            <Aim/>
            <Sitting />
            <Standing/>
            <Walking />
            <Sleeping/>
            <Mistakes/>
            <Exercise/>
            <Disadvantages/>
            <Benefits/>
        </div>
    )
}

export default Context
