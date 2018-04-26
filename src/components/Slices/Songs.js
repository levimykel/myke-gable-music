import React from 'react';
import { RichText } from 'prismic-reactjs';

export const Songs = (props) => {
  
  const songs = props.slice.items.map((song, index) => {
    return (
      <div key={index}>
        <p className="musicTitle">{RichText.asText(song.song_title)}</p>
        <audio src={song.song_link.url} controls preload></audio>
      </div>
    );
  });
  
  return (
    <section>
      {songs}
    </section>
  );
};

export default Songs;