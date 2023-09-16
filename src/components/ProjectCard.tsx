import { Project } from '@/types/StoryblokTypes';

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <div className="bg-white">
      <h3>{project.name}</h3>
    </div>
  );
}

export default ProjectCard;
