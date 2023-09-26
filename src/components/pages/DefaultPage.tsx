import {
  storyblokEditable,
  StoryblokComponent,
  SbBlokData
} from '@storyblok/react/rsc';

interface Props {
  blok: SbBlokData;
}

function Page({ blok }: Props) {
  return (
    <main className="mt-4 text-center" {...storyblokEditable(blok)}>
      {blok.content && Array.isArray(blok.content)
        ? blok.content.map((nestedBlok) => (
            <>
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              <div className="h-4" />
            </>
          ))
        : null}
    </main>
  );
}

export default Page;
