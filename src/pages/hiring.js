import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';

const HiringPage = ({ data }) => (
  <section id="middle">
    <Helmet
      title={"Hiring | " + data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Everything you need to know when hiring Myke to play music at your event.' }
      ]}
    />
    <article id="content">
      <h1>Hiring Me</h1>
      <p className="hiringQuestions">What types of songs do you play?</p>
      <p className="hiringAnswers">I perform a widely-appealing variety of 6 and 12-string acoustic guitar-oriented hits and original songs, and includes songs made famous by The Eagles, John Denver, America, Nanci Griffith, Willie Nelson, James Taylor, The Beatles, Simon &amp; Garfunkel, Harry Chapin, Jim Croce, Bob Dylan, Jimmy Buffett, Hank Williams, and many others.</p>
      <p className="hiringQuestions">Where are you located? How far are you willing to travel to play a show?</p>
      <p className="hiringAnswers">I live in Olympia, WA and I’m willing to travel anywhere in South Puget Sound area.</p>
      <p className="hiringQuestions">What equipment would we need to provide you to play?</p>
      <p className="hiringAnswers">All I need is an electrical socket to plug my equipment into. I have my own amp and PA system. I can also just play completely accoustic if that’s more appropriate for the setting.</p>
    </article>
    
    <Sidebar/>
  </section>
)

export const query = graphql`
  query HiringQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default HiringPage
