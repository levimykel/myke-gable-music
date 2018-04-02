import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';

// Resources
import song01 from './music/01-Peaceful-Easy-Feelin.mp3';
import song02 from './music/02-Homeward-Bound.mp3';
import song03 from './music/03-Rapid-Roy.mp3';
import song04 from './music/04-California-Dreamin.mp3';
import song05 from './music/05-Have-to-Say-I-Love-You.mp3';
import song06 from './music/08-Help-Me-Make-it-Through-the-Night.mp3';

const MusicPage = () => (
  <section id="middle">
    <Helmet
      title="Music | Myke Gable Music"
      meta={[
        { name: 'description', content: 'Listen to a few samples of Myke\'s music including the Eagles and Simon & Garfunkel.' }
      ]}
    />
    <article id="content">
      <h1>Music</h1>
      <p>Here are a few of Myke’s recordings of songs that he plays.</p>
      <p className="musicTitle">Peaceful Easy Feelin’ — Eagles Cover</p>
      <audio src={song01} controls preload></audio>
      <p className="musicTitle">Homeward Bound — Simon &amp; Garfunkel Cover</p>
      <audio src={song02} controls preload></audio>
      <p className="musicTitle">Rapid Roy (The Stock Car Boy) — Jim Croce Cover</p>
      <audio src={song03} controls preload></audio>
      <p className="musicTitle">California Dreamin’ — The Mamas &amp; the Papas Cover</p>
      <audio src={song04} controls preload></audio>
      <p className="musicTitle">Have to Say I Love You (In a Song) — Jim Croce Cover</p>
      <audio src={song05} controls preload></audio>
      <p className="musicTitle">Help Me Make it Through the Night — Kris Kristofferson Cover</p>
      <audio src={song06} controls preload></audio>
    </article>

    <Sidebar/>
  </section>
)

export default MusicPage
