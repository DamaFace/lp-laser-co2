import Image from 'next/image';
import background from '@/assets/back-full-face.jpeg';

const LaserCO2Info = () => {
  const areas = [
    {
      title: "Rejuvenescimento Facial",
      description: "Estimula intensa produção de colágeno para reduzir rugas e melhorar a firmeza da pele."
    },
    {
      title: "Tratamento de Manchas",
      description: "Remove eficazmente melasma, manchas senis e hiperpigmentações com precisão."
    },
    {
      title: "Cicatrizes de Acne",
      description: "Atenua cicatrizes profundas e superficiais, uniformizando a textura da pele."
    },
    {
      title: "Flacidez Cutânea",
      description: "Trata a flacidez facial e corporal através do estímulo profundo de colágeno."
    },
    {
      title: "Queloides",
      description: "Reduz cicatrizes hipertróficas com tecnologia a laser de alta precisão."
    },
    {
      title: "Prevenção Anti-Aging",
      description: "Estimula renovação celular para prevenir sinais precoces de envelhecimento."
    }
  ];

  return (
    <section id="procedimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            O que é o <span className="text-[#fa1571] font-semibold">Laser CO2</span>?
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              O Laser CO2 é o tratamento mais avançado para rejuvenescimento cutâneo, utilizando tecnologia fracionada que promove renovação celular profunda e estimula a produção de colágeno.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Considerado padrão ouro em dermatologia, o Laser CO2 trata rugas, manchas, cicatrizes e flacidez com resultados transformadores e duradouros.
            </p>

            <div className="bg-[#ededed] rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">Principais Benefícios:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Redução significativa de rugas e linhas de expressão
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Remoção eficaz de manchas e imperfeições
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Melhora dramática na textura e firmeza da pele
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Resultados progressivos e duradouros
                </li>
              </ul>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={background}
                alt="Tratamento com Laser CO2 para rejuvenescimento facial"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Áreas tratadas */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-black mb-12">
            Principais Indicações do Laser CO2
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <div
                key={index}
                className="bg-[#ededed] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold text-black mb-4">{area.title}</h4>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaserCO2Info;
