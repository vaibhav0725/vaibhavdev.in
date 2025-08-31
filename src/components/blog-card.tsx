export const BlogCard = ({
    title,timeline,description
}:{
    title:string,
    timeline:string,
    description:string
}) => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">{title}</h3>
                <h4 className="text-sm text-neutral-600 dark:text-neutral-500">{timeline}</h4>
            </div>
            <div className="w-2xl text-neutral-500 dark:text-neutral-400">
                {description}
            </div>
        </div>
    )
}