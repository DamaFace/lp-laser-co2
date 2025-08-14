
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { unidadesData } from '@/data/landingData';
import background from 'public/back-full-face.jpeg'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const Hero = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    unidade: ''
  });
  const [openModal, setOpenModal] = useState(false);

  // Função de máscara de telefone
  const phoneMask = (value: string): string => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 2) return digits;

    const ddd = digits.slice(0, 2);
    const rest = digits.slice(2);

    if (rest.length <= 8) {
      return `(${ddd}) ${rest.slice(0, 4)}${rest.length > 4 ? '-' + rest.slice(4) : ''}`;
    } else {
      return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5, 9)}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://n8n-n8n.i4khe5.easypanel.host/webhook/laser-co2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setOpenModal(true);
        setFormData({ nome: '', whatsapp: '', unidade: '' });
      } else {
        alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');
      }
    } catch (error) {
      alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: field === 'whatsapp' ? phoneMask(value) : value
    }));
  };

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-black">
        {/* Background Image with Dark Overlay */}
        <div  
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url(${background.src})`
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/60" />
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-3 gap-8 items-center relative z-10">
            {/* Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-sm">
                Ultraformer<br/>
                <span className="text-white block font-semibold">Tecnologia avançada para</span>
                <span className="text-[#fa1571] block font-semibold">lifting facial e firmeza da pele</span>
              </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed max-w-2xl">
                  O <span className="text-white font-medium">Ultraformer</span> é a evolução em tratamentos estéticos com <span className="text-white font-medium">ultrassom microfocado</span>, com <span className="text-white font-medium">mais de 8 anos</span> de experiência comprovada. 
                  Proporciona <span className="text-white font-medium">lifting facial natural</span>, melhora a firmeza da pele e define contornos, garantindo <span className="text-white font-medium">resultados duradouros</span> de forma segura. 
                  Conquiste uma aparência <span className="text-[#fa1571] font-medium">revitalizada e rejuvenescida</span> sem cirurgia.
                </p>
              <div className="flex flex-wrap gap-3 mb-8">
              </div>
            </div>
            {/* Form */}
            <div id="formulario" className="bg-gray-900/90 rounded-2xl shadow-xl p-6 max-w-md mx-auto w-full border border-[#fa1571]/30">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                Agende sua Avaliação
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  required
                  className="h-11 text-base border border-gray-700 focus:border-[#fa1571] bg-gray-800/80 text-white transition-colors"
                />
                <Input
                  type="tel"
                  placeholder="WhatsApp (11) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                  required
                  className="h-11 text-base border border-gray-700 focus:border-[#fa1571] bg-gray-800/80 text-white transition-colors"
                />
                <Select value={formData.unidade} onValueChange={(value) => handleInputChange('unidade', value)} required>
                  <SelectTrigger className="h-11 text-base border border-gray-700 focus:border-[#fa1571] bg-gray-800/80 text-white transition-colors">
                    <SelectValue placeholder="Selecione sua unidade preferida" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border border-gray-700 text-white">
                    {unidadesData.map((unidade) => (
                      <SelectItem key={unidade.value} value={unidade.value} className="hover:bg-gray-700">
                        {unidade.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-semibold bg-[#fa1571] hover:bg-[#d91460] transition-all duration-300 hover:scale-105 shadow-md"
                >
                  Quero Minha Avaliação
                </Button>
                <p className="text-xs text-gray-400 text-center mt-2">
                  * Avaliação com valor de R$ 99,00, que será descontado do valor total do procedimento.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Modal de confirmação */}
      <Dialog open={openModal}>
        <DialogContent className="max-w-md" onInteractOutside={e => e.preventDefault()} onEscapeKeyDown={e => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold mb-2">Formulário enviado!</DialogTitle>
          </DialogHeader>
          <p className="text-base text-center mb-4">
            Ao clicar no botão abaixo de <b>Ok</b>, você será redirecionado para a página de pagamento da avaliação.<br/>
            Após realizar o pagamento você poderá escolher sua data e horário da avaliação.
          </p>
          <DialogFooter>
            <Button
              className="w-full h-11 text-base font-semibold bg-[#fa1571] hover:bg-[#d91460]"
              onClick={() => {
                setOpenModal(false);
                window.location.href = 'https://mpago.li/2q4t1zh';
              }}
            >
              Ok
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Hero;  
