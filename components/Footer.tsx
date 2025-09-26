
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} المتخصصة للتوظيف. جميع الحقوق محفوظة.</p>
        <p className="text-sm text-gray-400 mt-2">
          مكتب معتمد لإنجاز معاملات السفارة السعودية في الأردن.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
