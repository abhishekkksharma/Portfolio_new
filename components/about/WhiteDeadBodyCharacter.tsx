import React from 'react'
import Image from 'next/image'
import WhiteDeadBody from "../../assets/whiteDeadBodyCharacter.png"

function WhiteDeadBodyCharacter({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="absolute cursor-pointer group z-10" 
      style={{ top: "52.03%", left: "6.75%" }}
      onClick={onClick}
    >
        {/* Tooltip */}
        <p className='hidden group-hover:flex absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white rounded-2xl px-2 py-0.5 font-mono text-sm border border-white whitespace-nowrap z-20'>
          Report
        </p>
        
        <Image src={WhiteDeadBody} className="w-14 h-14 animate-pulse" alt="white-dead-body"/>
    </div>
  )
}

export default WhiteDeadBodyCharacter