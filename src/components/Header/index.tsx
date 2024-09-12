import { Image, TouchableOpacity } from "react-native";
import { HeaderContainer, SvgView } from "./styles";
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    hasButton?: "yes"
}

export function Header({ hasButton }: HeaderProps) {
    const navigation = useNavigation();

    return (
        <HeaderContainer>
            {
                hasButton === "yes" && (
                    <SvgView>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <AntDesign name="left" size={24} />
                        </TouchableOpacity>
                    </SvgView>
                )
            }

            <Image source={require("@assets/logo.png")} />
        </HeaderContainer>
    )
}