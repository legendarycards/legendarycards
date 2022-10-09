import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import { ICard } from "../types/card";
import { getAllCards } from "../utils/mdxUtils";

import Layout from '../components/Layout';
import Container from '../components/Container';
import CardRow from '../components/CardRow';

// for searching
import { useState, useEffect } from "react";

// props type
type Props = {
  cards: [ICard],
  siteConfig: any
}

// component render function
const Home: NextPage<Props> = ({ cards, siteConfig }: Props) => {
  const title = "legendary.cards"
  const description = "A curated list of rare Pokemon card variants that were published by Wizards of the Coast between 1999-2003."

  const [search, setSearch] = useState("");
  const [filteredCards, setFilteredCards] = useState<ICard[]>([]);

  useEffect(() => {
    setFilteredCards(
      cards.filter((card) =>
        card.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || card.description.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  }, [search, cards]);

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
            <div className="relative w-1/3 center mx-auto mb-4">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <input type="text" id="card-search"
                className="bg-gray-50 border text-sm rounded-lg block w-full pl-10 p-2.5 bg-gray-800 border-gray-700 placeholder-gray-400 text-white focus:ring-sky-500 focus:border-sky-500"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search" required />
            </div>
            {filteredCards.map((card) => (
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
