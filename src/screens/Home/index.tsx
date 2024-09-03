import { Header } from '@components/Header';

import { Content, HomeContainer } from './styles';
import { Button } from '@components/Button';

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <Content>
        <Button />
      </Content>
    </HomeContainer>
  );
}