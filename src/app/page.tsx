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
            <ExperienceCard
              title="Full Stack Developer Intern"
              timespan="July 2025 – Present"
              company="MayaCode"
            >
              <p className="mb-2">
                Built 5+ responsive landing pages using React.js &amp; Tailwind, improving page load speed by 40% across devices.
              </p>
              <p className="mb-2">
                Delivered 2 real-time dashboards (Admin &amp; User) using the MERN stack, enabling seamless task management.
              </p>
              <p className="mb-2">
                Implemented JWT-based authentication &amp; role-based access control, eliminating unauthorized access.
              </p>
              <p className="mb-2">
                Streamlined job-matching workflows, enabling 500+ refugees to access employment and services more efficiently.
              </p>
            </ExperienceCard>
            <ExperienceCard
              title="Full Stack Developer Intern"
              timespan="May 2025 – July 2025"
              company="GV Electricals"
            >
              <p className="mb-2">
                Developed a responsive, modern landing page with the MERN stack, strengthening the company&apos;s online presence.
              </p>
              <p className="mb-2">
                Re-architected the existing website, improving the UI / UX and the modularity of the code, faster by 25%.
              </p>
              <p className="mb-2">
                Reduced bugs by 40% through Git-based deployment and CI testing, ensuring stable and scalable releases.
              </p>
            </ExperienceCard>
            <ExperienceCard
              title="Full Stack Developer Intern"
              timespan="June 2024 – July 2024"
              company="Haier Appliances"
            >
              <p className="mb-2">
                Independently developed a Single Sign-On (SSO) web application, enhancing authentication and security.
              </p>
              <p className="mb-2">
                Delivered a seamless log-in and sign-up flow, improving the user experience.
              </p>
              <p className="mb-2">
                Demonstrated ability to solve complex technical challenges and work independently in a fast-paced environment.
              </p>
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