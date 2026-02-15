import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blogPosts";

const BlogCard = ({ post }: { post: BlogPost }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-card rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-muted-foreground mb-2">{formattedDate}</p>
        <h3 className="text-lg font-semibold text-primary mb-3 leading-snug">
          {post.title}
        </h3>
        <p className="text-foreground/70 leading-relaxed text-sm mb-6 flex-1">
          {post.excerpt}
        </p>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity self-start"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
