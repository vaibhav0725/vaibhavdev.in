import { cn } from "@/lib/util";

export const DotBox = ({
    children
}:{
    children: React.ReactNode
}) => {
    return (
        <div className="relative inline-flex items-center justify-center px-1.5 py-0.5 bg-neutral-100">
            <div className="relative z-10 inline-block">
                {children}
            </div>
            <Dot className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"/>
            <Dot className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2"/>
            <Dot className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2"/>
            <Dot className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2"/>
        </div>
    )
}
function Dot({className}:{className:string}) {
    return (
        <div className={cn("w-1 h-1 bg-neutral-300 rounded-full",className)}></div>
    )
}