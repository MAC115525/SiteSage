import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@shared/schema';

export function useBlogPosts() {
  return useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
  });
}

export function useBlogPost(slug: string) {
  return useQuery<BlogPost>({
    queryKey: [`/api/blog-posts/${slug}`],
    enabled: !!slug,
  });
}
