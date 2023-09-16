import 'dotenv/config';
import StoryblokClient from 'storyblok-js-client';
import { ProjectData } from './fetchApiData';

const Storyblok = new StoryblokClient({
  oauthToken: process.env.PERSONAL_ACCESS_TOKEN
});

async function createStoryblokProject(project: ProjectData) {
  try {
    const {
      title,
      subtitle,
      description,
      dateFirstCompleted,
      siteLink,
      githubRepo,
      slug
    } = project;
    const response = await Storyblok.post(
      `spaces/${process.env.SPACE_ID}/stories/`,
      {
        story: {
          name: title,
          slug,
          content: {
            component: 'project',
            subtitle,
            description,
            dateFirstCompleted,
            deploy: siteLink,
            repo: githubRepo
          },
          parent_id: process.env.PROJECTS_FOLDER_ID
        },
        publish: 1
      }
    );
    console.log('Project created:', response);
  } catch (error) {
    console.error('Error creating Project:', error);
  }
}
export default createStoryblokProject;
