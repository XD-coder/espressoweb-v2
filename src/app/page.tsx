import Header from '../components/Header';
import Hero from '../components/Hero';
import Plans from '../components/Plans';
import Features from '../components/Features';
import Founders from '../components/Founders';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow relative">
        <Hero />
        <Plans />
        <Features />
        <Founders />
      </main>
      <Footer />
    </div>
  );
}
