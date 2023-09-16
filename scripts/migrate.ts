import createStoryblokProject from './createStoryblokProject';
import fetchProjects from './fetchApiData';

async function main() {
  const apiData = await fetchProjects();
  await Promise.all(
    apiData.map(async (project) => await createStoryblokProject(project))
  );
}

main();
