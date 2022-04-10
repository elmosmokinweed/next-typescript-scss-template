import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from 'src/components/templates/Container';
import React from 'react';
import { DefaultInfo } from 'src/components/organisms/DefaultInfo';

type HomeProps = {
  sampleText: string;
};

const Home: NextPage<HomeProps> = ({ sampleText }: HomeProps) => {
  return (
    <>
      <Head>
        <title>NTS template</title>
      </Head>
      <Container>
        <DefaultInfo />
      </Container>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const sampleText = 'Next.js TypeScript SCSS Template';
  return {
    props: {
      sampleText,
    },
    revalidate: 60,
  };
}
