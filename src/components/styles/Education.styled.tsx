import styled from "styled-components";

export const EduIntro = styled.div`

`;

export const EduList = styled.div`
  margin-bottom: 1rem;
  .title {
    font-weight: 700;
  }

  .desc {
    color: ${({ theme }) => theme.colors?.text.light};
  }
`;

export const EndEduList = styled.div`
  margin-bottom: -1rem;
`;