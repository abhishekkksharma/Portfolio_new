import React from 'react'
import ContactMain from '@/components/Contact/ContactMain'
import Vent from '@/components/Vent'

function page() {
  return (
    <>
    <ContactMain/>
    <Vent path="/about" side="right" open={true} className="w-15 h-15 among-font"/>
    </>
  )
}

export default page