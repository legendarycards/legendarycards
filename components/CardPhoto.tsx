// import link artifacts
import Link from 'next/link';
import Image from "next/image";
import { cx } from "../utils/all";
import { prefix } from '../utils/prefix.js';

// CardPhoto properties
type Props = {
    href?: string;
    src: string;
    subText: string;
    titleText: string;
}

const CardPhoto: React.FC<Props> = ({ href, src, subText, titleText }: Props) => {
  const dataUrl = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

  const image = (
    <Image
      src={`${prefix}/${src}`}
      placeholder="blur"
      height={1005}
      width={720}
      blurDataURL={dataUrl}
      objectFit="cover"
      className="transition-all rounded-2xl"
      alt={`${titleText}: ${subText}`}
    />
  )

  const wrapper = (href == null || href === "") ? (
    <div>
      {image}
    </div>
  ) : (
    <Link href={`${href}`}>
      <a>
        {image}
      </a>
    </Link>
  )

  return (
    <div>
      <div className={cx("relative transition-all rounded-xl hover:scale-105", "aspect-square")}>
        {wrapper}
      </div>
      <div className="text-sm">
        {subText}
      </div>
    </div>
  )
}

export default CardPhoto;
