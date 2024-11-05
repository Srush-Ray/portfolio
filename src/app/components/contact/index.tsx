/** @jsxImportSource @emotion/react */
"use client"
import { contactDetails } from '@/app/constants/contact-details'
import Image from 'next/image'
import {imageStyle} from './styles';

const ContactDetails = () => {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-2 mt-5 justify-center items-center text-center'>
      <div className='lg:col-start-2 lg:col-span-1 col-start-1 col-span-2 p-1'>
         <div className="grid lg:grid-cols-6 grid-cols-6 items-center justify-cente">
            {contactDetails.map((contact)=>{
              return <a  
              title={contact.title}
              key={contact.title} href={contact.url} target='_blank' className="grid-cols-1 items-center justify-center">
                <Image
                    src={contact.icon}
                    height={35}
                    width={35}
                    alt={contact.title}
                    css={imageStyle}
                    />
            </a>
            })}
      </div>
            </div>
    </div>
  )
}

export default ContactDetails