import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  usePageMeta({
    title: "Laundry Tips & Updates - The Washboard Murray KY",
    description:
      "Helpful laundry guidance for Murray State students and Calloway County families. Local tips from your neighborhood laundromat.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Laundry Tips & Updates from The Washboard
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Helpful laundry guidance, service updates, and local information for customers in Murray, KY and Calloway County.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="pb-20 md:pb-28 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
