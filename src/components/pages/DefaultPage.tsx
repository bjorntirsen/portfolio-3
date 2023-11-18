import {
  storyblokEditable,
  StoryblokComponent,
  SbBlokData
} from '@storyblok/react/rsc';

interface Props {
  blok: SbBlokData;
}

export default function Page({ blok }: Props) {
  return (
    <main className="mx-2 mt-4 text-center" {...storyblokEditable(blok)}>
      {blok.content && Array.isArray(blok.content)
        ? blok.content.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))
        : null}
    </main>
  );
}
