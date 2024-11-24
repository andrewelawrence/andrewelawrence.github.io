import About from './commands/About';
import Banner from './commands/Banner';
import Blog from './commands/Blog';
import Clear from './commands/Clear';
import Contacts from './commands/Contact';
import Education from './commands/Education';
import Experience from './commands/Experience';
import GeneralOutput from './commands/GeneralOutput';
import Help from './commands/Help';
import History from './commands/History';
import Projects from './commands/Projects';
import Resume from './commands/Resume';
import Themes from './commands/Themes';
import WhoAmI from './commands/WhoAmI';

import { OutputContainer, UsageDiv } from './styles/Output.styled';
import { termContext } from './Terminal';
import { useContext } from 'react';

type Props = {
        index: number;
        cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
        const { arg } = useContext(termContext);

        const specialCmds = ['projects', 'socials', 'themes', 'echo'];

        // return 'Usage: <cmd>' if command arg is not valid
        // eg: about tt
        if (!specialCmds.includes(cmd) && arg.length > 0)
                return (
                        <UsageDiv data-testid="usage-output">
                                Usage: {cmd}
                        </UsageDiv>
                );

        return (
                <OutputContainer
                        data-testid={index === 0 ? 'latest-output' : null}
                >
                        {
                                {
                                        about: <About />,
                                        banner: <Banner />,
                                        blog: <Blog />,
                                        clear: <Clear />,
                                        contact: <Contacts />,
                                        education: <Education />,
                                        experience: <Experience />,
                                        help: <Help />,
                                        history: <History />,
                                        projects: <Projects />,
                                        resume: <Resume />,
                                        themes: <Themes />,
                                        whoami: <WhoAmI />,
                                }[cmd]
                        }
                </OutputContainer>
        );
};

export default Output;
