import { Container } from "@/components/container";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdxFile } from "@/lib/mdx";
import matter from "gray-matter";
import { redirect } from "next/navigation";

export const metadata: Metadata = {};

export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
  const {slug} = await params;
  const blogfile = await getMdxFile(slug);
  if (!blogfile) {
    redirect('/blogs');
  }
  const { content, data } = matter(blogfile!);

  // Ensure date is a string for rendering
  // let dateString = '';
  // if (data.date) {
  //   if (typeof data.date === 'string') {
  //     dateString = data.date;
  //   } else if (data.date instanceof Date) {
  //     dateString = data.date.toISOString();
  //   } else {
  //     dateString = String(data.date);
  //   }
  // }

  return (
    <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
      <div className="prose max-w-none mt-8">
        <MDXRemote source={content} />
      </div>
    </Container>
  
  );
}
