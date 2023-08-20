import {
  ISbStoriesParams,
  SbBlokData,
  StoryblokStory,
  getStoryblokApi
} from '@storyblok/react/rsc';

export async function fetchData() {
  let sbParams: ISbStoriesParams = { version: 'draft' };
  const storyblokApi = getStoryblokApi();
  const data = await storyblokApi.get(`cdn/stories/home`, sbParams);
  return data;
}

interface Props {
  blok: SbBlokData;
}

export default async function Home({ blok }: Props) {
  const { data } = await fetchData();

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}
