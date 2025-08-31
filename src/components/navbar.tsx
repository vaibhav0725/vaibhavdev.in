"use client";
import StackIcon from "tech-stack-icons"
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";
import Image from "next/image";

export const NavBar = () => {
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setMounted(true);
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    function handleThemeChange() {
        const currentTheme = document.documentElement.classList.contains("dark")
        ? "light" : "dark";
        document.documentElement.classList.toggle("dark");
        setIsDark(!isDark);
        localStorage.setItem("theme",currentTheme);
    }

    const navItems = [
        { label: "Projects", href: "/projects" },
        { label: "Snippets", href: "/snippets" },
        { label: "Blogs", href: "/blogs" },
        { label: "Contact", href: "/contact" },
    ]
    const [hovered, setHovered] = useState<null | number>(null);
    const { scrollY } = useScroll();

    const [scrolled, setScrolled] = useState<boolean>(false);

    const y = useTransform(scrollY, [0, 50, 100], [0, 5, 10]);
    const width = useTransform(scrollY, [0, 50, 100], ["100%", "95%", "90%"]);
    // Use px values for border-radius for more consistent rendering
    // and only round the corners, not the whole bar (avoid "pill" at mid scroll)
    const borderRadius = useTransform(
        scrollY,
        [0, 50, 100],
        ["0px", "16px", "32px"]
    );

    useMotionValueEvent(scrollY, "change", (current) => {
        if (current > 20) setScrolled(true);
        else setScrolled(false);
    });

    if (!mounted) {
        return (
            <div className="max-w-5xl mx-auto sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/60">
                <div className="flex items-center justify-between px-5 py-2.5 backdrop-blur-sm">
                    <div className="size-9 bg-gray-200 rounded animate-pulse"></div>
                    <div className="flex gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                        {navItems.map((_, idx) => (
                            <div key={idx} className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            transition={{
                ease: "linear",
                duration: 0.3
            }}
            style={{
                width: width,
                borderRadius: borderRadius,
                y: y,
                boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
                border: scrolled
                    ? (isDark
                        ? "1px solid #262626"
                        : "1px solid #e5e5e5")
                    : "none", // add border for visual consistency
                overflow: "hidden", // ensure children don't overflow rounded corners
            }}
            className="max-w-5xl mx-auto sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/60"
        >
            <div className="flex items-center justify-between px-5 py-2.5 backdrop-blur-sm">
                <Link href="/">
                    <div className="size-9 dark:bg-neutral-200 flex items-center justify-center rounded shadow-aceternity ml-2">
                        <Image 
                            src="/VM-logo-draft1.svg" 
                            alt="VM Logo" 
                            width={25} 
                            height={25}
                            className="block"
                        />
                    </div>
                </Link>
                <div className="flex">
                    <button
                        className="px-2 py-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-200" onClick={handleThemeChange}>
                        <motion.div
                            
                        >
                        {isDark ? <FiSun/> : <FiMoon/>}
                        </motion.div>
                    </button>
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
                                <span className="relative z-10 text-primary text-md dark:text-neutral-200">{item.label}</span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

