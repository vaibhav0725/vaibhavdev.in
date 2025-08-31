import { ReactNode } from "react"

export const MainHeading = ({children} : {children:ReactNode}) => {
    return (
        <div className="text-4xl tracking-tighter font-bold text-shadow-lg dark:text-shadow-xs dark:text-shadow-neutral-50 dark:text-neutral-100">
            {children}
        </div>
    )
}