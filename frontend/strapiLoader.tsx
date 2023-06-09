import { ImageLoaderProps } from 'next/image';

const strapiLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `http://localhost:1337${src}?w=${width}&q=${quality || 75}`;
};

export default strapiLoader;