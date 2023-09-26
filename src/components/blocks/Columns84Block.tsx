import {
  storyblokEditable,
  StoryblokComponent,
  SbBlokData
} from '@storyblok/react/rsc';

interface Props {
  blok: SbBlokData;
}

export default function Columns84Block({ blok }: Props) {
  const { first_column, second_column } = blok;
  return (
    <section
      className="mx-auto grid max-w-6xl grid-cols-12 gap-4"
      {...storyblokEditable(blok)}
    >
      <div className="col-span-12 m-auto sm:col-span-8">
        {first_column && Array.isArray(first_column)
          ? first_column.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))
          : null}
      </div>
      <div className="col-span-12 sm:col-span-4">
        {second_column && Array.isArray(second_column)
          ? second_column.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))
          : null}
      </div>
    </section>
  );
}
