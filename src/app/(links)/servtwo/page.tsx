"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicePage: React.FC = () => {
  return (
    <div className="relative min-h-screen" dir="rtl">
      {/* خلفية مع طبقة داكنة */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/security-about.jpg"
          alt="خدمات الدوريات والمراقبة الأمنية"
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
      <div className="relative z-10 container mx-auto px-4 py-20 text-white">
        {/* صورة كبيرة في المنتصف */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl h-[600px] relative mt-28 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20">
            <Image
              src="/images/servtwo.jpg"
              alt="خدمات الدوريات الأمنية المتنقلة"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </div>

        {/* محتوى النص */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-white/20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-400">
            خدمات الدوريات والمراقبة الميدانية
          </h1>

          <div className="max-w-none">
            <p className="text-lg mb-6">
              جولات تفتيش متنقلة وتدخل فوري في حالات الطوارئ الأمنية
            </p>

            <p className="mb-6">
              تقدم خدمة الدوريات المتنقلة لدينا حلول أمنية مرنة من خلال جولات تفتيش غير منتظمة في أوقات متغيرة. في حالات الإنذار أو الحوادث الأمنية، نضمن تدخلاً سريعاً من قبل عناصرنا الأمنية المدربة خصيصاً.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-300">
              خدمات الدوريات التي نقدمها:
            </h2>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <li className="flex items-start">
                <span className="text-blue-400 ml-2">•</span>
                جولات تفتيش متنقلة في أوقات غير منتظمة
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 ml-2">•</span>
                متابعة إنذارات وتدخل فوري
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 ml-2">•</span>
                جاهزية على مدار الساعة
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 ml-2">•</span>
                فحص عدة مواقع في مناطق محددة
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 ml-2">•</span>
                وجود مرئي أو غير مرئي حسب الحاجة
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 ml-2">•</span>
                استخدام تقنيات اتصال حديثة
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 ml-2">•</span>
                التنسيق مع الجهات الأمنية في حالات الطوارئ
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 ml-2">•</span>
                توثيق جميع عمليات التفتيش والحوادث
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-300">
              مزايا خدمة الدوريات لدينا:
            </h2>

            <p className="mb-6">
              من خلال دورياتنا المتنقلة، نحقق وجوداً أمنياً فاعلاً مع الاستخدام الأمثل للموارد. تجعل أوقات التفتيش غير المتوقعة من الصعب على المخترقين تحليل أنماطنا واستغلال الثغرات.
            </p>

            <p className="mb-6">
              يتم تدريب عناصرنا الأمنية خصيصاً للمهام الميدانية وتجهيزهم بأحدث المعدات. في حالات الطوارئ، يمكننا الوصول بسرعة والتصرف بشكل مناسب حتى وصول الجهات الأمنية المختصة إذا لزم الأمر.
            </p>

            <div className="bg-[#4b6b80]/30 p-6 rounded-lg border border-[#1a3557] mt-10">
              <h3 className="text-xl font-bold mb-4 text-center">
                مهتم بخدمة الدوريات المتنقلة لدينا؟
              </h3>
              <p className="text-center mb-4">
                اتصل بنا للحصول على خطة أمنية مخصصة مع مسارات دوريات مرنة وفترات تفتيش متنوعة.
              </p>
              <div className="flex justify-center">
                <Link 
                  href="/contact" 
                  className="bg-[#1a3557] hover:bg-[#4b6b80] text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
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

export default ServicePage;