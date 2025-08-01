"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RetailSecurityPage: React.FC = () => {
  const servicesList = [
    "محققون متخصصون للوقاية من السرقة",
    "خدمة بوابين مرئية كرادع",
    "مراقبة غير ظاهرة لحركة العملاء",
    "تأمين البضائع واستراتيجيات منع السرقة",
    "تهدئة النزاعات وحل المشكلات",
    "التعاون مع الجهات المحلية",
    "تدريب موظفيك على اكتشاف السرقة",
    "خطط أمنية مخصصة لمتجرك"
  ];

  return (
    <div className="relative min-h-screen" dir="rtl">
      {/* خلفية مع طبقة داكنة */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/security-about.jpg"
          alt="خدمات أمن المتاجر والتجزئة"
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
        {/* صورة كبيرة متجاوبة */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] relative mt-12 md:mt-28 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20">
            <Image
              src="/images/servthree.jpg"
              alt="خدمات أمن المتاجر والتجزئة"
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </div>
        </div>

        {/* محتوى النص - متجاوب */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto border border-white/20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center text-blue-400">
            أمن المتاجر والتجزئة
          </h1>

          <div className="max-w-none">
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              حلول احترافية لمنع السرقة ووجود أمني مرئي لمتجرك
            </p>

            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
              تجمع خدماتنا الأمنية المتخصصة للمتاجر بين محققين متخفين وخدمات بوابين ظاهرين لمنع السرقة وخلق بيئة تسوق آمنة.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 text-blue-300">
              خدماتنا لأمن المتاجر:
            </h2>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {servicesList.map((item, index) => (
                <li key={index} className="flex items-start text-sm sm:text-base">
                  <span className="text-blue-400 ml-2">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 text-blue-300">
              مزايا خدمتنا لأمن المتاجر:
            </h2>

            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
              يعمل محققونا المتخفون باحترافية وبدون لفت الانتباه لمنع السرقة وحلها. في نفس الوقت، توفر خدمة البوابين الظاهرين رادعاً قوياً بوجودهم المرئي.
            </p>

            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
              نطور حلولاً أمنية مخصصة تناسب تماماً مساحة متجرك، مجموعة منتجاتك، وطبيعة عملائك.
            </p>

            <div className="bg-[#4b6b80]/30 p-4 sm:p-6 rounded-lg border border-[#1a3557] mt-6 sm:mt-10">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">
                هل تحتاج إلى خدمة أمن متاجر احترافية؟
              </h3>
              <p className="text-center mb-3 sm:mb-4 text-sm sm:text-base">
                اتصل بنا للحصول على استشارة مجانية بدون التزام.
              </p>
              <div className="flex justify-center">
                <Link 
                  href="/contact" 
                  className="bg-[#1a3557] hover:bg-[#4b6b80] text-white font-medium sm:font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition duration-300 transform hover:scale-105 text-sm sm:text-base"
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

export default RetailSecurityPage;