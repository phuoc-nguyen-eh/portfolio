import AnimatedText from '@/Components/AnimatedText'
import Layout from '@/Components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/Components/Skills'
import Experience from '@/Components/Experience'
import Projects from '@/Components/Projects'

const AnimatedNumber = ({value}: {value: number}) => {
    const ref = useRef<HTMLElement>(null);
    const motionValue = useMotionValue(0);   
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    
    }, [isInView, motionValue, value])

    useEffect(() => {
        springValue.on('change', latest => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    

    return (
        <span ref={ref}>
        </span>
    )
}

export default function about() {
  return (
    <>
        <Head>
            <title>CodeBuck | About page</title>
            <meta name='description' content='any'/>
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <>
                    <AnimatedText className='text-center mb-16' text='Passion Fuels Purpose!'></AnimatedText>
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                            <p className='font-medium'>- Hi, Im CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
new and innovative ways to bring my clients visions to life. </p>

<p className='font-medium my-4'>- I believe that design is about more than just making things look pretty – its about solving problems and 
creating intuitive, enjoyable experiences for users. </p>

<p className='font-medium my-4'>- Whether Im working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] bg-dark rounded-[2rem]'></div>
                            <Image src={profilePic} alt="codeBugs" className='w-full h-auto rounded-2xl'></Image>
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between' >
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumber value={50}/> +
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light'>
                                    satisfied clients
                                </h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumber value={40}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light'>
                                    projects completed
                                </h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumber value={3}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light'>
                                    years of experience
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills></Skills>
                    <Experience></Experience>
                    <Projects></Projects>
                </>
            </Layout>
        </main>
    </>
  )
}
