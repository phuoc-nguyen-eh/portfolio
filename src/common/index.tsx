import Link from 'next/link'
import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import {motion} from 'framer-motion'

export const BaseMotionLink = ({children}: {children: ReactElement}) => {
    const MotionLink = motion(Link);
    return <MotionLink href="/" target={"_blank"} whileHover={{y: -2}} whileTap={{scale: 0.9}} className='w-6 mx-3'>
        {children}
      </MotionLink>
    }