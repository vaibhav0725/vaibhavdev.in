import { Container } from "@/components/container";
import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from "fs/promises"
// import path from "path"
import { components } from "@/components/mdx-components";
import matter from 'gray-matter';

export default async function SingleBlog({params}: {params: {slug: string}}) {
    const {slug} = params;
    const currblog = slug;
    const dir = process.cwd() + "/src/data/blogs-content/" + currblog + ".mdx";
    const singleBlog = await fs.readFile(dir,{encoding: 'utf-8'})
    const {content,data} = matter(singleBlog);
    return (
        <div className="min-h-screen">
            <Container>
                <div className="prose prose-lg dark:prose-invert max-w-none p-5">
                    <MDXRemote source={content} components={components}/>
                </div>
            </Container>
        </div>
    )
}