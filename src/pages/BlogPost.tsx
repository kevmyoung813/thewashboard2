import { usePageMeta } from "@/hooks/usePageMeta";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { MapPin, Phone } from "lucide-react";
import { contactInfo } from "@/data/contact";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  usePageMeta({
    title: post
      ? `${post.title} | The Washboard Murray KY`
      : "Blog Post Not Found | The Washboard",
    description: post
      ? post.excerpt
      : "The requested blog post could not be found.",
    ogType: post ? "article" : "website",
  });

  if (!post) return <NotFound />;

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <article className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <Link
              to="/blog"
              className="text-sm text-muted-foreground hover:text-primary transition-colors mb-8 inline-block"
            >
              ← Back to Blog
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-sm text-muted-foreground mb-10">{formattedDate}</p>

            {/* Rendered markdown-like content */}
            <div className="prose-washboard">
              {post.content.split("\n\n").map((block, i) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-xl md:text-2xl font-bold mt-10 mb-4"
                    >
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                if (block.startsWith("- ")) {
                  const items = block.split("\n").filter((l) => l.startsWith("- "));
                  return (
                    <ul key={i} className="list-disc list-inside space-y-1 mb-6 text-foreground/80 leading-relaxed">
                      {items.map((item, j) => (
                        <li key={j}>{item.replace("- ", "")}</li>
                      ))}
                    </ul>
                  );
                }
                if (/^\d+\.\s/.test(block)) {
                  const items = block.split("\n").filter((l) => /^\d+\.\s/.test(l));
                  return (
                    <ol key={i} className="list-decimal list-inside space-y-1 mb-6 text-foreground/80 leading-relaxed">
                      {items.map((item, j) => (
                        <li key={j}>{item.replace(/^\d+\.\s/, "")}</li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p key={i} className="text-foreground/80 leading-relaxed mb-6">
                    {block}
                  </p>
                );
              })}
            </div>
          </div>
        </article>

        {/* CTA Band */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold !text-primary-foreground mb-8">
              Need Help With Your Laundry?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-8 py-3 text-sm font-semibold text-primary hover:opacity-90 transition-opacity"
              >
                <MapPin size={18} />
                Get Directions
              </a>
              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                <Phone size={18} />
                Call {contactInfo.phoneFormatted}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
