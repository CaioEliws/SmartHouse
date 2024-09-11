import { Switch, SwitchContainer, TextSwitch } from "./styles";

import React from "react";
import { useState } from "react";

interface LampProps {
    title: string
}

export function SwitchButton({ title }:LampProps) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SwitchContainer>
            <Switch
                trackColor={{false: '#A9A9A9', true: '#e36343'}}
                thumbColor="#fff"
                ios_backgroundColor="#A9A9A9"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

            <TextSwitch>
                { title }
            </TextSwitch>
        </SwitchContainer>
    )
}