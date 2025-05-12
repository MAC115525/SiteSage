import { useQuery } from '@tanstack/react-query';
import { Specialization } from '@shared/schema';

export function useSpecializations() {
  return useQuery<Specialization[]>({
    queryKey: ['/api/specializations'],
  });
}

export function useSpecialization(slug: string) {
  return useQuery<Specialization>({
    queryKey: [`/api/specializations/${slug}`],
    enabled: !!slug,
  });
}
