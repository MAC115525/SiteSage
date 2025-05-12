import { Link, useParams } from 'wouter';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { useBlogPost, useBlogPosts } from '@/hooks/use-blog';
import { format } from 'date-fns';

const BlogPost = () => {
  const { slug } = useParams();
  const { data: post, isLoading, error } = useBlogPost(slug || '');
  const { data: allPosts } = useBlogPosts();

  // Get related posts (excluding current one)
  const relatedPosts = allPosts?.filter(p => p.slug !== slug).slice(0, 3);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <p>Loading blog post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="font-heading font-bold text-2xl mb-4">Blog Post Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the blog post you're looking for.</p>
          <Link href="/blog">
            <Button>View All Blog Posts</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={post.title} 
        description={post.excerpt}
        ogImage={post.imageUrl}
        ogType="article"
      />
      
      {/* Post Header */}
      <div className="bg-secondary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary-dark font-medium mb-6">
            <i className="fa-solid fa-arrow-left text-sm mr-2"></i>
            Back to Blog
          </Link>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-neutral-darkest">{post.title}</h1>
          <div className="flex items-center text-neutral-dark text-sm mt-4">
            <i className="fa-regular fa-calendar-days mr-2"></i>
            <span>{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</span>
          </div>
        </div>
      </div>
      
      {/* Post Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-auto rounded-lg shadow-md mb-8"
              loading="eager" 
            />
            
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            {/* Social Sharing */}
            <div className="border-t border-b border-neutral-medium py-6 my-8">
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <span className="text-neutral-dark font-medium mr-4">Share this article:</span>
                  <div className="inline-flex space-x-4 mt-2 sm:mt-0">
                    <a href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="text-neutral-darkest hover:text-primary transition-colors">
                      <i className="fa-brands fa-facebook-f text-lg"></i>
                    </a>
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="text-neutral-darkest hover:text-primary transition-colors">
                      <i className="fa-brands fa-twitter text-lg"></i>
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="text-neutral-darkest hover:text-primary transition-colors">
                      <i className="fa-brands fa-linkedin-in text-lg"></i>
                    </a>
                    <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}`} className="text-neutral-darkest hover:text-primary transition-colors">
                      <i className="fa-solid fa-envelope text-lg"></i>
                    </a>
                  </div>
                </div>
                <Link href="/contact#appointment">
                  <Button className="mt-4 sm:mt-0 bg-primary hover:bg-primary-dark text-white">
                    Schedule an Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-4">Related Articles</h2>
              <p className="text-neutral-dark max-w-3xl mx-auto">
                Continue reading to learn more about dental health.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={relatedPost.imageUrl} 
                    alt={relatedPost.title} 
                    className="w-full h-48 object-cover"
                    loading="lazy" 
                  />
                  <div className="p-6">
                    <div className="flex items-center text-neutral-dark text-sm mb-2">
                      <i className="fa-regular fa-calendar-days mr-2"></i>
                      <span>{format(new Date(relatedPost.publishedAt), 'MMMM d, yyyy')}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3">{relatedPost.title}</h3>
                    <p className="text-neutral-dark mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <Link href={`/blog/${relatedPost.slug}`} className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
                      Read More
                      <i className="fa-solid fa-arrow-right text-sm ml-2"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link href="/blog">
                <Button variant="outline" className="bg-white hover:bg-neutral-medium text-primary">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-6">Have Questions About Your Dental Health?</h2>
          <p className="text-white text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Schedule a consultation to discuss your specific dental concerns.
          </p>
          <Link href="/contact#appointment">
            <Button variant="outline" className="bg-white hover:bg-neutral-medium text-primary font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out">
              Request an Appointment
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
