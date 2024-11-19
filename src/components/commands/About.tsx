import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, I'm <HighlightSpan>Andrew Lawrence</HighlightSpan>!
        <br></br>
        <br></br>
        I'm a undergraduate student at Tufts University (Class of 2026).
        <br></br>
        <br></br>
        I'm passionate about <HighlightSpan>AI Governance</HighlightSpan> research and policy, especially <br></br> algorithmic fairness (AF) and human-algorithm interaction (HAI).
        <br></br>
        <br></br>
        When I'm not looking up how to code, I enjoy reading & writing, <br></br> bouldering, and cribbage, among many other things.
      </p>
    </AboutWrapper>
  );
};

export default About;
