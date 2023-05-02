import { motion, useScroll } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GithubIcon } from './Icons'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'

type FeaturedProjectProps = {
    type: string,
    title: string,
    image: StaticImageData,
    link: string,
    summary: string,
    github: string
}

const FeaturedProject = ({type, title, image, link, summary, github}: FeaturedProjectProps) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg '>
                <Image src={image} alt={title} className='w-full h-auto'></Image>
            </Link> 
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold '>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center '>
                    <Link href={github} target='_blank' className='w-10'><GithubIcon /> </Link>
                    <Link href={github} target='_blank' className='ml-4 rounded-lg bg-dark text-light px-6 text-lg font-semibold p-2'>Visit Project</Link>
                </div>
            </div>
            
        </article>
    )
}

const Project = () => {

}

export default function Projects() {
    
  return (
    <div className=''>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Projects
        </h2>
        <div className='grid grid-cols-12 gap-24 '>
            <div className='col-span-12'>
                <FeaturedProject 
                    type='Featured Project'
                    title='CodeBucks'
                    image={project1}
                    link='https://codebucks.dev'
                    summary='A portfolio website built with Next.js and TailwindCSS'
                    github=''
                />
            </div>
            {/* <div className='col-span-6'>
                Featured projects
            </div>
            <div className='col-span-6'>
                Featured projects
            </div> */}
        </div>
    </div>
  )
}
