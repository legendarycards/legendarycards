// import link artifacts
import Link from 'next/link';
// import image artifacts
import Image from 'next/image';

import { prefix } from '../utils/prefix.js';

// Thumbnail properties
type Props = {
    // Thumbnail title
    title: string;
    // Thumbnail image src
    src: string;
    // Thumbnail slug link
    slug?:string;
}


const Thumbnail: React.FC<Props> = ({ title, src, slug}: Props) => {
  // Add the Thumbnail cover image
  const image = (
    <Image
    height={720}
    width={1280}
    src={`${prefix}/${src}`}
    alt={`Thumbnail cover image ${title}`}
    />
  );

  // return the Thumbnail cover image slug
  return (
    <>
    {slug ? (
      <Link href={`/cards/${slug}`}>
        <a aria-label={title}>{image}</a>
      </Link>
    ) : (
      image
    )}
    </>
  )
}

// export Thumbnail module
export default Thumbnail;
