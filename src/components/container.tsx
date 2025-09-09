import { cn } from "@/lib/utils";
import { NavBar } from "./navbar";
import { Footer } from "./footer";

export const Container = ({children,className}:{
    children:React.ReactNode,
    className?:string
}) => {
    return (
        <div className="flex justify-center">
            <div 
                className="min-h-screen w-10 border-neutral-200 border-x-1 bg-white dark:bg-neutral-900 dark:border-neutral-800 bg-[image:var(--pattern-light)] dark:bg-[image:var(--pattern-dark)]"
            />
            <div className={cn("min-h-screen w-4xl bg-white dark:bg-neutral-900",className)}>
                <NavBar/>
                {children}
            </div>
            <div 
                className="min-h-screen w-10 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 border-x-1 bg-[image:var(--pattern-light)] dark:bg-[image:var(--pattern-dark)]"
            />
        </div>
    )
}

