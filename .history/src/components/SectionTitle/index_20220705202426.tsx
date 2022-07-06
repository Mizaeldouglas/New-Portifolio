import { ReactNode } from 'react';

import { Container } from './styles';

interface SectionTilteProps {
  title: string | ReactNode;
  description?: string | ReactNode;
}

export function SectionTitle({ title, description }: SectionTilteProps) {
  return (
    <Container data-aos="fade-right">
      <h1>#{title}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}
