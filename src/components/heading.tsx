"use client";
import React from "react";
import { motion } from "motion/react"
export const Heading = ({
        children ,
        as: Tag = "h1"
    }:
    {
        children:React.ReactNode,
        as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    }) => {
    return <motion.div
        initial={{opacity:0,filter:"blur(10px)",y:10}}
        whileInView={{opacity:1,filter:"none",y:0}}
        transition={{
            duration:0.3,
            ease:"easeInOut",
        }}
    >
        <Tag className="text-primary text-2xl md:text-4xl tracking-tight font-bold text-shadow-md">
            {children}
        </Tag>
    </motion.div>
}