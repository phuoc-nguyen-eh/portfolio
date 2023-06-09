import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/Components/Layout'
import Image from 'next/image'
import profilePicture from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/Components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/Components/Icons'
import HireMe from '@/Components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePicture} alt='CodeBucks' className='w-full h-auto'/>
            </div>
            <div className='w-1/2 flex flex-col items-center justify-center'>
              <AnimatedText text='Turning Vision Into Reality With Code And Design.'/>
              <p className='my-4 text-base font-medium'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
              <div className='flex items-center self-start mt-2'>
                <Link download={true} href="/dummy.pdf" target='_blank' className='flex items-center bg-dark text-light 
                p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                 hover:border-dark border border-solid border-transparent'>Resume <LinkArrow className='ml-1 '/> </Link> 
                <Link href="mailto:huuphuoc252513@gmail.com" target='_blank' className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'>Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe/> */}
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt='CodeBug' className='w-full h-auto'></Image>
        </div>
      </main>
    </>
  )
}
