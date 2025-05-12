import { Link } from 'wouter';
import SEO from '@/components/SEO';
import BlogCard from '@/components/BlogCard';
import { useBlogPosts } from '@/hooks/use-blog';

const Blog = () => {
  const { data: blogPosts, isLoading } = useBlogPosts();

  return (
    <>
      <SEO 
        title="Dental Health Blog" 
        description="Stay informed with dental health tips, news, and educational content from our experienced dental team." 
      />
      
      {/* Page Header */}
      <div className="bg-secondary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-darkest text-center">Dental Health Blog</h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          <p className="text-center text-neutral-dark max-w-3xl mx-auto mt-6">
            Stay informed with the latest dental health tips, practice news, and educational content.
          </p>
        </div>
      </div>
      
      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <p>Loading blog posts...</p>
            </div>
          ) : blogPosts && blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p>No blog posts found. Check back soon for new content!</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-6">Stay Updated on Dental Health</h2>
            <p className="text-neutral-dark mb-8">
              Subscribe to our newsletter to receive dental health tips, practice news, and special offers directly to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 border border-neutral-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light" 
                required 
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-md transition duration-300 ease-in-out"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-neutral-dark mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>
      
      {/* Dental Topics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-4">Popular Dental Topics</h2>
            <p className="text-neutral-dark max-w-3xl mx-auto">
              Explore these common dental topics to learn more about maintaining your oral health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog#oral-hygiene">
              <div className="bg-secondary rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                  <i className="fa-solid fa-tooth text-white text-2xl"></i>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Oral Hygiene</h3>
                <p className="text-neutral-dark">Tips for maintaining healthy teeth and gums at home</p>
              </div>
            </Link>
            
            <Link href="/blog#cosmetic-dentistry">
              <div className="bg-secondary rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                  <i className="fa-solid fa-sparkles text-white text-2xl"></i>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Cosmetic Dentistry</h3>
                <p className="text-neutral-dark">Options for improving the appearance of your smile</p>
              </div>
            </Link>
            
            <Link href="/blog#pediatric-dental-care">
              <div className="bg-secondary rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                  <i className="fa-solid fa-child text-white text-2xl"></i>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Children's Dental Health</h3>
                <p className="text-neutral-dark">Guidance for parents on caring for children's teeth</p>
              </div>
            </Link>
            
            <Link href="/blog#dental-anxiety">
              <div className="bg-secondary rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                  <i className="fa-solid fa-heart-pulse text-white text-2xl"></i>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Dental Anxiety</h3>
                <p className="text-neutral-dark">Strategies for managing fear and anxiety about dental visits</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
