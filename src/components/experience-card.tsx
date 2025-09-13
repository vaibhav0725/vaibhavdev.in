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
            <div className="text-xl font-semibold tracking-tighter dark:text-neutral-100">{company}</div>
            <div className="text-lg dark:text-neutral-300 mt-1">
                {title}
                <BoxText>{timespan}</BoxText>
            </div>
            <div className="w-fit text-neutral-500 text-md dark:text-neutral-400 mt-1">
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