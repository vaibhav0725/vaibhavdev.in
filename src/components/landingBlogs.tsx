import { getAllBlogFrontmatters } from "@/lib/mdx";
import { Link } from "next-view-transitions"


export const LandingBlogs = async () => {
    const truncate = (str:string,len:number) =>{
        return str.length>len ? str.substring(0,len) + '...' : str;
      }
    
      const blogs = await getAllBlogFrontmatters();
    return <div className="py-10">
        <p className="text-secondary text-sm md:text-base pt-3">I love to write.</p>
        <div className="flex flex-col gap-4 py-4">
            {
                blogs.map((blog,idx)=>(
                <>
                    {
                        idx < 2 && (<Link key={idx} href={`/blogs/${blog.slug}`}>
                            <div className="flex justify-between items-center">
                                <h2 className="text-primary text-base font-bold tracking-tight md:text-2xl">{blog.frontmatter.title}</h2>
                                <p className="text-secondary text-sm md:text-sm">{new Date(blog.frontmatter.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                            </div>
                            <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">{truncate(blog.frontmatter.description,150)}</p>
                        </Link>)
                    }
                </>
                ))
            }
        </div>
    </div>
}