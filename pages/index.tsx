import React from 'react';
import Head from 'next/head';
import RocketSeatLogo from '../assets/rocketseat.svg';
import Container from '../styles/pages/Home';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Experience with Next</title>
    </Head>

    <RocketSeatLogo />
    <h1>React + Next + Typescript</h1>
    <h4>Welcome to my study project. Enjoy it!</h4>
  </Container>
);

export default Home;
