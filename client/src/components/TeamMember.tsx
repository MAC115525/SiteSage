import { TeamMember as TeamMemberType } from '@shared/schema';

interface TeamMemberProps {
  member: TeamMemberType;
}

const TeamMember = ({ member }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img 
        src={member.imageUrl} 
        alt={member.name} 
        className="w-full h-64 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h4 className="font-heading font-semibold text-xl mb-1">{member.name}</h4>
        <p className="text-primary font-medium mb-3">{member.title}</p>
        <p className="text-neutral-dark text-sm">
          {member.bio}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
