interface Props {
  blok: {
    element: 'p' | 'h1' | 'h2';
    text: string;
    size: 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl';
  };
}

export default function Text({ blok }: Props) {
  const { element, text, size } = blok;
  switch (element) {
    case 'h1':
      return <h1 className={`${size}`}>{text}</h1>;
    case 'h2':
      return <h2 className={`${size}`}>{text}</h2>;
    default:
      return <p className={`${size}`}>{text}</p>;
  }
}
