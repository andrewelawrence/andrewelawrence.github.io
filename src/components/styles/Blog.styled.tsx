import styled from 'styled-components';

export const BlogsContainer = styled.div`
        margin-bottom: 1rem;
`;

export const BlogsIntro = styled.div`
        max-width: 500px;
`;

export const BlogTitle = styled.div`
        font-weight: 700;
        max-width: 500px;
`;

export const BlogDesc = styled.div`
        max-width: 500px;
`;

export const BlogTags = styled.div`
        color: ${({ theme }) => theme.colors?.text.light};
        max-width: 500px;
        margin-bottom: 1rem;
`;

export const BlogEndList = styled.div`
        margin-bottom: -1rem;
`;