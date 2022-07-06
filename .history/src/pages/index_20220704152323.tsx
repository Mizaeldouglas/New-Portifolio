import { HomeContainer } from '../styles/HomeStyles';
import HomeHero from '../components/HomeHero';
import { Project } from '../components/Project';

export default function Home() {
  return (
    <HomeContainer>
      <main className="container">
        <HomeHero />
        <Project />
      </main>
    </HomeContainer>
  );
}
