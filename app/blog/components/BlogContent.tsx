"use client"
import React, { useState } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';

// Type definitions
interface ContentItem {
    type: 'paragraph' | 'heading' | 'list' | 'code' | 'image' | 'quote' | 'callout' | 'divider';
    text?: string;
    level?: number;
    ordered?: boolean;
    items?: string[];
    code?: string;
    language?: string;
    src?: string;
    alt?: string;
    caption?: string;
    author?: string;
    variant?: string;
    title?: string;
}

interface Author {
    name: string;
    role: string;
    avatar: string;
    bio: string;
}

interface RelatedPost {
    id: number;
    title: string;
    date: Date;
    readTime: number;
}

interface BlogData {
    id: number;
    title: string;
    date: Date;
    category: string;
    readTime: number;
    tags: string[];
    excerpt: string;
    content: ContentItem[];
    author: Author;
    relatedPosts: RelatedPost[];
}

interface ContentRendererProps {
    content: ContentItem[];
}

interface BlogContentProps {
    blogData?: BlogData;
}

// Component for handling different content types
const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
    if (!content) return null;

    const renderHeading = (level: number, text: string, index: number) => {
        const className = `font-bold text-gray-900 ${level === 2 ? 'text-2xl mt-10 mb-4' : 'text-xl mt-8 mb-3'}`;

        switch (level) {
            case 1:
                return <h1 key={index} className={className}>{text}</h1>;
            case 2:
                return <h2 key={index} className={className}>{text}</h2>;
            case 3:
                return <h3 key={index} className={className}>{text}</h3>;
            case 4:
                return <h4 key={index} className={className}>{text}</h4>;
            case 5:
                return <h5 key={index} className={className}>{text}</h5>;
            case 6:
                return <h6 key={index} className={className}>{text}</h6>;
            default:
                return <h2 key={index} className={className}>{text}</h2>;
        }
    };

    return (
        <div className="space-y-6">
            {content.map((item: ContentItem, index: number) => {
                switch (item.type) {
                    case 'paragraph':
                        return <p key={index} className="text-gray-700 text-lg leading-relaxed">{item.text}</p>;

                    case 'heading':
                        return renderHeading(item.level || 2, item.text || '', index);

                    case 'list':
                        const ListTag = item.ordered ? 'ol' : 'ul';
                        return (
                            <ListTag
                                key={index}
                                className={`pl-6 mb-4 space-y-2 ${item.ordered ? 'list-decimal' : 'list-disc'}`}
                            >
                                {item.items?.map((listItem: string, idx: number) => (
                                    <li key={idx} className="text-gray-700">{listItem}</li>
                                ))}
                            </ListTag>
                        );

                    case 'code':
                        return (
                            <div key={index} className="relative my-6">
                                <pre className="bg-gray-900 text-gray-100 p-5 rounded-xl overflow-x-auto text-sm">
                                    <code>{item.code}</code>
                                </pre>
                                {item.language && (
                                    <div className="absolute top-0 right-0 bg-gray-700 text-gray-300 px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs">
                                        {item.language}
                                    </div>
                                )}
                            </div>
                        );

                    case 'image':
                        return (
                            <div key={index} className="my-8">
                                <img
                                    src={item.src}
                                    alt={item.alt || ''}
                                    className="rounded-xl shadow-md w-full object-cover"
                                />
                                {item.caption && (
                                    <p className="text-center text-gray-500 text-sm mt-2 italic">{item.caption}</p>
                                )}
                            </div>
                        );

                    case 'quote':
                        return (
                            <div key={index} className="border-l-4 border-blue-500 pl-6 py-2 my-6">
                                <blockquote className="text-xl italic text-gray-700">{item.text}</blockquote>
                                {item.author && (
                                    <p className="text-gray-600 font-medium mt-2">— {item.author}</p>
                                )}
                            </div>
                        );

                    case 'callout':
                        return (
                            <div key={index} className={`bg-${item.variant || 'blue'}-50 border-l-4 border-${item.variant || 'blue'}-500 p-4 my-6 rounded-r-lg`}>
                                <p className={`text-${item.variant || 'blue'}-800`}>
                                    <strong>{item.title || 'Note'}:</strong> {item.text}
                                </p>
                            </div>
                        );

                    case 'divider':
                        return <hr key={index} className="my-8 border-gray-200" />;

                    default:
                        return null;
                }
            })}
        </div>
    );
};

const BlogContent: React.FC<BlogContentProps> = ({ blogData }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    // Default data if none is passed
    const defaultData: BlogData = {
        id: 1,
        title: 'Prisma – "TypeError: The \'payload\' argument must be of type object..."',
        date: new Date(2024, 11, 9),
        category: 'backend',
        readTime: 5,
        tags: ['prisma', 'typescript', 'error handling'],
        excerpt: 'Learn how to solve the common Prisma error "TypeError: The \'payload\' argument must be of type object" with step-by-step solutions and best practices.',
        content: [
            { type: 'paragraph', text: 'Have you also been facing this weird error? "TypeError: The \'payload\' argument must be of type object..." This common Prisma issue occurs when you\'re trying to pass incorrect data types to Prisma methods.' },
            { type: 'heading', level: 2, text: 'Understanding the Error' },
            { type: 'paragraph', text: 'This error typically happens when you\'re trying to pass incorrect data types to Prisma methods. Let\'s examine the root causes:' },
            { type: 'callout', variant: 'blue', text: 'Always validate your input data before passing it to Prisma methods. This will save you hours of debugging!' },
            { type: 'heading', level: 3, text: 'Common Scenarios' },
            { type: 'list', items: [
                'Incorrect create/update payload structure',
                'Missing required fields in your model',
                'Type mismatches between input and schema',
                'Passing arrays instead of objects'
            ]},
            { type: 'code', language: 'javascript', code: '// Problematic code example\nawait prisma.user.create(\'invalid payload\');' },
            { type: 'heading', level: 2, text: 'The Solution' },
            { type: 'paragraph', text: 'To fix this, ensure you\'re passing proper objects to Prisma client methods. Here\'s the correct approach:' },
            { type: 'code', language: 'javascript', code: '// Correct implementation\nawait prisma.user.create({\n  data: {\n    name: \'Alice\',\n    email: \'alice@prisma.io\'\n  }\n});' },
            { type: 'heading', level: 3, text: 'Best Practices' },
            { type: 'list', ordered: true, items: [
                'Always validate input data using Zod or similar libraries',
                'Use TypeScript interfaces for type safety',
                'Enable strict mode in tsconfig.json',
                'Write unit tests for your database operations'
            ]},
            { type: 'divider' },
            { type: 'callout', variant: 'purple', title: 'Key Takeaways', text: 'Prisma expects objects for create/update operations. TypeScript can prevent many of these errors. Proper error handling can improve debugging.' }
        ],
        author: {
            name: 'Seif Eddine Saad',
            role: 'Full Stack Developer',
            avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQHKdcQFofPQrA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699892171349?e=2147483647&v=beta&t=QkOl4dPxaJ5RkaNyOIAwJ1HMe9yfmqLn9PS60XKD3VU',
            bio: 'Seif is a passionate Full Stack Developer with expertise in modern web technologies. He writes about development best practices, troubleshooting, and emerging technologies.'
        },
        relatedPosts: [
            { id: 1, title: 'Mastering Prisma ORM: Advanced Techniques', date: new Date(2024, 10, 28), readTime: 7 },
            { id: 2, title: 'TypeScript Best Practices for Backend Development', date: new Date(2024, 11, 2), readTime: 6 },
            { id: 3, title: 'Error Handling Patterns in Modern Node.js', date: new Date(2024, 11, 5), readTime: 8 }
        ]
    };

    const data = blogData || defaultData;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                {/* Back to Blog Button */}
                <div className="mb-6">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 hover:underline  transition-colors font-medium"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Blog
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Blog Header */}
                    <div className="p-8 border-b border-gray-200">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                {data.category}
                            </span>
                            <span className="text-gray-500">
                                {format(data.date, 'MMM d, yyyy')}
                            </span>
                            <span className="text-gray-500">
                                {data.readTime} min read
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {data.title}
                        </h1>

                        <p className="text-xl text-gray-600 mb-6">
                            {data.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {data.tags.map((tag: string, index: number) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Author Info */}
                    <div className="p-8 border-b border-gray-200 bg-gray-50">
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <img
                                className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                                src={data.author.avatar}
                                alt={data.author.name}
                            />
                            <div className="text-center sm:text-left">
                                <h3 className="text-lg font-bold text-gray-900">{data.author.name}</h3>
                                <p className="text-gray-600">{data.author.role}</p>
                                <p className="text-gray-700 mt-2 max-w-2xl">{data.author.bio}</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-8">
                        <ContentRenderer content={data.content} />
                    </div>

                    {/* Social/CTA Section */}

                </div>

                {/* Related Posts */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.relatedPosts.map((post: RelatedPost) => (
                            <div
                                key={post.id}
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2"></div>
                                <div className="p-5">
                                    <h4 className="font-bold text-lg text-gray-900 mb-2">{post.title}</h4>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span>{format(post.date, 'MMM d, yyyy')}</span>
                                        <span className="mx-2">•</span>
                                        <span>{post.readTime} min read</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogContent;