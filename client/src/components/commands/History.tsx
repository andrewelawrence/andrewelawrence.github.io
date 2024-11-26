import { useContext } from 'react';
import _ from 'lodash';
import { Wrapper } from '../styles/Output.styled';
import { termContext } from '../Terminal';
import { Cmd } from '../styles/Output.styled';

const History: React.FC = () => {
        const { history, index } = useContext(termContext);
        const currentHistory = _.reverse(_.slice(history, index));

        return (
                <Wrapper data-testid="history">
                        {currentHistory.map((cmd) => (
                                // <div key={_.uniqueId(`${cmd}_`)}><Cmd>{cmd}</Cmd></div>
                                <div key={_.uniqueId(`${cmd}_`)}>{cmd}</div>
                        ))}
                </Wrapper>
        );
};

export default History;