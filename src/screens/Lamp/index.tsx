import { Header } from "@components/Header";
import { ContentLamp, LampContainer, TitleText } from "./styles";
import { SwitchButton } from "@components/SwitchButton";

export function Lamp() {

    return (
        <LampContainer>
            <Header />

            <TitleText>Luzes:</TitleText>

            <ContentLamp>
                <SwitchButton title="Luz do quarto" />
                <SwitchButton title="Luz do banheiro" />
                <SwitchButton title="Luz da sala" />
                <SwitchButton title="Luz da cozinha" />
            </ContentLamp>
        </LampContainer>
    )
}