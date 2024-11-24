import styled from 'styled-components';

export const ExpIntro = styled.div``;

export const ExpList = styled.div`
        margin-bottom: 1rem;
        .title {
                font-weight: 700;
        }

        .desc {
                color: ${({ theme }) => theme.colors?.text.light};
        }
`;

export const EndExpList = styled.div`
        margin-bottom: -1rem;
`;
