import { ReactNode } from 'react';

import { Container } from './styles';

interface LoadingScreenProps {
  children: ReactNode;
}

export function LoadingScreen({ children }: LoadingScreenProps) {
  return (
    <Container>
      <h1>LoadingScreen</h1>
      {children}
    </Container>
  );
}
