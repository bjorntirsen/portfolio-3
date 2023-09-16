import { Project } from '@/types/StoryblokTypes';
import ProjectCard from '../ProjectCard';

type Props = {
  projects: Project[];
};

export default function AllProjectsBlock({ projects }: Props) {
  return (
    <>
      <p>Placeholder</p>
      {projects
        ? projects.map((project: Project) => (
            <ProjectCard project={project} key={project.id} />
          ))
        : null}
    </>
  );
}
