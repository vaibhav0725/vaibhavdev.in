"use client";
import Image from "next/image";
import {motion} from "motion/react"
const projects = [
  {
    title: "Project Alpha",
    src: "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    href: "#",
    description: "A 3D card UI demo with smooth animations."
  },
  {
    title: "Project Beta",
    src: "https://assets.aceternity.com/macbook-scroll.png",
    href: "#",
    description: "A MacBook scroll effect for modern web showcases."
  },
  {
    title: "Project Gamma",
    src: "https://assets.aceternity.com/apple-cards-carousel.png",
    href: "#",
    description: "An Apple-style cards carousel built for inspiration."
  },
  {
    title: "Project Beta",
    src: "https://assets.aceternity.com/macbook-scroll.png",
    href: "#",
    description: "A MacBook scroll effect for modern web showcases."
  }
];

export const Projects = () => {
    return (
        <div className="py-10">
            <p className="text-secondary text-sm md:text-base pt-3">I love to build.</p>
            <div className="grid grid-cols-1 gap-2 py-4 md:grid-cols-2">
                {
                    projects.map((prj,idx)=>(
                        <motion.div 
                            key={idx}
                            initial={{
                                opacity:0,
                                filter:"blur(10px)",
                                y:100
                            }}
                            whileInView={{
                                opacity:1,
                                filter:"blur(0)",
                                y:0
                            }}
                            transition={{
                                duration:"0.3",
                                delay: idx * 0.1
                            }}
                            className="group relative mb-4 mx-auto"
                            >
                            <Image src={prj.src} width={400} height={400} alt="hello" 
                            className="object-cover rounded-3xl aspect-square transistion duration-200 group-hover:scale-[1.02]"/>
                            <h1 className="text-neutral-500 text-xl mt-2 font-medium tracking-tight">{prj.title}</h1>
                            <p className="max-w-xs text-neutral-500 text-sm ">{prj.description}</p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}