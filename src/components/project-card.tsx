"use client";
import { Stack } from "./stack"
import Image from "next/image"
import {motion} from "motion/react"
import Link from "next/link";

export const ProjectCard = ({
    title,description,tags,image,link
}:{
    link: string,
    image:string,
    title:string,
    description:string,
    tags: { name: string; icon: string }[]
}) => {
    const move = {
        animate: { translateX: "15px" },
    }
    const scale = {
        animate: {scale: 1.025}
    }
    return (
        <Link href={link}>
            <motion.div
                whileHover="animate" 
                className="w-[260px] dark:border-none border-neutral-200 rounded-2xl pb-5 hover:border-1 hover:shadow-[var(--shadow-aceternity)] dark:hover:shadow-[var(--shadow-dark-aceternity)]"
            >
                <motion.div
                    variants={scale}
                >
                    <Image 
                        src={image}
                        alt="hello"
                        width={260}
                        height={260}
                        className="rounded-2xl"
                    />
                </motion.div>
                <motion.div variants={move} className="flex flex-col items-stretch">
                    <h3 className="text-lg text-neutral-600 dark:text-neutral-300 font-medium mt-5">{title}</h3>
                    <div className="text-md w-fit text-neutral-500 dark:text-neutral-400 mt-1.5">
                        {description}
                    </div>
                    <div className="flex mt-4">
                        <div className="flex -space-x-2">
                            {tags.map((tag,idx)=>(
                                <Stack icon={tag.icon} name={tag.name} key={idx}/>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </Link>
    )
}