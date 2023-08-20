import { SbBlokData, storyblokEditable } from '@storyblok/react/rsc';

interface Props {
  blok: SbBlokData;
}

const Feature = ({ blok }: Props) => (
  <div {...storyblokEditable(blok)}>{blok.name ? String(blok.name) : null}</div>
);

export default Feature;
