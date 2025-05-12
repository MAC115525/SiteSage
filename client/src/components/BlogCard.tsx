import { Link } from 'wouter';
import { BlogPost } from '@shared/schema';
import { format } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="w-full h-48 object-cover"
        loading="lazy" 
      />
      <div className="p-6">
        <div className="flex items-center text-neutral-dark text-sm mb-2">
          <i className="fa-regular fa-calendar-days mr-2"></i>
          <span>{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</span>
        </div>
        <h3 className="font-heading font-semibold text-xl mb-3">{post.title}</h3>
        <p className="text-neutral-dark mb-4">
          {post.excerpt}
        </p>
        <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
          Read More
          <i className="fa-solid fa-arrow-right text-sm ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
