import { SbBlokData, storyblokEditable } from '@storyblok/react/rsc';

interface Props {
  blok: SbBlokData;
}

const Teaser = ({ blok }: Props) => {
  return (
    <h2 className="mb-10 text-2xl" {...storyblokEditable(blok)}>
      {blok.headline ? String(blok.headline) : null}
    </h2>
  );
};

export default Teaser;
