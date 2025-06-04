import { Container } from "@/components/container"
import { Timeline } from "@/components/timeline"
import { Subheading } from "@/components/subheading"
import { Heading } from "@/components/heading"

export default function About() {
    return <div className="min-h-screen flex items-start justify-start">
            <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
                <Heading>About</Heading>
                <Subheading>I am a software engineer, I love to code and build things.</Subheading>
                <Timeline/>
            </Container>
        </div>
}