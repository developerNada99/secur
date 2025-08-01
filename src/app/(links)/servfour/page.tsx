"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceItem {
  id: number;
  text: string;
}

const EventSecurityPage: React.FC = () => {
  const services: ServiceItem[] = [
    { id: 1, text: "خطط أمنية مخصصة للفعاليات" },
    { id: 2, text: "ضوابط دخول احترافية وفحص التذاكر" },
    { id: 3, text: "حماية الشخصيات المهمة والضيوف البارزين" },
    { id: 4, text: "إدارة الزوار والتحكم في الحشود" },
    { id: 5, text: "حراسة كاملة لموقع الفعالية" },
    { id: 6, text: "تهدئة النزاعات وحل المشكلات" },
    { id: 7, text: "التنسيق مع المنظمين والجهات الرسمية" },
    { id: 8, text: "إدارة الطوارئ وتخطيط عمليات الإخلاء" }
  ];

  return (
    <div className="relative min-h-screen" dir="rtl">
      {/* خلفية مع طبقة داكنة */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/security-about.jpg"
          alt="خدمات حماية الفعاليات والمناسبات"
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
              src="/images/servfour.jpg"
              alt="خدمات حماية الفعاليات"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </div>

        {/* محتوى النص */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-white/20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-400">
            حماية الفعاليات والمناسبات
          </h1>

          <div className="max-w-none">
            <p className="text-lg mb-6">
              حماية احترافية لفعالياتك بجميع أحجامها
            </p>

            <p className="mb-6">
              نقدم حلول أمنية مخصصة للحفلات، الحفلات الموسيقية، المعارض والمناسبات الخاصة. نضمن سيراً آمناً من خلال ضوابط دخول احترافية، حماية الشخصيات وإدارة الحشود.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-300">
              خدمات حماية الفعاليات التي نقدمها:
            </h2>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {services.map((service) => (
                <li key={service.id} className="flex items-start">
                  <span className="text-blue-400 ml-2">•</span>
                  {service.text}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-300">
              مميزات خدمة حماية الفعاليات لدينا:
            </h2>

            <p className="mb-6">
              يتم تدريب عناصرنا الأمنية خصيصاً لحماية الفعاليات ونضمن أداءً احترافياً. نعدل خططنا الأمنية بمرونة لتتناسب مع نوع وحجم فعاليتك - من المناسبات الصغيرة إلى الفعاليات الكبيرة.
            </p>

            <p className="mb-6">
              من خلال إجراءات أمنية وقائية ووجود غير مزعج، نخلق بيئة آمنة دون التأثير على أجواء فعاليتك. فرقنا مجهزة بأحدث تقنيات الاتصال وتعمل بشكل وثيق مع المنظمين والجهات الرسمية.
            </p>

            <div className="bg-[#4b6b80]/30 p-6 rounded-lg border border-[#1a3557] mt-10">
              <h3 className="text-xl font-bold mb-4 text-center">
                هل تخططون لفعالية؟
              </h3>
              <p className="text-center mb-4">
                اتصلوا بنا للحصول على استشارة مجانية وخطة أمنية مخصصة لفعاليتكم.
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

export default EventSecurityPage;