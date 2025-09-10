import { Container } from "@/components/container";
import { MainHeading } from "@/components/main-heading";
import { PageDescription } from "@/components/page-description";
import { Sectioner } from "@/components/sectioner";
import { ProjectCard } from "@/components/project-card";
import { MiniHeading } from "@/components/mini-heading";
import { projects } from "@/data/projects-content/projects";


export default function Projects() {
    return (
        <div>
            <Container>
                <section className="p-5">
                    <div className="flex items-center gap-3">
                        <MainHeading>Projects</MainHeading>
                    </div>
                    <PageDescription>
                        Explore my latest projects, showcasing my skills in building creative and impactful solutions.
                    </PageDescription>
                </section>
                <section className="shadow-[var(--inner-shadow)] dark:shadow-[var(--inner-dark-shadow)] dark:border-neutral-700 px-5 py-10 dark:border-y-[0.5px]">
                    <div className="grid grid-cols-3 gap-10">
                        {projects.map((proj,idx)=>(
                            <ProjectCard title={proj.title} description={proj.description} tags={proj.tags} image={proj.image} link={proj.link} key={idx}/>
                        ))}
                    </div>
                </section>
            </Container>
        </div>
    )
}