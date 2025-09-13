// import StackIcon from "tech-stack-icons"
import { FaCode } from "react-icons/fa6";
import Image from "next/image";
// import { TechReactIcon, TechNodeIcon, TechPythonIcon } from 'react-tool-icons';


export const Stack = ({icon,name}:{icon:string,name:string}) => {
     return (
        <div className="group bg-neutral-100 p-1 flex items-center gap-0.5 rounded-full border-2 border-neutral-200 hover:z-5 dark:border-neutral-700 dark:bg-neutral-800">
            {/* <StackIcon name={icon} className="size-5 ml-0.5 group-hover:ml-0 dark" />             */}
            <FaCode className="size-5 ml-0.5 group-hover:ml-0 dark text-neutral-400"/>
            {/* <Image alt="icon" width={400} height={400} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="size-5.5 ml-0.5"/> */}
            <div className="text-md text-neutral-600 dark:text-neutral-300 overflow-hidden whitespace-nowrap max-w-0 opacity-0 transition-all ease-out group-hover:max-w-full group-hover:opacity-100 group-hover:ml-0.5">
                {name}
            </div>
         </div>
     )
}