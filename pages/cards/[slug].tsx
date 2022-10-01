import { serialize } from 'next-mdx-remote/serialize';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useEffect } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { useMdxComponentsContext } from '../../context/mdxContext';
import Thumbnail from '../../components/Thumbnail';
import { ICard } from '../../types/card';
import { getCard, getAllCards } from '../../utils/mdxUtils';
import { ParsedUrlQuery } from 'querystring';

// import Prerequisites from '../../components/Prerequisites';
// import Stacks from '../../components/Stacks';

// props type
type Props = {
  source: MDXRemoteSerializeResult,
  frontMatter: Omit<ICard, 'slug'>;
}

// components to render
const components = {
  // Prerequisites,
  // Stacks,
}

const CardPage: React.FC<Props> = ({ source, frontMatter }: Props) => {

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
    <div>
      <article className="prose prose-green">
        <div className="mb-4">
          <Thumbnail title={frontMatter.title} src={frontMatter.normalVersion} />
          <Thumbnail title={frontMatter.title} src={frontMatter.rareVersion} />
        </div>

        <h1>{frontMatter.title}</h1>
        <p>{frontMatter.description}</p>
        <p>{frontMatter.category}</p>

        <MDXRemote components={components} {...source} />
      </article>
    </div>
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