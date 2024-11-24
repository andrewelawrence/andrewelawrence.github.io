import { useContext, useEffect } from 'react';
import {
        ContactsContainer,
        ContactsIntro,
        ContactListEnd,
} from '../styles/Contact.styled';
import { CmdDesc, CmdList, HelpWrapper } from '../styles/Help.styled';
import {
        checkRedirect,
        generateTabs,
        getCurrentCmdArry,
        isArgInvalid,
} from '../../utils/funcs';
import { termContext } from '../Terminal';
import Usage from '../Usage';
import { Cmd, Link } from '../styles/Output.styled';

const Contacts: React.FC = () => {
        return (
                <HelpWrapper data-testid="contact">
                        <ContactsIntro></ContactsIntro>
                        <ContactsContainer>
                                {contacts.map(({ title, url, tabs }) => (
                                        <CmdList key={title}>
                                                <Cmd>{`${title}`}</Cmd>
                                                {generateTabs(tabs)}--&nbsp;
                                                <Link
                                                        href={url}
                                                        target="_blank"
                                                >
                                                        {url}
                                                </Link>
                                        </CmdList>
                                ))}
                                <ContactListEnd /> <br />I go by
                                @andrewelawrence or @exton on most platforms.
                        </ContactsContainer>
                </HelpWrapper>
        );
};

const contacts = [
        {
                title: 'Email',
                url: 'https://mailto:andrew.e.lawrence@gmail.com',
                tabs: 6,
        },
        {
                title: 'LinkedIn',
                url: 'https://www.linkedin.com/in/andrew-e-lawrence/',
                tabs: 3,
        },
        {
                title: 'GitHub',
                url: 'https://github.com/andrewelawrence',
                tabs: 5,
        },
        // {
        //         title: 'Instagram',
        //         url: 'https://www.instagram.com/andrewelawrence/',
        //         tabs: 2,
        // },
        // {
        //         title: 'Mastodon',
        //         url: 'https://mastodon.social/@exton',
        //         tabs: 3,
        // },
];

export default Contacts;
