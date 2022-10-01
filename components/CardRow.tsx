// import link artifacts
import Link from 'next/link';
import Image from "next/image";
import { cx } from "../utils/all";

import { parseISO, format } from "date-fns";
import { PhotographIcon } from "@heroicons/react/outline";

import CategoryBadge from "./CategoryBadge";

import { ICard } from '../types/card.js';

//import Thumbnail from './Thumbnail';

import { prefix } from '../utils/prefix.js';

// Thumbnail properties
type Props = {
    // Thumbnail title
    card: ICard;
}

const CardRow: React.FC<Props> = ({ card }: Props) => {
  const dataUrl = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

  const additionalDetails = (
    <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
    <div className="flex items-center gap-3">
      <div className="relative flex-shrink-0 w-5 h-5">
        {/* {post.author.image && ( // Reserved for Set Icon
          <Image
            src={AuthorimageProps.src}
            blurDataURL={AuthorimageProps.blurDataURL}
            loader={AuthorimageProps.loader}
            objectFit="cover"
            layout="fill"
            alt={post?.author?.name}
            placeholder="blur"
            sizes="30px"
            className="rounded-full"
          />
        )} */}
      </div>
      {/* <span className="text-sm">{post.author.name}</span> // Reserved for Set Name */}
    </div>
    <span className="text-xs text-gray-300 dark:text-gray-600">
      &bull;
    </span>
    {/* <time // Reserved for time of print.
      className="text-sm"
      dateTime={post?.publishedAt || post._createdAt}>
      {format(
        parseISO(post?.publishedAt || post._createdAt),
        "MMMM dd, yyyy"
      )}
    </time> */}
    </div>
  );

  return (
    <>
      <div className="cursor-pointer group">
        <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
          <div className={cx("relative transition-all bg-gray-100 rounded-xl dark:bg-gray-800 hover:scale-105", "aspect-square")}>
            <Link href={`cards/${card.slug}`}>
              <a>
                <Image
                  src={`${prefix}/${card.normalVersion}`}
                  placeholder="blur"
                  height={1005}
                  width={720}
                  blurDataURL={dataUrl}
                  objectFit="cover"
                  className="transition-all rounded-2xl"
                />
              </a>
            </Link>
          </div>
          <div className={cx("relative transition-all bg-gray-100 rounded-xl dark:bg-gray-800 hover:scale-105", "aspect-square")}>
            <Link href={`cards/${card.slug}`}>
              <a>
                <Image
                  src={`${prefix}/${card.rareVersion}`}
                  placeholder="blur"
                  height={1005}
                  width={720}
                  blurDataURL={dataUrl}
                  objectFit="cover"
                  className="transition-all rounded-2xl"
                />
              </a>
            </Link>
          </div>
        </div>
        <CategoryBadge color={card.category} />
        <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
          <Link href={`cards/${card.slug}`}>
            <span
              className="bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900
                bg-[length:0px_10px]
                bg-left-bottom
                bg-no-repeat
                transition-[background-size]
                duration-500
                hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
              {card.title}
            </span>
          </Link>
        </h2>

        {card.description && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
            <Link href={`cards/${card.slug}`}>
              {card.description}
            </Link>
          </p>
        )}
      </div>
    </>
  )
}

// export Thumbnail module
export default CardRow;
