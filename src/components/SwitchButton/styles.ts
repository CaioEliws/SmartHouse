import styled from "styled-components/native";

export const SwitchContainer = styled.View`
    background: ${({ theme }) => theme.COLORS.WHITE};
    height: 56px;

    border-radius: 12px;

    flex-direction: row;
    align-items: center;

    padding-left: 20px;
    gap: 14px;
`;

export const TextSwitch = styled.Text`
    color: ${({ theme }) => theme.COLORS.BLACK};;
`;

export const SwitchView = styled.View`
    width: 52px;
    height: 32px;
    justify-content: center;

    border-radius: 20px;
`;

export const Switch = styled.Switch`

`;