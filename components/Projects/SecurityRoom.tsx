import React from 'react'
import Image from 'next/image'
import SecurityRoomImage from "../../assets/projects/security-room.png"

function SecurityRoom() {
  return (
    <div className='hidden lg:flex justify-start'>
        <Image src={SecurityRoomImage} className='w-140 h-auto ' alt='security-room'/>
    </div>
  )
}

export default SecurityRoom