import { Container } from "@/components/container"
import { Heading } from "@/components/heading"
import { Subheading } from "@/components/subheading"
import { ContactForm } from "@/components/contact-form"

export default function Contact() {
    return (
        <div className="min-h-screen flex items-start justify-start">
            <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
                <Heading>Contact Me</Heading>
                <Subheading>I am a software engineer, I love to code and build things.</Subheading>
                <ContactForm />
            </Container>
        </div>
    )
}