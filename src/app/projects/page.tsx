import { Container } from "@/components/container"
import { Heading } from "@/components/heading"
import { Projects } from "@/components/projects"
import { Subheading } from "@/components/subheading"

export default function ProjectsPage() {
    return <div className="min-h-screen flex items-start justify-start">
            <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
                <Heading>Projects</Heading>
                <Subheading>I am a software engineer, I love to code and build things.</Subheading>
                <Projects/>
            </Container>
        </div>
}