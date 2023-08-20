import {
  storyblokEditable,
  StoryblokComponent,
  SbBlokData
} from '@storyblok/react/rsc';

interface Props {
  blok: SbBlokData;
}

const Page = ({ blok }: Props) => (
  <main className="mt-4 text-center" {...storyblokEditable(blok)}>
    {blok.body && Array.isArray(blok.body)
      ? blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))
      : null}
  </main>
);

export default Page;
