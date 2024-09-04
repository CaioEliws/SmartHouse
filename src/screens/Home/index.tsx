import { Header } from '@components/Header';

import { Content, HomeContainer } from './styles';
import { Button } from '@components/Button';

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <Content>
        <Button title='Lâmpadas' iconName='lightbulb-outline' />

        <Button title='Fechaduras' iconName='lock-outline' />
      </Content>
    </HomeContainer>
  );
}