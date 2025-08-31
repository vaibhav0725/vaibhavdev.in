import { Container } from "@/components/container";
import { MainHeading } from "@/components/main-heading";
import { PageDescription } from "@/components/page-description";
import matter from "gray-matter";
import Link from "next/link";
import fs from "fs/promises";
import { BlogCard } from "@/components/blog-card";

export default async function Blogs() {
    const dir = process.cwd() + "/src/data/blogs-content"
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
                        <MainHeading>Blogs</MainHeading>
                    </div>
                    <PageDescription>
                        Discover a curated collection of bite-sized code snippets—crafted to boost your productivity and spark your next big idea.
                    </PageDescription>
                </section>
                <section className="shadow-[var(--inner-shadow)] dark:shadow-[var(--inner-dark-shadow)] dark:border-neutral-700 px-5 py-10 dark:border-y-[0.5px]">
                    <div className="flex flex-col gap-5">
                        {
                            blogsWithFrontMatter.map((blog, idx) => (
                                <Link key={idx} href={`/blogs/${blog.frontMatter.slug}`} className="block mb-4">
                                    <BlogCard 
                                        title={blog.frontMatter.title || blog.filename}
                                        timeline={blog.frontMatter.date || ''}
                                        description={blog.frontMatter.description || ''}
                                    />
                                </Link>
                            ))
                        }
                    </div>
                </section>
            </Container>
        </div>
    )
}