import { UsageDiv } from './styles/Output.styled';
import { generateTabs } from '../utils/funcs';

type Props = {
        cmd: 'themes';
        marginY?: boolean;
};

const arg = {
        themes: { argument: 'set', placeholder: 'name', example: 'dark' },
};

const Usage: React.FC<Props> = ({ cmd, marginY = false }) => {
        let argument = '';
        let placeholder = '';
        let example = '';

        argument = arg[cmd].argument;
        placeholder = arg[cmd].placeholder;
        example = arg[cmd].example;

        return (
                <UsageDiv data-testid={`${cmd}-invalid-arg`} marginY={marginY}>
                        Usage: {cmd} {argument} &#60;{placeholder}&#62; <br />
                        eg: {cmd} {argument} {example}
                </UsageDiv>
        );
};

export default Usage;
