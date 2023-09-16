import NextImage from 'next/image';

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface ImageStoryblok {
  image: {
    alt: string;
    filename: string;
    name: string;
  };
}

interface Props {
  blok: ImageStoryblok;
}

export default function Image({ blok }: Props) {
  const { alt, filename } = blok.image;
  // return the image as a Next.js Image component
  // make sure it is responsive
  return (
    <NextImage
      alt={alt}
      src={filename}
      layout="responsive"
      width={1}
      height={1}
    />
  );

  // return <NextImage alt={alt} src={filename} layout="fill" />;
}
