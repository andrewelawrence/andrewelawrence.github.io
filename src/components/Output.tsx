import About from "./commands/About";
import Banner from "./commands/Banner";
import Blog from "./commands/Blog";
// import Contact from "./commands/Contact";
import Clear from "./commands/Clear";
// import Echo from "./commands/Echo";
import Education from "./commands/Education";
// import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
// import Gui from "./commands/Gui";
import Help from "./commands/Help";
import History from "./commands/History";
import Projects from "./commands/Projects";
// import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
// import Welcome from "./commands/Welcome";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "socials", "themes", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          banner: <Banner />,
          blog: <Blog />,
          clear: <Clear />,
        //   contact: <Contact />,
          education: <Education />,
          help: <Help />,
          history: <History />,
          projects: <Projects />,
          themes: <Themes />
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
