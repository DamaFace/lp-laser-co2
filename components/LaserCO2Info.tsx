import Image from 'next/image';
import background from 'public/back-full-face.jpeg';

const LaserCO2Info = () => {
  const areasTratadas = [
    { 
      title: "Rejuvenescimento Facial", 
      description: "Redução de rugas e linhas de expressão, com estímulo intenso de colágeno para uma pele mais firme e jovem." 
    },
    { 
      title: "Tratamento de Manchas", 
      description: "Eliminação de melasma, manchas senis e hiperpigmentações com tecnologia precisa e eficaz." 
    },
    { 
      title: "Remoção de Cicatrizes", 
      description: "Atenuação de cicatrizes de acne, cirúrgicas e traumáticas, melhorando a textura da pele." 
    },
    { 
      title: "Tratamento de Queloides", 
      description: "Redução de queloides e cicatrizes hipertróficas com resultados clinicamente comprovados." 
    },
    { 
      title: "Flacidez Cutânea", 
      description: "Melhora significativa da flacidez facial e corporal através do estímulo profundo de colágeno." 
    },
    { 
      title: "Prevenção do Envelhecimento", 
      description: "Tratamento anti-aging que previne e reverte os sinais do envelhecimento cutâneo." 
    }
  ];

  return (
    <section id="laser-co2" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            O Poder do
            <span className="text-[#fa1571] font-semibold"> Laser CO2</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O padrão ouro em tratamentos dermatológicos para rejuvenescimento e correção de imperfeições
          </p>
        </div>

        {/* Conteúdo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              O <strong>Laser CO2</strong> é considerado o <strong>tratamento mais completo</strong> para rejuvenescimento facial e corporal, utilizando tecnologia de <strong>alta precisão</strong> para renovar profundamente as camadas da pele. Seus resultados são <strong>transformadores</strong> e <strong>duradouros</strong>, com eficácia comprovada por especialistas em dermatologia.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Indicado para todos os tipos de pele, o Laser CO2 promove uma <strong>renovação celular intensa</strong>, estimulando a produção de colágeno e elastina, essenciais para uma pele firme, lisa e com viço juvenil.
            </p>
            <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-8 border border-[#fa1571]/20">
              <h3 className="text-2xl font-bold text-black mb-4">Vantagens Exclusivas:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  <strong>Tecnologia padrão ouro</strong> em dermatologia estética
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Resultados <strong>visíveis após a primeira sessão</strong>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Tratamento <strong>personalizado</strong> para cada necessidade
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Eficaz para <strong>todos os tipos de pele</strong> e idades
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Tecnologia <strong>comprovada cientificamente</strong> e aprovada pela ANVISA/FDA
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
                priority
              />
            </div>
          </div>
        </div>

        {/* Áreas tratadas */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-black mb-12">
            Principais Indicações do Laser CO2
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasTratadas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-[#fa1571]/10"
              >
                <h4 className="text-xl font-bold text-[#fa1571] mb-3">{area.title}</h4>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaserCO2Info;
