import React from 'react';
import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import HomeHero from '../components/home/home-hero';
import {MAIN_SECTION_ID} from '../utils/constants';

export default () => (
  <Layout>
    <Header/>
    <HomeHero
      title="Sound design for the *future*."
      subtitle="We make beautiful sounds for commercial and interactive projects."
      cta="Explore projects"
    />
    <div id={MAIN_SECTION_ID} aria-hidden="true"/>
  </Layout>
);
