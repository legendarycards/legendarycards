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
    'date',
    'description',
    'normalVersion',
    'rareVersion',
    'category',
  ]);

  // return the cards props
  return { props: { cards } }
}
