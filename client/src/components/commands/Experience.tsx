import { ExpIntro, ExpList, EndExpList } from '../styles/Experience.styled';
import { Wrapper } from '../styles/Output.styled';

const Experience: React.FC = () => {
        return (
                <Wrapper data-testid="experience">
                        {/* <ExpIntro>
        Some of my CS-related professional experiences
        <br></br><br></br>
        </ExpIntro> */}
                        {expBg.map(({ title, desc }) => (
                                <ExpList key={title}>
                                        <div className="title">{title}</div>
                                        <div className="desc">{desc}</div>
                                </ExpList>
                        ))}
                        <EndExpList></EndExpList>
                </Wrapper>
        );
};

const expBg = [
        {
                title: 'Integration Systems Engineering Intern',
                desc: 'CYSCE S.A. Consultores Empresarials | September, 2024 - Present',
        },
        {
                title: 'Research Assistant',
                desc: 'University of Michigan School of Information | February, 2024 - July, 2024',
        },
        {
                title: 'Digital Transformation Intern',
                desc: 'Tufts Technology Services | January, 2024 - August, 2024',
        },
];

export default Experience;
