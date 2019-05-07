import React from 'react';
import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import HomeHero from '../components/home/home-hero';
import Container from '../components/container/container';
import {MAIN_SECTION_ID} from '../utils/constants';

export default () => (
  <Layout>
    <Header/>
    <HomeHero
      title="Sound design for the *future*."
      subtitle="We make beautiful sounds for commercial and interactive projects."
      cta="Explore projects"
    />
    <div id={MAIN_SECTION_ID}>
      <Container>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum, officiis. Quis temporibus accusantium dolores perferendis, sint tempora et vero? Debitis repudiandae odio illum ullam, atque ea quae nulla maiores.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum, officiis. Quis temporibus accusantium dolores perferendis, sint tempora et vero? Debitis repudiandae odio illum ullam, atque ea quae nulla maiores.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum, officiis. Quis temporibus accusantium dolores perferendis, sint tempora et vero? Debitis repudiandae odio illum ullam, atque ea quae nulla maiores.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum, officiis. Quis temporibus accusantium dolores perferendis, sint tempora et vero? Debitis repudiandae odio illum ullam, atque ea quae nulla maiores.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum, officiis. Quis temporibus accusantium dolores perferendis, sint tempora et vero? Debitis repudiandae odio illum ullam, atque ea quae nulla maiores.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum, officiis. Quis temporibus accusantium dolores perferendis, sint tempora et vero? Debitis repudiandae odio illum ullam, atque ea quae nulla maiores.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum, officiis. Quis temporibus accusantium dolores perferendis, sint tempora et vero? Debitis repudiandae odio illum ullam, atque ea quae nulla maiores.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum, officiis. Quis temporibus accusantium dolores perferendis, sint tempora et vero? Debitis repudiandae odio illum ullam, atque ea quae nulla maiores.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum, officiis. Quis temporibus accusantium dolores perferendis, sint tempora et vero? Debitis repudiandae odio illum ullam, atque ea quae nulla maiores.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum, officiis. Quis temporibus accusantium dolores perferendis, sint tempora et vero? Debitis repudiandae odio illum ullam, atque ea quae nulla maiores.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum, officiis. Quis temporibus accusantium dolores perferendis, sint tempora et vero? Debitis repudiandae odio illum ullam, atque ea quae nulla maiores.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum, officiis. Quis temporibus accusantium dolores perferendis, sint tempora et vero? Debitis repudiandae odio illum ullam, atque ea quae nulla maiores.</p>
      </Container>
    </div>
  </Layout>
);
