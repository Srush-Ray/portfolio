/** @jsxImportSource @emotion/react */
"use client"
import { contactDetails } from '@/app/constants/contact-details'
import Image from 'next/image'
import {imageStyle} from './styles';

const ContactDetails = () => {
  return (
    <div className='grid grid-cols-1 mt-5 justify-center items-center text-center'>
         <div className="grid grid-cols-6 items-center justify-center">
            {contactDetails.map((contact)=>{
                return <a  key={contact.title} href={contact.url} target='_blank' className="grid-cols-3 items-center justify-center">
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
  )
}

export default ContactDetails