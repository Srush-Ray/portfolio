/** @jsxImportSource @emotion/react */
"use client"
import { contactDetails } from '@/app/constants/contact-details'
import Image from 'next/image'
import {imageStyle} from './styles';
import { trackClick } from '@/app/firebase';

const ContactDetails = ({ details = {}, align = 'center' }: {
  details?: {
    [key: string]: string
  },
  align?: 'center' | 'left' | 'responsive'
}) => {
  const getJustifyClass = () => {
    if (align === 'left') return 'justify-start';
    if (align === 'responsive') return 'justify-center md:justify-start';
    return 'justify-center';
  };

  return (
    <div className={`flex flex-wrap items-center gap-4 mt-4 ${getJustifyClass()}`}>
      {contactDetails.map((contact) => {
        return (
          <a
            onClick={() => trackClick('contact-link', {
              contact: contact.title,
              ...details
            })}
            title={contact.title}
            key={contact.title}
            href={contact.url}
            target='_blank'
            className="transition-transform hover:scale-110 inline-block"
          >
            <Image
              src={contact.icon}
              height={35}
              width={35}
              alt={contact.title}
              css={imageStyle}
            />
          </a>
        )
      })}
    </div>
  )
}

export default ContactDetails