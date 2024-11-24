import { useContext, useEffect } from 'react';
import {
        checkRedirect,
        getCurrentCmdArry,
        isArgInvalid,
} from '../../utils/funcs';
import {
        ProjectContainer,
        ProjectDesc,
        ProjectsIntro,
        ProjectTitle,
} from '../styles/Projects.styled';
import { termContext } from '../Terminal';
import Usage from '../Usage';

const Projects: React.FC = () => {
        return (
                <div data-testid="projects">
                        <ProjectsIntro>
                                Eventually this command will list and link
                                different projects I've worked on.
                        </ProjectsIntro>
                        {/* {projects.map(({ id, title, desc }) => (
                                <ProjectContainer key={id}>
                                        <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
                                        <ProjectDesc>{desc}</ProjectDesc>
                                </ProjectContainer>
                        ))} */}
                </div>
        );
};

const projects = [
        {
                id: 1,
                title: 'Example Project',
                desc: 'An example of a project to be place here',
                url: 'https://andrewelawrence.com',
        },
];

export default Projects;
