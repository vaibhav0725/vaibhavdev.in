export const MiniHeading = ({title}:{title:string}) => {
    return (
        <>
            <div className="bg-neutral-100 dark:bg-neutral-800 px-1 dark:text-neutral-200 relative flex w-fit">
                {title}
                <div className="size-1.5 rounded-full dark:bg-neutral-700 bg-neutral-200 top-[-2px] right-[-2px] absolute"/>
                <div className="size-1.5 rounded-full dark:bg-neutral-700 bg-neutral-200 top-[-2px] left-[-2px] absolute"/>
                <div className="size-1.5 rounded-full dark:bg-neutral-700 bg-neutral-200 bottom-[-2px] right-[-2px] absolute"/>
                <div className="size-1.5 rounded-full dark:bg-neutral-700 bg-neutral-200 bottom-[-2px] left-[-2px] absolute"/>
            </div>
            
        </>
    )
}