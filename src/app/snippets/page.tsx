import { Container } from "@/components/container";
import { MainHeading } from "@/components/main-heading";
import { PageDescription } from "@/components/page-description";
import { SnippetCard } from "@/components/snippet-card";
import fs from "fs/promises";
import matter from "gray-matter";
import Link from "next/link";


export default async function Snippets() {
    const dir = process.cwd() + "/src/data/snippets-content"
    const blogs = await fs.readdir(dir);
    
    // Get front matter for all blogs
    const blogsWithFrontMatter = await Promise.all(
        blogs.map(async (blogfile) => {
            const singleBlog = await fs.readFile(dir + "/" + blogfile, 'utf-8');
            const { data } = matter(singleBlog);
            return {
                filename: blogfile,
                frontMatter: data
            };
        })
    );
    return (
        <div className="min-h-screen">
            <Container>
                <section className="p-5">
                    <div className="flex items-center gap-3">
                        <MainHeading>Snippets</MainHeading>
                    </div>
                    <PageDescription>
                        Discover a curated collection of bite-sized code snippets—crafted to boost your productivity and spark your next big idea.
                    </PageDescription>
                </section>
                <section className="p-5 grid grid-cols-2 gap-5">
                    {blogsWithFrontMatter.map((snip,idx)=>(
                        <Link href={`/snippets/${snip.frontMatter.slug}`} key={idx}>
                            <SnippetCard title={snip.frontMatter.title} description={snip.frontMatter.description}/>
                        </Link>
                    ))}
                </section>
            </Container>
        </div>
    )
}