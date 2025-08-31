import Marquee from "react-fast-marquee";
export const MovingCards = () => {
    const cardval = [
        {
            fullname: "Sundar Pichai",
            text: "The quality of Manu's code is exceptional. He built a scalable solution that has been critical to our business growth."
        },
        {
            fullname: "Satya Nadella",
            text: "Manu's attention to detail and innovative thinking have made a significant impact on our projects. Highly recommended!"
        },
        {
            fullname: "Susan Wojcicki",
            text: "Working with Manu was a pleasure. His technical expertise and collaborative spirit drove our team to success."
        },
        {
            fullname: "Elon Musk",
            text: "Manu's problem-solving skills are top-notch. He consistently delivers robust and efficient solutions."
        },
        {
            fullname: "Sheryl Sandberg",
            text: "Manu brings creativity and reliability to every project. His work ethic is truly inspiring."
        }
    ]
    return (
        <Marquee pauseOnHover className="mask-r-from-98% mask-l-from-98%">
            {cardval.map((curr,idx)=>(
                <Card key={idx} fullname={curr.fullname} text={curr.text}/>
            ))}
        </Marquee>
    )
}

function Card({fullname,text}:{
    fullname: string,
    text: string
}) {
    return (
        <div className="px-5">
            <div className="border-1 border-neutral-300 dark:border-neutral-700 dark:drop-shadow-xl dark:drop-shadow-neutral-700 w-[260px] py-4 px-6 rounded-2xl flex flex-col h-56 justify-between">
                <div className="text-md dark:text-neutral-200">
                    {text}
                </div>
                <div className="text-neutral-500 text-md dark:text-neutral-200">{fullname}</div>
            </div>
        </div>
    )
}