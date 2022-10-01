import CardRow from '../components/CardRow';
import type { NextPage, GetStaticProps } from 'next'
import { ICard } from "../types/card";
import { getAllCards } from "../utils/mdxUtils";

import Layout from '../components/Layout';
import Container from '../components/Container';

// props type
type Props = {
  cards: [ICard],
  siteConfig: any
}

// component render function
const Home: NextPage<Props> = ({ cards, siteConfig }: Props) => {
  return (
    <Layout {...siteConfig}>
      <Container>
        <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          Card List
        </h1>
        <div className="max-w-screen-md mx-auto ">
          <div className="text-center">
            {cards.map((card) => (
              <div key={card.slug}>
                <CardRow listView={true} card={card} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Home

// get cards from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
  const cards = getAllCards([
    'title',
    'slug',
    'value',
    'description',
    'normalVersion',
    'rareVersion',
    'category',
    'set',
  ]);
  console.log(cards);

  // return the cards props
  return { props: { cards } }
}
