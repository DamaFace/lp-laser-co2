import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carrossel from '@/components/Carrossel';
import Depoimentos from '@/components/Depoimentos';
import UltraformerInfo from '@/components/UltraformerInfo';
import PorqueEscolher from '@/components/PorqueEscolher';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget/ChatWidget';

export const metadata = {
  title: 'DamaFace Vinhedo – Laser CO2 em Vinhedo/SP | Rejuvenescimento e Pele Renovada',
  description: 'DamaFace Vinhedo/SP — clínica referência em tratamentos com Laser CO2. Renove a pele, reduza manchas, cicatrizes e linhas finas, melhore textura, firmeza e luminosidade com tecnologia avançada de laser fracionado. Resultados naturais e duradouros. Mais de 8 anos de experiência e +3.000 procedimentos realizados. Agende sua avaliação e conquiste pele rejuvenescida, uniforme e revitalizada!',
  keywords: 'Laser CO2 Vinhedo, rejuvenescimento facial Vinhedo, redução de manchas Vinhedo, cicatrizes Vinhedo, firmeza da pele Vinhedo, textura da pele, clínica estética Vinhedo, DamaFace, laser fracionado CO2, resultados naturais Laser CO2, tratamento seguro laser CO2',
  openGraph: {
    title: 'DamaFace Vinhedo – Tratamentos com Laser CO2',
    description: 'Clínica especializada em Laser CO2 em Vinhedo/SP. Melhore textura, firmeza e luminosidade da pele, reduza manchas, cicatrizes e linhas finas com tecnologia de laser fracionado CO2. Resultados naturais e duradouros. Agende sua avaliação na DamaFace!',
    type: 'website',
  }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ChatWidget />
      <Carrossel />
      <Depoimentos />
      <UltraformerInfo />
      <PorqueEscolher />
      <FAQ />
      <Footer />
    </main>
  );
}
