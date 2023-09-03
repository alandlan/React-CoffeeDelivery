import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedItemsContainer = styled.div`
    display: flex;

    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;
`;

export const DetailsContainer = styled(SectionBaseStyle)`
    border-radius: 6px 44px 6px 44px;
    display: flex;
    flex-direction: column;
`;

export const ConfirmationSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;