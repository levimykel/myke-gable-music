import React from 'react';
import { RichText } from 'prismic-reactjs';

export const Image = (props) => {
  const imageUrl = props.slice.primary.image.url;
  const alt = RichText.asText(props.slice.primary.alt_text);
  return (
    <img src={imageUrl} alt={alt}/>
  );
};

export default Image;