import React from 'react';
import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import Row from '../components/grid/row';
import Column from '../components/grid/column';

export default () => (
  <Layout>
    <Container>
      Hi I&apos;m website
      <Row>
        <Column width={6}>Left</Column>
        <Column width={6}>Right</Column>
      </Row>
    </Container>
  </Layout>
);
