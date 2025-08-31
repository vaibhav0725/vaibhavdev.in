import { Container } from "@/components/container"
import { ExperienceCard } from "@/components/experience-card"
import { MainHeading } from "@/components/main-heading"
import { MovingCards } from "@/components/moving-cards"
import { PageDescription } from "@/components/page-description"
import { ProjectCard } from "@/components/project-card"
import { Sectioner } from "@/components/sectioner"
import { ContainerTextFlip } from "@/components/text-flipper"
import { projects } from "@/data/projects-content/projects"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Container>
        <section className="p-5">
          <div className="flex items-center gap-3">
            <MainHeading>Vaibhav Malik</MainHeading>
            <ContainerTextFlip/>
          </div>
          <PageDescription>
            They call me Soap. What the hell kind of a name is Soap? I'm a software engineer though with an eye for design.
          </PageDescription>
        </section>
        <section className="shadow-[var(--inner-shadow)] dark:shadow-[var(--inner-dark-shadow)] dark:border-y-[0.5px] dark:border-neutral-700">
          <Sectioner title="I love building">
            {projects.map((proj,idx)=>(
                idx<3 && <ProjectCard title={proj.title} description={proj.description} tags={proj.tags} image={proj.image} key={idx}/>
            ))}
          </Sectioner>
        </section>
        <section className="">
          <Sectioner title="What I write for tech">
            <>Blogs Come Here</>
          </Sectioner>
        </section>
        <section className="shadow-[var(--inner-shadow)] dark:shadow-[var(--inner-dark-shadow)] dark:border-y-[0.5px] dark:border-neutral-700">
          <Sectioner title="My Experience" className="flex flex-col gap-10">
            <ExperienceCard title="Full Stack Dev" timespan="Sep 2025 - Jun 2026" company="Google">
              They call me Soap. What the hell kind of a name is Soap? I'm a software engineer though with an eye for design.
            </ExperienceCard>
            <ExperienceCard title="Full Stack Dev" timespan="Sep 2025 - Jun 2026" company="Google">
              They call me Soap. What the hell kind of a name is Soap? I'm a software engineer though with an eye for design.
            </ExperienceCard>
            <ExperienceCard title="Full Stack Dev" timespan="Sep 2025 - Jun 2026" company="Google">
              They call me Soap. What the hell kind of a name is Soap? I'm a software engineer though with an eye for design.
            </ExperienceCard>
          </Sectioner>
        </section>
        <section className="">
          <Sectioner title="What People Feel About Me">
            <MovingCards/>
          </Sectioner>
        </section>
      </Container>
    </div>
  )
}