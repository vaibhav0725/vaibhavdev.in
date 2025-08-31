import { ReactNode } from "react"

export const ExperienceCard = ({
    company,
    title,
    timespan,
    children
}:{
    company:string,
    title:string,
    timespan:string,
    children:ReactNode
}) => {
    return (
        <div>
            <div className="text-xl dark:text-neutral-100">{company}</div>
            <div className="text-md dark:text-neutral-300 mt-2">
                {title}
                <BoxText>{timespan}</BoxText>
            </div>
            <div className="w-2xl text-neutral-500 text-sm dark:text-neutral-400 mt-1.5">
                {children}
            </div>
        </div>
    )
}

function BoxText({children}:{children:ReactNode}) {
    return (
        <span className="dark:text-neutral-400 dark:border-neutral-700 border-1 border-neutral-300 text-neutral-600 py-0.5 px-1 ml-1 rounded-md text-sm">
            {children}
        </span>
    )
}