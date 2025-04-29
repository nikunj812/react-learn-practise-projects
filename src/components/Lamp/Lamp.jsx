import React, { useState } from 'react'
import Switch from './Switch'
import BackGround from './BackGround'
import { ToggleLampProvider } from '../../contexts/toggleLamp'

const Lamp = () => {
    const [lightStatus, setLightStatus] = useState(false)
    
    const changeLightStatus = (status) => {
        setLightStatus(status)
    }
    return (
        <ToggleLampProvider value={{lightStatus, changeLightStatus}}>
            <div>
                <div className='flex items-center justify-center bg-amber-200'>
                    <Switch/>
                </div>
                <div className='h-screen'>
                    <BackGround/>
                </div>
            </div>
        </ToggleLampProvider>
    )
}

export default Lamp