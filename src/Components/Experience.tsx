import { useScroll, motion } from 'framer-motion'
import React, { useRef } from 'react'

type DetailsProps = {
    position: string,
    company: string,
    time: string,
    address: string,
    work: string
}


const Details = ({position, company, time, address, work}: DetailsProps) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <div>
            <h3 className='capitalize font-bold text-2xl'>
                {position}&nbsp; <a className='text-primary capitalize'>@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full '>
                {work}
            </p>
        </div>
    </li>

}

export default function Experience() {
    const ref = React.useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Experience
        </h2>
        <div className='w-[75%] mx-auto relative '>
            <motion.div style={{scaleY: scrollYProgress}}  ref={ref} className='absolute left-8 top-0 w-[4px] h-full bg-dark'></motion.div>
            <ul className='w-full flex flex-col items-start justify-between ml-4'> 
                    <Details 
                        position="Software Engineer" 
                        company={"Google"}
                        time={"2022-Present"}
                        address={"Mountain View, CA"}
                        work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."}    
                    />
                    <Details 
                        position="Intern" 
                        company={"Facebook"}
                        time={"Summer 2021 "}
                        address={"Menlo Park, CA."}
                        work={"Worked on a team responsible for developing a new mobile app feature that allowed users to create and  share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature"}    
                    />
                    <Details
                        position="Software Developer"
                        company={"Amazon"}
                        time={"2020-2021"}
                        address={"Seattle, WA."}
                        work={"Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability."}
                    />

            </ul>
        </div>
    </div>
  )
}
