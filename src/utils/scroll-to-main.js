import {MAIN_SECTION_ID} from './constants';

export default () => {
  const mainSection = document.querySelector(`#${MAIN_SECTION_ID}`);

  if (mainSection) {
    mainSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
};
