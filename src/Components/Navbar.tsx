import Link from 'next/link'
import React, { ReactElement } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon} from './Icons'
import {motion} from 'framer-motion'
import { BaseMotionLink } from '@/common'
import useThemeSwitcher from './hooks/useThemeSwitcher'

type CustomLinkProps = {
  href: string, 
  title?: string, 
  className?: string
}

const CustomLink = ({href, title, className = ""}: CustomLinkProps) => {
  const router = useRouter()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}  
      <span className={`dark:bg-light h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300 ${router.asPath === href ? 'w-full': 'w-0' }` }></span>
    </Link>
  )
}
export default function Navbar() {

  const [mode, setMode] = useThemeSwitcher()
  
  return (
    <header className='w-full px-32 py-8 font-medium flex justify-between dark:text-light'>
        <nav>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="About" className='mx-4'></CustomLink>
            <CustomLink href="/projects" title="Projects" className='mx-4'></CustomLink>
            <CustomLink href="/articles" title="Articles" className='ml-4'></CustomLink>
        </nav>
        
        <nav className='flex items-center justify-center'>
          <BaseMotionLink>
            <TwitterIcon />
          </BaseMotionLink>
          <BaseMotionLink>
            <GithubIcon />
          </BaseMotionLink>
          <BaseMotionLink>
            <LinkedInIcon />
          </BaseMotionLink>
          <BaseMotionLink>
            <PinterestIcon />
          </BaseMotionLink>
          <BaseMotionLink>
            <DribbbleIcon />
          </BaseMotionLink>

          <button className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`} onClick={() => setMode(mode === 'light' ? 'dark' : 'light' )}>
            {
              mode === "dark" ?
              <SunIcon className='fill-dark'></SunIcon> :
              <MoonIcon className='fill-dark' />
            }
          </button>
        </nav>
        {/* translate-x-[50%] */}


        <div className='absolute left-[50%] top-2 '>
          <Logo />
        </div>
    </header>
  )
}
