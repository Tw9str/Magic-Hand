import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Contact from '@/components/home/Contact';
import Clients from '@/components/home/Clients';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Clients />
      <Contact />
    </main>
  );
}
