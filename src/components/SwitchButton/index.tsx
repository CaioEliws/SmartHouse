import { SwitchContainer, TextSwitch, SwitchView } from "./styles";
import { Switch } from "react-native";

import React from "react";
import { useState } from "react";
import { View } from "react-native";

interface LampProps {
    title: string
}

export function SwitchButton({ title }:LampProps) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SwitchContainer>
            <SwitchView 
                style={{
                    backgroundColor: isEnabled ? '#e36343' : '#A9A9A9',
                }}
            >
                <Switch
                    trackColor={{false: '#A9A9A9', true: '#e36343'}}
                    thumbColor={isEnabled ? "#fff" : "#fff"}
                    ios_backgroundColor="#A9A9A9"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </SwitchView>

            <TextSwitch>
                { title }
            </TextSwitch>
        </SwitchContainer>
    )
}