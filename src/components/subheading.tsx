"use client";
import React from "react";
import { motion } from "motion/react"

export const Subheading = ({
        children ,
        as: Tag = "h2"
    }:
    {
        children:React.ReactNode,
        as?: "h2" | "h3" | "h4" | "h5" | "h6"
    }) => {
        return <motion.div
        initial={{opacity:0,filter:"blur(10px)",y:10}}
        whileInView={{opacity:1,filter:"none",y:0}}
        transition={{
            duration:0.3,
            ease:"easeInOut",
            delay:0.2
        }}
    >
        <Tag className="text-secondary text-sm md:text-base pt-3">
            {children}
        </Tag>
    </motion.div>
}