import React from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicConfig from '../../../prismic-config';

export const TextSection = (props) => {
  return (
    <section>
      {RichText.render(props.slice.primary.text, PrismicConfig.linkResolver)}
    </section>
  );
};

export default TextSection;