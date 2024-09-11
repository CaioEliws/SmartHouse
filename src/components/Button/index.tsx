import { ButtonContainer, TextButton } from "./styles";

import { MaterialIcons, AntDesign } from '@expo/vector-icons';

interface ButtonProps {
    title: string
    iconName?: keyof typeof MaterialIcons.glyphMap
}

export function Button({ title, iconName }: ButtonProps) {
    return (
        <ButtonContainer>
            {
                iconName && (
                    <MaterialIcons name={iconName} size={20} color="#e36343" />
                )
            }

            <TextButton>
                { title }
            </TextButton>

            <AntDesign name="right" size={20} />
        </ButtonContainer>
    )
}