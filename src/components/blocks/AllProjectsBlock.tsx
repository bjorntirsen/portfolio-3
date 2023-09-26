import { Project } from '@/types/StoryblokTypes';
import { ISbStoriesParams, getStoryblokApi } from '@storyblok/react/rsc';
import ProjectCard from '../ProjectCard';

async function fetchProjects() {
  let sbParams: ISbStoriesParams = {
    version: 'draft',
    content_type: 'project',
    sort_by: 'content.dateFirstCompleted:desc'
  };
  const storyblokApi = getStoryblokApi();
  const data = await storyblokApi.get(`cdn/stories/`, sbParams);
  return data;
}

export default async function AllProjectsBlock() {
  const { data } = await fetchProjects();
  return (
    <section className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4">
      {data.stories.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
