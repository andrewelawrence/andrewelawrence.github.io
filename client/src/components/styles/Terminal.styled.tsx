import styled from 'styled-components';

export const Wrapper = styled.div`
        padding-left: 8px;
        padding-right: 8px;

        display: flex;
        flex-direction: column-reverse;
        max-height: calc(100vh - 2rem);
        overflow-y: auto;
`;

export const Cmd = styled.span`
        color: ${({ theme }) => theme.colors?.text.commands};
`;

export const CmdNotFound = styled.div``;

export const Empty = styled.div``;

export const MobileSpan = styled.span`
        @media (min-width: 550px) {
                display: none;
        }
`;

export const MobileBr = styled.br`
        @media (min-width: 550px) {
                display: none;
        }
`;

export const Form = styled.form`
        @media (min-width: 550px) {
                display: flex;
        }
`;

export const Input = styled.input`
        flex-grow: 1;

        @media (max-width: 550px) {
                min-width: 85%;
        }
`;

export const Hints = styled.span``;
