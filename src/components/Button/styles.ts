import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    background: ${({ theme }) => theme.COLORS.WHITE};
    height: 56px;

    border-radius: 12px;

    flex-direction: row;
    align-items: center;

    padding-left: 20px;
    gap: 14px;
`;

export const TextButton = styled.Text`
    color: ${({ theme }) => theme.COLORS.BLACK};

    font-size: 20px;
`;

export const ViewHomeSvg = styled.View`
    position: absolute;
    right: 20px;
`;