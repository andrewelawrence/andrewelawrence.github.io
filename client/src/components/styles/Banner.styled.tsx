import styled from 'styled-components';

export const HeroContainer = styled.div`
        //   display: flex;
        //   flex-wrap: wrap-reverse;

        //   @media (max-width: 932px) {
        //     margin-bottom: 1.5rem;
        //   }

        div {
                @media (min-width: 1024px) {
                        flex-basis: 50%;
                }
        }
`;

export const PreName = styled.pre`
        //   margin-top: 0.5rem;
        //   margin-bottom: 1.5rem;

        @media (max-width: 550px) {
                display: none;
        }
`;

export const PreWrapper = styled.div`
        text-align: center;
`;

export const PreNameMobile = styled.pre`
        //   margin-top: 0.5rem;
        //   margin-bottom: 1.5rem;

        @media (min-width: 550px) {
                display: none;
        }
`;

export const PreImg = styled.pre`
        @media (max-width: 550px) {
                display: none;
        }
`;

export const Seperator = styled.div`
        //   margin-top: 0.75rem;
        //   margin-bottom: 0.75rem;
`;
