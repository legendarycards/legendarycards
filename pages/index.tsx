import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import { ICard } from "../types/card";
import { getAllCards } from "../utils/mdxUtils";

import Layout from '../components/Layout';
import Container from '../components/Container';
import CardRow from '../components/CardRow';

// props type
type Props = {
  cards: [ICard],
  siteConfig: any
}

// component render function
const Home: NextPage<Props> = ({ cards, siteConfig }: Props) => {
  const title = "legendary.cards"
  const description = "A curated list of rare Pokemon card variants that were published by Wizards of the Coast between 1999-2003."

  return (
    <Layout {...siteConfig}>
      <Head>
        <title>{title}</title>
          <meta property="og:title" content={title} key="title" />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
      </Head>
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
    'value',
    'description',
    '_normalVersion',
    '_rareVersion',
    '_group',
    '_groupPrefix',
    'category',
    'set',
  ]);

  // return the cards props
  return { props: { cards } }
}
