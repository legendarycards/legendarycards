import Thumbnail from '../components/Thumbnail';
import type { NextPage, GetStaticProps } from 'next'
import { ICard } from "../types/card";
import Link from 'next/link'
import { getAllCards } from "../utils/mdxUtils";

// props type
type Props = {
  cards: [ICard]
}

// component render function
const Home: NextPage<Props> = ({ cards }: Props) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">
        Cards List
      </h1>

      <div className="space-y-12">
        {cards.map((card) => (
          <div key={card.slug}>
            <div className="mb-4"> 
              <Thumbnail
                slug={card.slug}
                title={card.title}
                src={card.normalVersion}
              />
              <Thumbnail
                slug={card.slug}
                title={card.title}
                src={card.rareVersion}
              />
            </div>

            <h2 className="text-2xl font-bold mb-4">
              <Link href={`/cards/${card.slug}`}>
                <a>{card.title}</a>
              </Link>
            </h2>

            <p>{card.description} {card.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

// get cards from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
  const cards = getAllCards([
    'title',
    'slug',
    'date',
    'description',
    'normalVersion',
    'rareVersion',
    'category',
  ]);

  // return the cards props
  return { props: { cards } }
}
