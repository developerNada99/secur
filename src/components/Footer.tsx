import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  url: string;
}

interface LegalLink {
  text: string;
  url: string;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <FaFacebook size={24} />,
      label: "فيسبوك",
      url: "#"
    },
    {
      icon: <FaInstagram size={24} />,
      label: "إنستغرام",
      url: "#"
    }
  ];

  const legalLinks: LegalLink[] = [
    {
      text: "سياسة الخصوصية",
      url: "/datenschutz"
    },
    {
      text: "بيانات الشركة",
      url: "/impressum"
    }
  ];

  return (
    <footer className="relative bg-[#4b6b80] text-white py-8 overflow-hidden" dir="rtl">
      {/* طبقة داكنة للخلفية */}
      <div className="absolute inset-0 bg-black/35 bg-opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* أيقونات وسائل التواصل الاجتماعي - في المنتصف */}
        <div className="flex justify-center items-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              className="hover:text-white transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        {/* روابط قانونية - في المنتصف تحت أيقونات التواصل */}
        <div className="flex justify-center space-x-6 mb-4">
          {legalLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              className="text-sm text-gray-100 hover:text-white transition-colors"
            >
              {link.text}
            </a>
          ))}
        </div>
        
        {/* حقوق النشر - في المنتصف تحت الروابط القانونية */}
        <div className="text-center text-sm text-gray-100">
          <a 
            href="https://www.linkedin.com/in/nada-ahmed-5936b6251/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="صفحة لينكدإن للمطور ندى أحمد"
          >
            تم التطوير بواسطة ندا أحمد
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;