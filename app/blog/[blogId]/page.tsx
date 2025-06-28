import React from 'react';
import { notFound } from 'next/navigation';
import BlogContent from '../components/BlogContent';
import { getBlogBySlug, getAllBlogs } from '../hooks/actions';

interface PageProps {
  params: {
    blogId: string;
  };
}

const BlogPage = async ({ params }: PageProps) => {
  const { blogId } = params;
  
  // Fetch blog data by slug
  const blogData = await getBlogBySlug(blogId);
  
  // If blog not found, show 404
  if (!blogData) {
    notFound();
  }
  
  // Fetch all blogs for related posts
  const allBlogs = await getAllBlogs();
  
  // Get first 3 blogs excluding the current blog post
  const relatedPosts = allBlogs
    .filter(blog => blog.slug !== blogId)
    .slice(0, 3)
    .map(blog => ({
      id: blog.id,
      title: blog.title,
      date: new Date(blog.publish_date),
      readTime: blog.read_time
    }));
  
  // Transform the Supabase data to match the BlogContent component's expected format
  const transformedBlogData = {
    id: blogData.id,
    title: blogData.title,
    date: new Date(blogData.publish_date),
    category: blogData.category,
    readTime: blogData.read_time,
    tags: blogData.tags || [],
    excerpt: blogData.excerpt,
    content: blogData.content || [], // Assuming content is stored in the database
    author: {
      name: blogData.author?.name || 'Seif Eddine Saad',
      role: blogData.author?.role || 'Full Stack Developer',
      avatar: blogData.author?.avatar || 'https://media.licdn.com/dms/image/v2/D4E03AQHKdcQFofPQrA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699892171349?e=2147483647&v=beta&t=QkOl4dPxaJ5RkaNyOIAwJ1HMe9yfmqLn9PS60XKD3VU',
      bio: blogData.author?.bio || 'Seif is a passionate Full Stack Developer with expertise in modern web technologies. He writes about development best practices, troubleshooting, and emerging technologies.'
    },
    relatedPosts: relatedPosts
  };

  return <BlogContent blogData={transformedBlogData} />;
};

export default BlogPage;