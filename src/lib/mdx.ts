import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogFrontmatter = {
  title?: string;
  slug?: string;
  date: string;
  description: string;
  src?: string;
  [key: string]: unknown;
};

export async function getMdxFile(slug: string) {
  const filePath = path.join(process.cwd(), "src/data", `${slug}.mdx`);
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    if (!fileContent) return null;
    return fileContent;
  } catch (error: unknown) {
    if (typeof error === "object" && error !== null && "code" in error && (error as { code?: string }).code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

// New function to get all blog frontmatters
export async function getAllBlogFrontmatters(): Promise<{ slug: string; frontmatter: BlogFrontmatter }[]> {
  const dataDir = path.join(process.cwd(), "src/data");
  const files = await fs.readdir(dataDir);
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  const blogs = await Promise.all(
    mdxFiles.map(async (file) => {
      const filePath = path.join(dataDir, file);
      const fileContent = await fs.readFile(filePath, "utf-8");
      const { data } = matter(fileContent);
      const slug = file.replace(/\.mdx$/, "");
      return { slug, frontmatter: data as BlogFrontmatter };
    })
  );

  return blogs;
}

