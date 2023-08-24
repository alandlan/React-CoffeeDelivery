import styled from "styled-components";
import background from '../../../../assets/intro-background.png';
import { TitleText } from "../../../../components/typography";

export const IntroContainer = styled.section`
    width: 100%;
    height: 34rem;
    background: ${() => `url(${background}) no-repeat center`};
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IntroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
`;

export const IntroTitle = styled(TitleText)`
    margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.5rem;
    margin-top: 4.125rem;
`;