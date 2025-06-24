import React from "react";
import BlogList from "./components/BlockList";
import Footer from "../components/Footer";

const BlogPage = () => (
  <main className="container mx-auto py-12 px-4">
    <BlogList />
    <Footer />
  </main>
);

export default BlogPage; 