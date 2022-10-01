// import link artifacts
import Link from 'next/link';

// CardTitle properties
type Props = {
    href?: string;
    titleText: string;
}

const CardTitle: React.FC<Props> = ({ href, titleText }: Props) => {
  const title = (
    <span
      className="bg-gradient-to-r from-sky-900 to-purple-900
        bg-[length:0px_10px]
        bg-left-bottom
        bg-no-repeat
        transition-[background-size]
        duration-500
        hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
      {titleText}
    </span>
  )

  const wrapper = (href == null || href === "") ? (
    <div>
      {title}
    </div>
  ) : (
    <Link href={href}>
      <a>
        {title}
      </a>
    </Link>
  )

  return (
    <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary text-white">
      {wrapper}
    </h2>
  )
}

export default CardTitle;
