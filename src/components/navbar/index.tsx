"use client";
import { Container } from "../container"
import {motion, useMotionValueEvent, useScroll, useTransform} from "motion/react"
import { Link } from "next-view-transitions"
import { useState } from "react"

const navItems = [
    { label: "Snippets", href: "/snippets" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Blogs", href: "/blogs" },
    { label: "About", href: "/about" }
]
export const Navbar = () => {
    const [hovered,setHovered] = useState<null | number>(null);
    const {scrollY} = useScroll();

    const [scrolled,setScrolled] = useState<boolean>(false);

    const y = useTransform(scrollY,[0,50,100],[0,5,10]);
    const width = useTransform(scrollY,[0,50,100],["65%","60%","55%"]);
    const borderRadius = useTransform(scrollY,[0,50,100],["0","30px","100px"])

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
                style={{
                    boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
                    width:width,
                    borderRadius: borderRadius,
                    y:y
                }}
                className="z-10 fixed top-0 bg-white/50 dark:bg-neutral-900/50 inset-x-0 max-w-4xl mx-auto flex items-center justify-between px-4 py-3 backdrop-blur-sm">
                <Link href="/" className="text-primary font-bold text-2xl tracking-tighter">Vaibhav Malik</Link>
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
                                <span className="relative z-10 text-primary">{item.label}</span>
                            </Link>
                        ))
                    }
                </div>
            </motion.nav>
        </Container>
    ) 
}