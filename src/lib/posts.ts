import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  content: string;
}

export function getPosts(): Post[] {
  const posts: Post[] = [];
  
  try {
    const files = require("fs").readdirSync(postsDirectory);
    
    for (const file of files) {
      if (!file.endsWith(".md")) continue;
      
      const filePath = path.join(postsDirectory, file);
      const fileContent = require("fs").readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);
      
      posts.push({
        slug: file.replace(/\.md$/, ""),
        title: data.title || "",
        date: data.date || "",
        tags: data.tags || [],
        summary: data.summary || "",
        content,
      });
    }
    
    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  } catch {
    return [];
  }
}

export function getPost(slug: string): Post | null {
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContent = require("fs").readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    
    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      tags: data.tags || [],
      summary: data.summary || "",
      content,
    };
  } catch {
    return null;
  }
}
