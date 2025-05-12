import { useQuery } from '@tanstack/react-query';
import { TeamMember } from '@shared/schema';

export function useTeamMembers() {
  return useQuery<TeamMember[]>({
    queryKey: ['/api/team-members'],
  });
}

export function useTeamMember(id: number) {
  return useQuery<TeamMember>({
    queryKey: [`/api/team-members/${id}`],
    enabled: !!id,
  });
}
