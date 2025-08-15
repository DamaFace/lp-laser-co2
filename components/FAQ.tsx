'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '@/data/landingData';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Perguntas
            <span className="text-[#fa1571]"> Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre Laser CO2
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item) => (
              <div 
                key={item.id}
                className="bg-[#ededed] rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-200 transition-colors duration-200"
                  aria-expanded={openItems.includes(item.id)}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-black pr-4">
                    {item.pergunta}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(item.id) ? (
                      <ChevronUp size={24} className="text-[#fa1571]" />
                    ) : (
                      <ChevronDown size={24} className="text-[#fa1571]" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-300 pt-4">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {item.resposta}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
