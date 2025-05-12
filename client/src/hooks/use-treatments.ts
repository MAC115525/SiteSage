import { useQuery } from '@tanstack/react-query';
import { Treatment, TreatmentCategory } from '@shared/schema';

export function useTreatmentCategories() {
  return useQuery<TreatmentCategory[]>({
    queryKey: ['/api/treatment-categories'],
  });
}

export function useTreatments() {
  return useQuery<Treatment[]>({
    queryKey: ['/api/treatments'],
  });
}

export function useTreatmentsByCategory(categoryId: number) {
  return useQuery<Treatment[]>({
    queryKey: [`/api/treatments/category/${categoryId}`],
    enabled: !!categoryId,
  });
}

export function useTreatment(slug: string) {
  return useQuery<Treatment>({
    queryKey: [`/api/treatments/${slug}`],
    enabled: !!slug,
  });
}
