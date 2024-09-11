import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    height: 56px;

    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TextButton = styled.Text`
    color: ${({ theme }) => theme.COLORS.BLACK};

    font-size: 20px;
`;