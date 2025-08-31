import { Container } from "@/components/container";
import { MainHeading } from "@/components/main-heading";
import { PageDescription } from "@/components/page-description";

export default function Contact() {
    return (
        <div className="min-h-screen">
            <Container>
                <section className="p-5">
                    <div className="flex items-center gap-3">
                        <MainHeading>Contact Me</MainHeading>
                    </div>
                    <PageDescription>
                        Im open to freelancing offers. Reach out to me to inquire more about my work.
                    </PageDescription>
                </section>
                <section className="shadow-[var(--inner-shadow)] dark:shadow-[var(--inner-dark-shadow)] dark:border-y-[0.5px] dark:border-neutral-700">
                <form className="flex flex-col gap-4 max-w-xl mx-auto px-5 py-10">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="text-md font-medium text-neutral-700">Full name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Tyler Durden"
                            className="shadow-[var(--shadow-aceternity)] dark:shadow-[var(--shadow-dark-aceternity)] dark:text-neutral-100 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300 transition dark:placeholder:text-neutral-500 placeholder:text-neutral-400"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-md font-medium text-neutral-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="tyler@projectmayhem.com"
                            className="shadow-[var(--shadow-aceternity)] dark:shadow-[var(--shadow-dark-aceternity)] dark:text-neutral-100 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300 transition dark:placeholder:text-neutral-500 placeholder:text-neutral-400"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="message" className="text-md font-medium text-neutral-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="You're crazy good, never change."
                            rows={4}
                            className="shadow-[var(--shadow-aceternity)] dark:shadow-[var(--shadow-dark-aceternity)] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300 transition resize-none dark:placeholder:text-neutral-500 dark:text-neutral-200 placeholder:text-neutral-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-2 text-neutral-500 shadow-[var(--shadow-aceternity)] dark:shadow-[var(--shadow-dark-aceternity)] font-medium dark:text-neutral-100 rounded-md py-2 transition dark:hover:bg-neutral-600/50 hover:bg-neutral-200"
                    >
                        Send message
                    </button>
                </form>
                </section>
            </Container>
        </div>
    )
}