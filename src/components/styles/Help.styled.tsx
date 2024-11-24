import styled from 'styled-components';

export const HelpWrapper = styled.div``;

export const CmdList = styled.div``;

export const CmdDesc = styled.span`
        color: ${({ theme }) => theme.colors?.text.plain};

        @media (max-width: 550px) {
                display: block;
        }
`;

export const KeyContainer = styled.div`
        @media (max-width: 550px) {
                display: none;
        }
`;
