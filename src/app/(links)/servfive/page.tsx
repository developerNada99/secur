"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceItem {
  id: number;
  text: string;
}

const ConstructionSecurityPage: React.FC = () => {
  const services: ServiceItem[] = [
    { id: 1, text: "مراقبة وحراسة موقع البناء على مدار الساعة" },
    { id: 2, text: "جولات تفتيش متنقلة في أوقات متغيرة" },
    { id: 3, text: "حراس حرائق ومراقبة أنظمة السلامة" },
    { id: 4, text: "مراقبة دخول العاملين والموردين" },
    { id: 5, text: "الحماية من سرقة المواد وأعمال التخريب" },
    { id: 6, text: "توثيق كافة الأنشطة والحوادث" },
    { id: 7, text: "التنسيق مع إدارة المشروع والجهات الأمنية" },
    { id: 8, text: "خطط أمنية مخصصة لكل موقع بناء" }
  ];

  return (
    <div className="relative min-h-screen" dir="rtl">
      {/* خلفية مع طبقة داكنة */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/security-about.jpg"
          alt="خدمات حراسة مواقع البناء"
          fill
          className="object-cover"
          quality={100}
          priority
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 md:py-20 text-white">
        {/* حاوية الصورة المتجاوبة */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] relative mt-12 md:mt-28 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20">
            <Image
              src="/images/servfive.jpg"
              alt="خدمات حراسة مواقع البناء"
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </div>
        </div>

        {/* محتوى النص المتجاوب */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 md:p-8 max-w-4xl mx-auto border border-white/20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center text-blue-400">
            حراسة مواقع البناء
          </h1>

          <div className="max-w-none">
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              حماية شاملة لموقعك من السرقة، التخريب، والدخول غير المصرح به
            </p>

            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
              تقدم خدماتنا المتخصصة في حراسة مواقع البناء حماية على مدار الساعة. نمنع سرقة المواد والمعدات ونضمن أمان موقعك طوال فترة البناء.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 text-blue-300">
              خدمات حراسة مواقع البناء:
            </h2>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {services.map((service) => (
                <li key={service.id} className="flex items-center gap-1 text-sm sm:text-base">
                  <span className="text-blue-400">•</span>
                  {service.text}
                </li>
              ))}
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 text-blue-300">
              مميزات خدمتنا لحراسة مواقع البناء:
            </h2>

            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
              يتمتع عناصرنا الأمنية بخبرة واسعة في حراسة مواقع البناء ويدركون جيداً المخاطر والتحديات الشائعة في هذه المواقع.
            </p>

            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
              نقدم حلولاً أمنية مرنة تتكيف مع كل مرحلة من مراحل البناء والمخاطر الخاصة بموقعك.
            </p>

            <div className="bg-[#4b6b80]/30 p-4 sm:p-6 rounded-lg border border-[#1a3557] mt-6 sm:mt-10">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">
                هل تحتاج إلى خدمات حراسة لموقع البناء؟
              </h3>
              <p className="text-center mb-3 sm:mb-4 text-sm sm:text-base">
                تواصل معنا للحصول على استشارة مجانية دون التزام
              </p>
              <div className="flex justify-center">
                <Link 
                  href="/contact" 
                  className="bg-[#1a3557] hover:bg-[#4b6b80] text-white font-medium sm:font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition duration-300 transform hover:scale-105 text-sm sm:text-base"
                  aria-label="اتصل بنا للحصول على استشارة"
                >
                  اتصل بنا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionSecurityPage;