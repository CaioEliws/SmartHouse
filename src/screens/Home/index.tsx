import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@components/Header';
import { Content, HomeContainer } from './styles';
import { Button } from '@components/Button';

export function Home() {
  const navigation = useNavigation<any>();

  return (
    <HomeContainer>
      <Header />

      <Content>
        <Button
          title="Lâmpadas"
          iconName="lightbulb-outline"
          onPress={() => navigation.navigate('Lamp')}
        />
        <Button
          title="Fechaduras"
          iconName="lock-outline"
          onPress={() => navigation.navigate('Lock')}
        />
      </Content>
    </HomeContainer>
  );
}
