import React from 'react';
import {Link} from 'gatsby';
import Container from '../container/container';
import s from './header.module.css';

const Header = () => (
  <Container>
    <div className={s.container}>
      <Link to="/">
        <h1 className={s.logo}>Starset Sound</h1>
      </Link>
    </div>
  </Container>
);

export default Header;
