"use client";
import { Container } from "../container"
import {motion, useMotionValueEvent, useScroll} from "motion/react"
import Link from "next/link"
import { useState } from "react"

const navItems = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Blogs", href: "/blogs" },
]
export const Navbar = () => {
    const [hovered,setHovered] = useState<null | number>(null);
    const {scrollY} = useScroll();

    const [scrolled,setScrolled] = useState<boolean>(false);

    useMotionValueEvent(scrollY,"change",(current)=>{
        if(current>20) setScrolled(true);
        else setScrolled(false);
    })

    return (
        <Container>
            <motion.nav 
                transition={{
                    ease:"linear",
                    duration:"0.3"
                }}
                animate={{
                    boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
                    width: scrolled ? "50%" : "80%",
                    borderRadius: scrolled ? "100px" : "0",
                    y: scrolled ? "10px" : "0",
                }}
                className="z-10 fixed top-0 inset-x-0 max-w-4xl mx-auto flex items-center justify-between px-4 py-3 backdrop-blur-sm">
                <h1 className="text-primary font-bold text-2xl tracking-tighter">Vaibhav Malik</h1>
                <div className="">
                    {
                        navItems.map((item,idx)=>(
                            <Link 
                                className="relative px-2 py-1"
                                onMouseEnter={()=>{setHovered(idx)}}
                                onMouseLeave={()=>{setHovered(null)}}
                                href={item.href} key={idx}
                            >
                                {
                                    hovered===idx &&
                                    <motion.span 
                                        layoutId="hovered-span"
                                        className="inset-0 w-full h-full rounded-md bg-neutral-100 dark:bg-neutral-800 absolute"/>
                                }
                                <span className="relative z-10 text-secondary">{item.label}</span>
                            </Link>
                        ))
                    }
                </div>
            </motion.nav>
        </Container>
    ) 
}