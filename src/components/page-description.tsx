import { ReactNode } from "react"

export const PageDescription = ({children}:{children:ReactNode}) => {
    return (
        <div className="text-neutral-500 max-w-lg mt-2">
            {children}
        </div>
    )
}