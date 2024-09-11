import { Header } from "@components/Header";
import { ContentLamp, LockContainer, TitleText } from "./styles";
import { SwitchButton } from "@components/SwitchButton";

export function Lock() {

    return (
        <LockContainer>
            <Header />

            <TitleText>Fechaduras:</TitleText>

            <ContentLamp>
                <SwitchButton title="Porta da sala" />
                <SwitchButton title="Porta da cozinha" />
            </ContentLamp>
        </LockContainer>
    )
}