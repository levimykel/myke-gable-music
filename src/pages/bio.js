import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';

// Resources
import homeBannerImg from './images/myke-bio.jpg';

const BioPage = () => (
  <section id="middle">
    <Helmet
      title="Bio | Myke Gable Music"
    />
    <article id="content">
      <h1>Bio</h1>
      <p>Myke Gable is a musician living in Olympia, WA. Myke has over 30 years of experience performing acoustic guitar-oriented music at clubs, restaurants, hotels, and private parties all over the world, from Alabama to California, and from Guam to the British Isles. Myke has performed at countless venues, including the Seattle Space Needle; the famous Lazy E Ranch in Guthrie, Oklahoma; and even headlined as lead singer with Hank Williams’ original band, The Drifting Cowboys, in their first-ever reunion performance.</p>
      <p><img src={homeBannerImg} alt="Myke Gable on stage"/></p>
      <p>Myke performs a widely-appealing variety of 6 and 12-string acoustic guitar-oriented hits and original songs, and includes songs made famous by The Eagles, John Denver, America, Nanci Griffith, Willie Nelson, James Taylor, The Beatles, Simon &amp; Garfunkel, Harry Chapin, Jim Croce, Bob Dylan, Jimmy Buffett, Hank Williams, and many others.</p>
      <p>Myke blends an eclectic style of ballads, love songs, and acoustic rock which is always well-received by dinner party guests, book store/coffee shop customers, and Sunday Brunch families. Myke is a mature, experienced professional guitarist/singer who is sure to be a big hit at your venue.</p>
    </article>

    <Sidebar/>
  </section>
)

export default BioPage
