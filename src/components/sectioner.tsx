import { ReactNode } from "react"
import { MiniHeading } from "./mini-heading"
import { cn } from "@/lib/utils"

export const Sectioner = ({title,children,className}:{
    title: string,
    children: ReactNode,
    className?:string
}) => {
    return (
        <div className="px-5 py-10">
            <MiniHeading title={title}/>
            <div className={cn('flex justify-between mt-5',className)}>
                {children}
            </div>
        </div>
    )
}