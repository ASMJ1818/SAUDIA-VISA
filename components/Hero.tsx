
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
      <div className="absolute inset-0 bg-green-800 bg-opacity-70"></div>
      <div className="container mx-auto px-6 py-32 md:py-48 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          إنجاز معاملات السفارة السعودية بسرعة واحترافية
        </h1>
        <p className="bg-yellow-400 text-green-900 font-bold px-4 py-2 inline-block rounded-md mb-8 text-lg">
          مكتب معتمد للسفارة السعودية | ترخيص رقم 22128
        </p>
        <p className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto">
          نقدم خدمات متكاملة لإصدار التأشيرات وتصديق الوثائق والشهادات بكل سهولة وموثوقية.
        </p>
        <a 
          href="#contact" 
          onClick={handleScrollToContact}
          className="bg-white text-green-700 font-bold py-3 px-8 rounded-full hover:bg-slate-200 transition duration-300 text-lg shadow-lg"
        >
          تواصل معنا الآن
        </a>
      </div>
    </section>
  );
};

export default Hero;
