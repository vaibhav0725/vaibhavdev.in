import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { getAllBlogFrontmatters } from "@/lib/mdx";
import { Metadata } from "next";
import { Link } from "next-view-transitions"

export const metadata:Metadata={
    
}

export default async function BlogPage() {
  const truncate = (str:string,len:number) =>{
    return str.length>len ? str.substring(0,len) + '...' : str;
  }

  const blogs = await getAllBlogFrontmatters();
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <Heading>All Blogs</Heading>
        <Subheading>I am a software engineer, I love to code and build things.</Subheading>
        <div className="flex flex-col gap-4 py-10">
          {
            blogs.map((blog,idx)=>(
              <Link key={idx} href={`/blogs/${blog.slug}`}>
                <div className="flex justify-between items-center">
                <h2 className="text-primary text-base font-bold tracking-tight md:text-2xl">{blog.frontmatter.title}</h2>
                <p className="text-secondary text-sm md:text-sm">{new Date(blog.frontmatter.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
                <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">{truncate(blog.frontmatter.description,150)}</p>
              </Link>
            ))
          }
        </div>
      </Container>
    </div>
  );
}
