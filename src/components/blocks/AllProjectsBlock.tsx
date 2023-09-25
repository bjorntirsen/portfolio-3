import { Project } from '@/types/StoryblokTypes';
import { ISbStoriesParams, getStoryblokApi } from '@storyblok/react/rsc';
import ProjectCard from '../ProjectCard';

async function fetchProjects() {
  let sbParams: ISbStoriesParams = {
    version: 'draft',
    content_type: 'project'
  };
  const storyblokApi = getStoryblokApi();
  const data = await storyblokApi.get(`cdn/stories/`, sbParams);
  return data;
}

export default async function AllProjectsBlock() {
  const { data } = await fetchProjects();
  return (
    <>
      <p>Placeholder</p>
      {data.stories.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </>
  );
}
