// app/blog/[blogId]/page.tsx

import React from 'react';
import { notFound } from 'next/navigation';
import { getAllBlogs, getBlogBySlug } from '../hooks/actions';
import BlogContent from '../components/BlogContent';

type BlogPageProps = {
  params: {
    blogId: string;
  };
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { blogId } = params;

  // Fetch the blog by its slug
  const blogData = await getBlogBySlug(blogId);
  if (!blogData) {
    notFound();
  }

  // Fetch all blogs and pick 3 related posts excluding the current one
  const allBlogs = await getAllBlogs();
  const relatedPosts = allBlogs
    .filter((b) => b.slug !== blogId)
    .slice(0, 3)
    .map((b) => ({
      id: b.id,
      title: b.title,
      date: new Date(b.publish_date),
      readTime: b.read_time,
    }));

  // Transform Supabase data into the shape BlogContent expects
  const transformedBlogData = {
    id: blogData.id,
    title: blogData.title,
    date: new Date(blogData.publish_date),
    category: blogData.category,
    readTime: blogData.read_time,
    tags: blogData.tags ?? [],
    excerpt: blogData.excerpt,
    content: blogData.content ?? [],
    author: {
      name: blogData.author?.name ?? 'Seif Eddine Saad',
      role: blogData.author?.role ?? 'Full Stack Developer',
      avatar:
        blogData.author?.avatar ??
        'https://media.licdn.com/dms/image/v2/D4E03AQHKdcQFofPQrA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699892171349?e=2147483647&v=beta&t=QkOl4dPxaJ5RkaNyOIAwJ1HMe9yfmqLn9PS60XKD3VU',
      bio:
        blogData.author?.bio ??
        'Seif is a passionate Full Stack Developer with expertise in modern web technologies. He writes about development best practices, troubleshooting, and emerging technologies.',
    },
    relatedPosts,
  };

  return <BlogContent blogData={transformedBlogData} />;
}
