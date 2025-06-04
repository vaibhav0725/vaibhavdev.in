import { Container } from "@/components/container"
import { Heading } from "@/components/heading"
import { Subheading } from "@/components/subheading"
export default function Snippets() {
    return (
        <div className="min-h-screen flex items-start justify-start">
            <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
                <Heading >All Snippets</Heading>
                <Subheading>I am a software engineer, I love to code and build things.</Subheading>
            </Container>
        </div>
    )
}