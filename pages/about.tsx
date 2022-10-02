import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import Layout from '../components/Layout';
import Container from '../components/Container';

// props type
type Props = {
  siteConfig: any
}

// component render function
const About: NextPage<Props> = ({ siteConfig }: Props) => {
  const title = "legendary.cards: About";

  return (
    <Layout {...siteConfig}>
      <Head>
        <title>{title}</title>
          <meta property="og:title" content={title} key="title" />
      </Head>
      <Container>
        <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          About Legendary Cards
        </h1>
        <div className="mx-auto prose dark:prose-invert mt-8">
          <p className="text-lg">
            This project seeks to document all Pokemon cards published by Wizards of the Coast up until the year 2003, which have some rare or non-standard property.
            Here &apos;legendary&apos; means the cards exsistance is not widely known and may even be disputed by experts.
            Cards that have errors from the printing process, such as ink bubbles, overlays, or cutting and processing mistakes are not included.
            Cards that have errors from pre-printing, meaning typos and mistakes in layout are included if the error was corrected.
            In situations where the corrected version is more rare than the error-version then this will be specified.
            Promotional cards are included except for the &quot;Black Star promo&quot; 54 card set.
          </p>
          <p className="text-lg">
            This is an open source and community-driven project.
            Please read the README documentation on GitHub for more information on how to contribute content.
            The email address <i>info at legendary dot cards</i> may be used to contact the project maintainers.
          </p>
        </div>
        <h5 className="mt-2 text-2xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary dark:text-white">
          Cards explicitly excluded
        </h5>
        <div className="mx-auto prose dark:prose-invert mt-4">
          <ul>
            <li><b>Illustrator Error Blastoise</b>: This is a printing error where the word &quot;Illus.&quot; and sometimes part of the &quot;K&quot; in the name &quot;Ken&quot; are not shown.</li>
          </ul>
        </div>
      </Container>
    </Layout>
  )
}

export default About

export const getStaticProps: GetStaticProps = async () => {
  return { props: { } }
}
