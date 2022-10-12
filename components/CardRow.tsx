// import link artifacts
import Link from 'next/link';

// import { parseISO, format } from "date-fns";
// import { PhotographIcon } from "@heroicons/react/outline";

import CategoryBadge from "./CategoryBadge";
import CardPhoto from './CardPhoto';
import CardTitle from './CardTitle';

import Carousel from './Carousel';

import { ICard } from '../types/card.js';

type Props = {
    card: ICard;
    listView: boolean;
    // If a search was used on the card list.
    search?: string;
}

const CardRow: React.FC<Props> = ({ card, listView, search }: Props) => {
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

  // Only linkify if we are in the list view.
  const cardLink = (listView) ? `cards/${card.slug}` : "";

  // Display either the two cards or a Carousel.
  const images = (card._group == null || card._group.length == 0) ? (
    <div className="grid gap-6 grid-cols-2 p-4">
      <CardPhoto href={cardLink} src={card._normalVersion} subText="Normal Version" titleText={card.title} />
      <CardPhoto href={cardLink} src={card._rareVersion} subText="Rare Version" titleText={card.title}  />
    </div>
  ) : (
    <Carousel group={card._group} groupPrefix={card._groupPrefix} groupLink={cardLink} titleText={card.title} search={search} />
  );

  return (
    <>
      <div className="group relative rounded-xl bg-slate-900 mb-8 p-4 pb-2 row">
        {images}
        <CategoryBadge color={card.category} />
        <CardTitle href={cardLink} titleText={card.title} />
        {card.description && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
            {card.description}
          </p>
        )}
      </div>
    </>
  )
}

// export Thumbnail module
export default CardRow;
