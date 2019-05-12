import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import reactStringReplace from 'react-string-replace';
import Container from '../container/container';
import Row from '../grid/row';
import Column from '../grid/column';
import Button from '../button/button';
import scrollToMain from '../../utils/scroll-to-main';
import s from './home-hero.module.css';

// @TODO Make onClick on CTA work
const HomeHero = ({cta, subtitle, title}) => {
  // This function replaces `*text*` with `<b>text</b>`, which adds the fancy highlight effect
  const titleNode = useMemo(() => {
    return reactStringReplace(title, /(\*.+\*)/, match => (
      <b key={match} className={s.title__bold}>
        {match.replace(/\*/g, '')}
      </b>
    ));
  }, [title]);

  return (
    <div className={s.background}>
      <Container>
        <div className={s.container}>
          <Row>
            <Column
              rules={{
                medium: 8,
                large: 6
              }}
            >
              <div className={s.content}>
                <div className={s.content__titles}>
                  <h1 className={s.title}>
                    {titleNode}
                  </h1>
                  <p className={s.subtitle}>
                    {subtitle}
                  </p>
                </div>
                <div className={s.content__cta}>
                  <Button icon="arrow-down" onClick={scrollToMain}>
                    {cta}
                  </Button>
                </div>
              </div>
            </Column>
          </Row>
        </div>
      </Container>
    </div>
  );
};

HomeHero.propTypes = {
  cta: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default HomeHero;
