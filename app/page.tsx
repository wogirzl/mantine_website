import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { HeroTitle } from '../components/HeroTitle/HeroTitle';

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroTitle />
      <Welcome />
      <ColorSchemeToggle />
      <Footer />
    </>
  );
}
