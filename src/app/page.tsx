import {
  ISbStoriesParams,
  StoryblokStory,
  getStoryblokApi
} from '@storyblok/react/rsc';

async function fetchData() {
  let sbParams: ISbStoriesParams = { version: 'draft' };
  const storyblokApi = getStoryblokApi();
  const data = await storyblokApi.get(`cdn/stories/home`, sbParams);
  return data;
}

export default async function Home() {
  const { data } = await fetchData();
  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}
