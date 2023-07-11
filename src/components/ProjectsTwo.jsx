import '../styles/projects.css';
import { GrGithub, GrReactjs } from 'react-icons/gr';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiJavascript } from 'react-icons/si';
import { IoLogoCss3 } from 'react-icons/io';
import { FaBootstrap } from 'react-icons/fa';

import digitalMarketingAgency from '../assets/images/digital_marketing_agency.png';
import theEthicsOfAIConference from '../assets/images/the_ethics_of_ai_conference.png';
import typingSpeedTest from '../assets/images/typing_speed_test_img.png';
import Card from './Card';

export default function Projects() {
  return (
    <div className="projects" id="jump-projects">
      <section className="cards">
        <Card
          img={digitalMarketingAgency}
          title="Marketing agency"
          urlLive="https://marketing-agency-site.netlify.app/"
          urlGithub="https://github.com/J-C-S-V/bootstrap_project"
          tech={<GrGithub />}
          techTwo={<SiJavascript />}
          techThree={<FaBootstrap />}
          techFour={<AiFillHtml5 />}
        />
        <Card
          img={theEthicsOfAIConference}
          title="The ethics of AI"
          urlLive="https://charming-medovik-009d58.netlify.app/"
          urlGithub="https://github.com/J-C-S-V/The-Ethics-of-AI-conference"
          tech={<GrGithub />}
          techTwo={<SiJavascript />}
          techThree={<IoLogoCss3 />}
          techFour={<AiFillHtml5 />}
        />
        <Card
          img={typingSpeedTest}
          title="Typing speed test"
          urlLive="https://creative-entremet-225e0d.netlify.app/"
          urlGithub="https://github.com/J-C-S-V/typing_speed_test"
          tech={<GrGithub />}
          techTwo={<GrReactjs />}
          techThree={<AiFillHtml5 />}
          techFour={<SiJavascript />}
        />
      </section>
    </div>
  );
}
