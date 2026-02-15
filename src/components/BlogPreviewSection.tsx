import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";

const BlogPreviewSection = () => {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            From Our Blog
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Helpful laundry tips and updates for the Murray community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
