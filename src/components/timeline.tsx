"use client";

import React, { useRef } from "react"
import { useInView,motion } from "motion/react"
import  {IconCircleCheckFilled}  from "@tabler/icons-react"

type Data={
    title:string,
    content:{
        title:string | React.ReactNode,
        description: string | React.ReactNode
    }
}
export const Timeline = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref,{once:true,amount:0.6});

    const data: Data[]=[
        {
            title:"2024",
            content:{
                title:"Started the project",
                description:"Began working on a new portfolio website."
            }
        },
        {
            title:"2023",
            content:{
                title:"Learned React and Next.js",
                description:"Gained proficiency in modern web development frameworks."
            }
        },
        {
            title:"2022",
            content:{
                title:"First Developer Job",
                description:"Landed my first professional role as a software engineer."
            }
        },
        {
            title:"2021",
            content:{
                title:"Graduated University",
                description:"Completed my degree in Computer Science."
            }
        },
        {
            title:"2020",
            content:{
                title:"Internship at Tech Company",
                description:"Gained valuable real-world experience."
            },
        },
        {
            title:"2019",
            content:{
                title:"Started Coding Boot Camp",
                description:"Decided to pivot careers and learn to code."
            }
        },
        {
            title:"2018",
            content:{
                title:"Travel Year",
                description:"Explored different cultures and gained perspective."
            }
        },
        {
            title:"2017",
            content:{
                title:"Decided on a New Path",
                description:"Made the decision to pursue a career in technology."
            }
        }
    ]

    return (
        <div ref={ref} className="py-10 flex flex-col gap-4">
            {data.map((item, idx) => (
                <div key={idx}>
                    <motion.span 
                        animate={{
                            filter: isInView ? "none" : "blur(10px)",
                            opacity: isInView ? 1:0
                        }}
                        transition={{
                            duration:0.2,
                            delay: idx * 0.1,
                            ease:"easeInOut"
                        }}
                        className="shadow-aceternity px-2 py-1 rounded-md font-bold text-black">{item.title}</motion.span>
                    <div className="mt-2 pl-4">
                        <motion.div 
                        className="flex text-neutral-600 gap-1 items-center"
                        animate={{
                            opacity:isInView ? 1:0,
                            y:isInView ? 0:-10
                        }}
                        transition={{
                            duration:0.2,
                            delay:0.2*idx,
                            ease:"easeInOut"
                        }}
                        >
                            <IconCircleCheckFilled height={16} width={16}/>
                            <h3 className="text-neutral-600">{item.content.title}</h3>
                        </motion.div>
                        <motion.p
                            animate={{
                                opacity:isInView ? 1:0,
                                y:isInView ? 0:-10
                            }}
                            transition={{
                                duration:0.2,
                                delay:0.2*idx,
                                ease:"easeInOut"
                            }}
                            className="text-neutral-400 pt-1 text-sm pl-5">{item.content.description}</motion.p>
                    </div>
                </div>
            ))}
        </div>
    )
}