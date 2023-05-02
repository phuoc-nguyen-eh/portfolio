import { BaseComponentTypes } from '@/types'
import React from 'react'
import {motion} from 'framer-motion'

const quote = {
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

export default function AnimatedText({text, className}: BaseComponentTypes) {
  return (
    <div className='w-full mx-auto py-2 items-center justify-center text-center overflow-hidden dark:text-light'>
        <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-6xl text-left ${className} dark:text-light`}
            variants={quote}
            initial="initial"
            animate="animate"
        >
            {
                text?.split(' ').map((word, id) => 
                    <motion.span key={`${word}-${id}`} className='inline-block'
                        variants={singleWord}    
                    >
                        {word}&nbsp;
                    </motion.span>
                )
            }
        </motion.h1>
    </div>
  )
}
