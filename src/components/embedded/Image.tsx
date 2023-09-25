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
  return (
    <div className="relative h-full w-full">
      <NextImage
        priority
        alt={alt}
        src={filename}
        width={250}
        height={250}
        className="m-auto"
      />
    </div>
  );
}
