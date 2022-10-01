import { serialize } from 'next-mdx-remote/serialize';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useEffect } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { useMdxComponentsContext } from '../../context/mdxContext';
import CardRow from '../../components/CardRow';
import { ICard } from '../../types/card';
import { getCard, getAllCards } from '../../utils/mdxUtils';
import { ParsedUrlQuery } from 'querystring';

import Layout from '../../components/Layout';
import Container from '../../components/Container';

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
      <Container className="!pt-0">
        <div className="max-w-screen-md mx-auto ">
          <div className="text-center">
            <CardRow card={frontMatter} />
          </div>
          <div className="card-story">
            <MDXRemote components={components} {...source} />
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