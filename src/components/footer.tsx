import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

export const Footer = () => {
    return (
        <div className="w-[976px] bg-white dark:bg-neutral-900 mx-auto border-t-1 border-neutral-300 dark:border-neutral-700 text-neutral-500">
            <div className="mx-auto w-5xl text-lg flex items-center justify-between px-5 py-2">
            <span className="text-xs">Built by Vaibhav</span>
            <div className="flex gap-5">
                <CiLinkedin/>
                <FaXTwitter/>
                <FiGithub />
            </div>
            </div>
        </div>
    )
}