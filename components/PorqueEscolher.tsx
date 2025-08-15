import { diferenciaisData } from '@/data/landingData';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const PorqueEscolher = () => {
  return (
    <section className="py-16 bg-white/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Por que escolher a <span className="text-[#fa1571]">DamaFace?</span>
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Excelência, segurança e naturalidade em cada resultado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {diferenciaisData.map((diferencial) => (
            <div 
              key={diferencial.id} 
              className="bg-white/90 border border-[#fa1571]/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <CheckCircle size={22} className="text-[#fa1571]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{diferencial.titulo}</h3>
                  <p className="text-gray-700 text-base leading-relaxed">{diferencial.descricao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/80 border border-[#fa1571]/10 rounded-xl p-6 text-center mb-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#fa1571] mb-1">8+</div>
              <div className="text-gray-700 text-sm">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#fa1571] mb-1">2500+</div>
              <div className="text-gray-700 text-sm">Pacientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#fa1571] mb-1">100%</div>
              <div className="text-gray-700 text-sm">Segurança e Qualidade</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Pronto para sua transformação?
          </h3>
          <p className="text-base text-gray-500 mb-6 max-w-2xl mx-auto">
            Veja como você ficaria com Laser CO2
          </p>
          <Link
            href="#resultados"
            className="inline-block bg-[#fa1571] hover:bg-[#d91460] text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-200 hover:scale-105 shadow-sm"
          >
            Veja o Antes e Depois dos nossos pacientes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PorqueEscolher;
