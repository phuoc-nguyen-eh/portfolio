import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}: {name: string, x: string, y: string}) => {
    return (
        <motion.div className='flex items-center 
        justify-center rounded-full font-semibold 
        bg-dark text-light py-3 px-6
        shadow-dark cursor-pointer absolute'
        initial={{x: 0, y: 0}} 
        whileInView={{x: x, y: y}}
        transition={{duration: 1}}
        viewport={{once: true}}
        whileHover={{scale: 1.05}} >
            {name}
        </motion.div>
    )

}

export default function Skills() {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer' whileHover={{scale: 1.05}} >
                    Web
                </motion.div>
                <Skill name="CSS" x="-5vw" y="-12vw" />
                <Skill name="HTML" x="-20vw" y="2vw" />
                <Skill name="Javascript" x="17vw" y="6vw" />
                <Skill name="ReactJs" x="0vw" y="12vw" />
                <Skill name="NextJs" x="-20vw" y="-15vw" />
                <Skill name="Web Design" x="32vw" y="-5vw" />
                <Skill name="NextJs" x="-20vw" y="-15vw" />
                <Skill name="Figma" x="0vw" y="-20vw" />
                <Skill name="Firebase" x="-25vw" y="18vw" />
            </div>
    </>
    
  )
}
