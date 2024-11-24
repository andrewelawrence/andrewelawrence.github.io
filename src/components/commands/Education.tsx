import { EduIntro, EduList, EndEduList } from '../styles/Education.styled';
import { Wrapper } from '../styles/Output.styled';

const Education: React.FC = () => {
        return (
                <Wrapper data-testid="education">
                        {eduBg.map(({ title, desc }) => (
                                <EduList key={title}>
                                        <div className="title">{title}</div>
                                        <div className="desc">{desc}</div>
                                </EduList>
                        ))}
                        <EndEduList />
                </Wrapper>
        );
};

const eduBg = [
        {
                title: 'B.Sc in Computer Science',
                desc: 'Tufts University | 2022 - 2026 (In Progress)',
        },
        {
                title: 'B.A in Science, Technology, and Society',
                desc: 'Tufts University | 2022 - 2026 (In Progress)',
        },
];

export default Education;
