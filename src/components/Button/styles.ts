import styled from "styled-components/native";

export const ButtonContainer = styled.View`
    width: 100%;
    height: 56px;

    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    background-color: yellow;
`;

export const TextButton = styled.Text`
    color: ${({ theme }) => theme.COLORS.BLACK};

    font-size: ${({ theme }) => theme.FONT_FAMILY.LG}
`;