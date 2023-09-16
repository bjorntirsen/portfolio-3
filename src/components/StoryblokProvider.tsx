'use client';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import DefaultPage from './pages/DefaultPage';
import Text from './embedded/Text';
import Columns84Block from './blocks/Columns84Block';
import AllProjectsBlock from './blocks/AllProjectsBlock';
import Image from './embedded/Image';

const components = {
  default_page: DefaultPage,
  text: Text,
  columns_8_4_block: Columns84Block,
  all_projects_block: AllProjectsBlock,
  image: Image
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components
});

interface Props {
  children: React.ReactNode;
}

export default function StoryblokProvider({ children }: Props) {
  return children;
}
