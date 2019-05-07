import React from 'react';
import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import HomeHero from '../components/home/home-hero';
import SolarSystem from '../components/solar-system/solar-system';
import Row from '../components/grid/row';
import Column from '../components/grid/column';

export default () => (
  <Layout>
    <Container>
      <HomeHero/>
      <SolarSystem/>
      <Row>
        <Column width={6}>Left</Column>
        <Column width={6}>Right</Column>
      </Row>
    </Container>
  </Layout>
);
