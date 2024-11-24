import {
        CmdDesc,
        CmdList,
        HelpWrapper,
        KeyContainer,
} from '../styles/Help.styled';

import { Cmd } from '../styles/Output.styled';
import { commands } from '../Terminal';
import { generateTabs } from '../../utils/funcs';

const Help: React.FC = () => {
        return (
                <HelpWrapper data-testid="help">
                        {commands.map(({ cmd, desc, tab }) => (
                                <CmdList key={cmd}>
                                        <Cmd>{cmd}</Cmd>
                                        {generateTabs(tab)}
                                        <CmdDesc>-- {desc}</CmdDesc>
                                </CmdList>
                        ))}
                        <br />
                        <KeyContainer>
                                <div>
                                        Tab or Ctrl + I&nbsp;=&gt; autocompletes
                                        the command
                                </div>
                                <div>
                                        Up Arrow {generateTabs(4)} =&gt; go back
                                        to previous command
                                </div>
                                <div>
                                        Ctrl + L {generateTabs(4)} =&gt; clear
                                        the terminal and history
                                </div>
                        </KeyContainer>
                </HelpWrapper>
        );
};

export default Help;
