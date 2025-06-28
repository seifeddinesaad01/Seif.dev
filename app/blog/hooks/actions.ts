import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

/**
 * Fetches all published blogs sorted by publish date (newest first)
 * @returns {Promise<Array>} Array of blog objects
 */
export const getAllBlogs = async () => {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select(
        `
        id,
        title,
        slug,
        excerpt,
        category,
        publish_date,
        read_time,
        tags,
        author,
        created_at
      `
      )
      .eq("is_published", true)
      .order("publish_date", { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error: any) {
    console.error("Error fetching blogs:", error.message);
    return [];
  }
};

/**
 * Fetches published blogs filtered by category
 * @param {string} category - Category to filter by
 * @returns {Promise<Array>} Array of blog objects in the specified category
 */
export const getBlogsByCategory = async (category: string) => {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select(
        `
          id,
          title,
          slug,
          excerpt,
          category,
          publish_date,
          read_time,
          tags,
          author,
          created_at
        `
      )
      .eq("is_published", true)
      .eq("category", category)
      .order("publish_date", { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error: any) {
    console.error(`Error fetching ${category} blogs:`, error.message);
    return [];
  }
};


/**
 * Fetches a single blog post by its slug
 * @param {string} slug - Unique slug identifier
 * @returns {Promise<Object|null>} Full blog object or null if not found
 */
export const getBlogBySlug = async (slug:string) => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();
  
      if (error) throw error;
      return data;
    } catch (error:any) {
      console.error(`Error fetching blog ${slug}:`, error.message);
      return null;
    }
  };