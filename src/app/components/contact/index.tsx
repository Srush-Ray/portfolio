import { contactDetails } from '@/app/constants/contact-details'
import Image from 'next/image'
import React from 'react'

const ContactDetails = () => {
  return (
    <div className='grid grid-cols-3 justify-center items-center text-center'>
         <div className="grid col-start-2 grid-cols-6 my-4 items-center justify-center pl-8">
            {contactDetails.map((contact)=>{
                return <a  key={contact.title} href={contact.url} target='_blank' className="grid-cols-3 items-center justify-center">
                <Image
                    src={contact.icon}
                    height={35}
                    width={35}
                    alt={contact.title}
                />
            </a>
            })}
      </div>
        
    </div>
  )
}

export default ContactDetails