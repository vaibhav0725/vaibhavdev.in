const classVal = "focus:border-black dark:focus:border-white focus:ring-0 mt-1 block w-full rounded-md border-neutral-300 shadow-aceternity p-2 sm:text-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
const labelClassVal = "block text-sm font-medium text-primary dark:text-gray-300"
export const ContactForm = () => {
    return (
        <form className="flex flex-col gap-4 max-w-md mx-auto mt-10">
            <div>
                <label htmlFor="fullName" className={labelClassVal}>Full name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Tyler Durden"
                    className={classVal}
                />
            </div>
            <div>
                <label htmlFor="email" className={labelClassVal}>Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tyler@projectmayhem.com"
                    className={classVal}
                />
            </div>
            <div>
                <label htmlFor="message" className={labelClassVal}>Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="You're crazy good, never change."
                    className={classVal}
                ></textarea>
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-gray-200"
                >
                    Send message
                </button>
            </div>
        </form>
    )
}
