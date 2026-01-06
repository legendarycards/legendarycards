import { serialize } from 'next-mdx-remote/serialize';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head'
import Image from 'next/image';
import { ExternalLinkIcon } from '@heroicons/react/outline';

import { useEffect } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import CardRow from '../../components/CardRow';
import { ICard } from '../../types/card';
import { getCard, getAllCards } from '../../utils/mdxUtils';
import { ParsedUrlQuery } from 'querystring';

import Layout from '../../components/Layout';
import Container from '../../components/Container';
import BackButton from '../../components/BackButton';

// import Prerequisites from '../../components/Prerequisites';
// import Stacks from '../../components/Stacks';

// props type
type Props = {
  source: MDXRemoteSerializeResult,
  siteConfig?: any,
  frontMatter: Omit<ICard, 'slug'>;
}

// components to render
const components = {
  // Prerequisites,
  // Stacks,
}

const CardPage: React.FC<Props> = ({ source, siteConfig, frontMatter }: Props) => {

  // get setters
  // if we want to include elements to render on each card (likely)
  // const { setPrerequisites, setStacks } = useMdxComponentsContext();

  useEffect(() => {
    // set prerequisites
    // setPrerequisites(frontMatter.prerequisites);
    // set stacks
    // setStacks(frontMatter.stacks);
  }, [
    // setPrerequisites,
    // setStacks,
    // frontMatter.prerequisites,
    // frontMatter.stacks
  ]);

  return (
    <Layout {...siteConfig}>
      <Head>
        <title>legendary.cards: {frontMatter.title}</title>
          <meta property="og:title" content={`legendary.cards: ${frontMatter.title}`} key="title" />
          <meta name="description" content={`Card details: ${frontMatter.description}`} />
          <meta property="og:description" content={`Card details: ${frontMatter.description}`} />
      </Head>
      <Container className="!pt-0">
        <div className="max-w-screen-md mx-auto ">
          <div className="text-center">
            <BackButton />
            <div className="relative">
              <CardRow listView={false} card={frontMatter} />
              {frontMatter.topvault && (
                <a
                  href={`https://vault.top/app/browse/pokemon-card/info/item/${frontMatter.topvault}`}
                  className="absolute top-2 right-2 inline-flex items-center gap-1.5 p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                  target="_blank"
                  title="View on TopVault" rel="noreferrer"
                >
                  <Image 
                    src="/topvault-48.webp" 
                    alt="TopVault" 
                    className="rounded"
                    width={20}
                    height={20}
                  />
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
          <div className="card-story">
            <div className="group relative rounded-xl bg-slate-900 mb-8 p-4 pb-2 row">
              <MDXRemote components={components} {...source} />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default CardPage;

interface Iparams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {

  const { slug } = context.params as Iparams;
  // get the slug
  const { content, data } = getCard(slug);
  // serialize the data on the server side
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  //only get the slug from cards 
  const cards = getAllCards(['slug']);

  // map through to return post paths
  const paths = cards.map((card) => ({
    params: {
      slug: card.slug
    }
  }));

  return {
    paths,
    fallback: false
  }
}