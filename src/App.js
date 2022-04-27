import { useEffect, useState } from 'react';
import './App.css';
import Paragraph from './Paragraph';
import Section from './Section';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';

function App() {
  const [check, setCheck] = useState(0);
  const [page, setPage] = useState(0);

  const imgs = ['../images/header_1.png',
                '../images/header_2.jpeg',
                '../images/header_3.jpg'];
  const headers = ['1. Your data is not safe with us.',
                   '2. Agreement of algorithm abomination.',
                   '3. Permission to exploit your mental health.'];
  const quotes = ['“We are the sources of surveillance capitalism’s crucial surplus: the objects of a technologically advanced and increasingly raw-material-extraction operation.”',
                  '“Algorithm without humanity is mental holocaust.”',
                  '“It’s a social-validation feedback loop. You’re exploiting a vulnerability in human psychology. The inventors understood this consciously. And we did it anyway.”'];
  const authors = ['— Shoshana Zuboff',
                   '— Abhijit Naskar',
                   '— Sean Parker, Facebook’s first president'];
  const texts = [<>Behind every post, every like, every comment, lies a global phenomenon: <strong className="bold">the monetization of user data.</strong> Intangible, the financial model pervades every aspect of our lives, spanning indiscriminately across all industries and circles — profession (Linkedin), artistry (Pinterest), politics (Twitter). From the early days of benign AOL subscription costs over a decade ago, it has morphed into a creature of unparalleled, methodical perfection. Under these corporations’ direction, the technological skill of the new generation — our generation — is now being leveraged towards the extraction of user data through increasingly sophisticated means —  hidden third-party softwares, HTTP cookies, etc. — and indeed, towards the sale of our data to advertisers and data licensing purposes through increasingly profitable channels — data brokers, the Meta Marketing API, etc. We place our faith and conviction into these corporations, into the ways they “capture and share the world’s moments,” or “inspire creativity and bring joy.” Let us ask you: do the benefits outweigh the consequences? Each second, social media apps collect the information of billions around the globe. Information on our location, age, ethnicity, and political leaning. Information on how we swipe and tap on our devices, our online search queries, our private photos, and in certain cases, even our health records and our banking details. <strong className="bold">These lucrative methods have yielded over $166,000,000,000 for ten of these corporations alone in 2021</strong>, all while the consequences are left as burdens upon our shoulders. Large-scale cybersecurity attacks against Twitter in July 2020. Heightened risks of fraud after Facebook’s data breach of 533 million users’ personal details in April 2021. Youth of the world, we no longer bask in the dawn of the internet — an age promising not only interconnection and accessibility, but decentralization and autonomy as well. We are now victims of a reality where <strong className="bold">privacy has become an involuntary means of exchange</strong> over online platforms. Nothing but <strong className="bold">commodities in an economy of “surveillance capitalism,”</strong> if you will.</>,
                 <>You are being watched–always–everything you do, not only on the dangerous device in your hand, but in every facet of your day to day life. Your every move is being monitored, recorded, and used for the purposes of exploitation by the very applications on which you aimlessly scroll away your days. You may have heard the term “algorithm,” but do you truly know how these algorithms are violating your human rights? After these companies obtain your personal data, they use everything they know about you to foster an addiction to their sites. Algorithms filter content to show you exactly what you want to see–not necessarily what you need to be seeing. These algorithms determine for you which type of content is “important;” they determine for you what information you can easily digest. Do you want to live in a world in which the content you view, the news you read, and the information you are exposed to is a mere reflection of your own beliefs? This kind of world will leave you ignorant, isolated, and alone in all of your endeavors. This kind of world will maintain for you a false reality that only serves to suppress the progression of our society. This constant filtering of information, by a machine no less, only works to exacerbate the political divisions we see across the world today, divisions that the youth of the world are seeking to dissolve. But how can we fix the issues in our societies if every one of us is being shown a different, more selectively-palatable version of the issue? 74 percent of Facebook users reported that they did not know Facebook maintained a list of their interests and traits, and 51 percent were not comfortable with the compilation of this information. So, then, if we are uncomfortable and unaware and victims of exploitation, we cannot continue to stand for this gross violation of our rights. We cannot allow Facebook, Instagram, and all rapacious social media corporations to wield such control over the state of the individual and the world for the purpose of increasing their own wealth and power. This is mental holocaust. Let the weight of these words cut you as they have cut others before and be emboldened to stand against the annihilation of our free will.</>,
                 <>Youth of the world, you agree to be responsible for all degradation made to your well-being at the hands of social media corporations. You agree to your very soul being used as a pawn in the grand scheme of user data monetization, with exploitive algorithms being the hands moving your piece. By interacting or merely accessing social media sites, you are trapping yourself into a system of mind manipulation. Addiction-inducing methods created and encouraged by social media corporations, that have already exploited the privacy of the individual user, leave users in a battle field, fighting against the forces of toxic content promoted to feeds. <strong className="bold">Profit is valued over people without fail.</strong> Existing checks on content that infiltrates one's social media feed remain little to none. Toxic social media platform systems are the breeding ground for insecurity, leaving billions of users left to face the fierce wrath of mental health issues including, but not limited to, anxiety, low self-esteem, and body dysmorphia. We must not be oblivious to the reality at hand that youth mental health is past the brink of destruction with social media continuing to drag us further into the deep end. And do not be fooled by the voices claiming our generation is putting such evil forces upon ourselves or, worse, that we are facing some unexpected and uncontrollable impact of social media use. The power of social media to wreak havoc is just as great as its ability to incorporate protections for the good of the people- the good of the youth. Yet internal investigations made by Facebook, Instagram, and now TikTok expose the corporations’ awareness of their impacts and subsequent lack of action to mitigate such issues. <strong className="bold">Social media corporations are fully cognisant of the downward mental health spiral in our generation that social media has initiated yet such corporations have done nothing but feed the fire.</strong> Leaked internal documents from Facebook/Instagram disclose extensive research since at least 2018 regarding the implications of social media on the users mental health and the specific app methods that have contributed to the crisis at hand- with addictive algorithms, targeted content, and encouragement of “passive” app use being notable culprits. Social media corporations have the resources and means to make shifts to the platforms’ formations that extend beyond hiding the “Like” count or “highlighting progress journeys”. Rather, the corporations sit back and observe the fire that is our generation's well being and let money flow into their pockets.</>];
 
  const handleCheck = (e) => {
    if (e.target.checked) {
      e.target.id == 'check1' ? setCheck(1) : setCheck(2);
    } else { // unchecked
      setCheck(0);
    }
  }

  const handlePage = (e) => {
    setPage(1);
  }

  useEffect(() => {
    if (page == 1) {
      window.scrollTo(0, 0);
    }
  }, [page]);

  return (
    <div className="whole">
      {page == 0 ? 
        <div className="app">
          <div className="main-title">REAL TERMS AND CONDITIONS</div>
          <div className="sub-title">THE FINE PRINT</div>
          <Section key={1} num={1} img={imgs[0]} header={headers[0]} quote={quotes[0]} author={authors[0]} text={texts[0]}/>
          <Section key={2} num={2} img={imgs[1]} header={headers[1]} quote={quotes[1]} author={authors[1]} text={texts[1]}/>
          <Section key={3} num={3} img={imgs[2]} header={headers[2]} quote={quotes[2]} author={authors[2]} text={texts[2]}/>

          <div className="end-section">
            <hr className="section-break"></hr>
            <div className="end-text">Now, after understanding all of this, do you still agree to their terms?</div>
            <div className="end-choice">
              <label><input type="radio" id="check1" name="choice"  onChange={(e) => handleCheck(e)}></input>I agree.</label>
              <label><input type="radio" id="check2" name="choice"  onChange={(e) => handleCheck(e)}></input>No, I want to break free.</label>
            </div>
            <a href={check == 1 ? "https://www.facebook.com/" : null} onClick={check == 2 ? (e) => handlePage(e) : null} className={check == 0 ? "end-continue" : "end-continue checked"}>CONTINUE</a>
          </div>
        </div>
      :
        <div className="app">
          <div className="main-title">THE SOLUTION</div>
          <div className="sub-title">A VISION FORWARD</div>
          <hr className="section-break"></hr>
          {/* <div className="sub-title">THE FINE PRINT</div> */}
          <Paragraph level="normal" text="Youth of the world, we are more than capable of spurring real change. With our numbers, we need not remain passive as our fundamental rights and mental health are abused. When unified, we have the ability to drive every government and in turn, every corporation, to meet our demands. Our vision for a new and brighter future is as follows:"/>
          <Paragraph level="number" text="1. Social media corporations that are no longer driven by profit. We re-imagine social media within a singular nonprofit model: one where creative content and interconnection continue to thrive, but capitalist motivations no longer push corporations to prioritize monetary gain over the wellbeing of their users."/>
          <Paragraph level="number" text="2. The demonetization of social media includes the following changes:"/>
          <Paragraph level="letter" text="a. User data may no longer be collected and sold across social media corporations."/>
          <Paragraph level="letter" text="b. Advertisements must be limited as the same promotional content must be shown to every user due to the abolishment of algorithm-specific marketing."/>
          <Paragraph level="number" text="3. The mechanisms by which social media corporations extensively filter users’ experience of their applications through the use of algorithms must be entirely abolished for the preservation of our mental health. All content filter systems and sorting methods other than those that create chronological order of posts and/or content must be eliminated."/>
          <Paragraph level="letter" text="a. All platform features that encourage unexpected gains in perceived reputation, such as likes and comments, must also be disbanded as social media corporations seek to exploit the dopamine response and subsequent addiction caused by such gains."/>
          <Paragraph level="number" text="4. Further accountability and transparency is required for all social media platforms. Such requirements include:"/>
          <Paragraph level="letter" text="a. The release of all information regarding intentional user manipulation and exploitation that has been employed for monetary gain and for growth of consumer base."/>
          <Paragraph level="letter" text="b. The expansion of antitrust laws to diminish the monopolies of larger social media platforms. Current US legislation including the 1890 Sherman Act, the 1914 Federal Trade Commission Act, and the 1914 Clayton Act, all of which seek to prohibit monopolization and unfair methods of competition, do not outline whether digital service companies like social media corporations are protected loopholes made by anti-competitive behavior. Such loopholes and barriers, in conjunction with any and all governmental coercion and/or bribery, must come to an immediate end. The influence of social media corporations in state government and legislature — including any and all lobbying and/or licensing of data to political campaigns — must also be routinely made transparent to the general public."/>
          <Paragraph level="letter" text="c. Further clarification on the use of user data. Beyond the abolishment of selling user data, any and all use of user information and personal data must be overtly outlined to the consumer. Recurring permission notifications will be required to ensure the user is not passive in their decision to relinquish their privacy rights."/>
          <Paragraph level="letter" text="d. The appropriate removal of user data. In line with Article 5.1 of the EU’s General Data Protection Regulation (GDPR), corporations may only utilize user data as per their respective publicly declared purposes and must delete such data from their records after the fulfillment of such purposes. Under no circumstances will corporations be permitted to delay the timely deletion of such information."/>
          <Paragraph level="normal" text="Social media is beautiful in its ability to connect individuals around the world of all walks of life. It can act as a tool for the furtherance of global social movements. It can act as an easily accessible source of educational content, when viewed with a critical lens. We wish to preserve these benevolent aspects of social media, while simultaneously doing away with the corporations’ abusive control over users’ current experience of their applications."/>
        </div>
    }
    </div>
  );
}
export default App;
