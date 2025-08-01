"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceItem {
  id: number;
  text: string;
}

const LockingServicePage: React.FC = () => {
  const services: ServiceItem[] = [
    { id: 1, text: "جولات منتظمة للفتح والإغلاق" },
    { id: 2, text: "جولات تفتيش خارج أوقات العمل" },
    { id: 3, text: "إدارة وحفظ المفاتيح" },
    { id: 4, text: "فحص أنظمة الإنذار عند الفتح/الإغلاق" },
    { id: 5, text: "خدمة فتح الطوارئ عند فقدان المفاتيح" },
    { id: 6, text: "توثيق جميع عمليات الفتح والإغلاق" },
    { id: 7, text: "مراقبة دخول عمال النظافة" },
    { id: 8, text: "تعديل مرن وفقاً لساعات عملك" }
  ];

  return (
    <div className="relative min-h-screen" dir="rtl">
      {/* خلفية مع طبقة داكنة */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/security-about.jpg"
          alt="خدمات الإغلاق والفتح الأمنية"
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
              src="/images/serveight.jpg"
              alt="خدمات الإغلاق والفتح"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </div>

        {/* محتوى النص */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-white/20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-400">
            خدمات الإغلاق والفتح
          </h1>

          <div className="max-w-none">
            <p className="text-lg mb-6">
              خدمات موثوقة للفتح والإغلاق لشركتك
            </p>

            <p className="mb-6">
              تتولى خدماتنا مسؤولية الفتح والإغلاق المنتظم لمقرات عملك، مكاتبك أو منشآتك الإنتاجية. نضمن خدمات في الموعد المحدد وموثوقة على مدار الساعة.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-300">
              خدمات الإغلاق والفتح التي نقدمها:
            </h2>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {services.map((service) => (
                <li key={service.id} className="flex items-center gap-1">
                  <span className="text-blue-400 ml-2">•</span>
                  {service.text}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-300">
              مميزات خدمات الإغلاق والفتح لدينا:
            </h2>

            <p className="mb-6">
              تخفف خدماتنا الموثوقة عنك مسؤولية الفتح والإغلاق اليومية لمقراتك. جميع موظفينا يتمتعون بثقة عالية ويخضعون لفحوصات منتظمة. نعمل بنظام توثيق متكامل لجميع عمليات الفتح والإغلاق.
            </p>

            <p className="mb-6">
              من خلال خدماتنا، توفر تكاليف العمالة وتكتسب مرونة في تحديد ساعات عملك. تكتسب خدماتنا أهمية خاصة للشركات ذات ساعات العمل المتغيرة أو المتعددة الفروع.
            </p>

            <div className="bg-[#4b6b80]/30 p-6 rounded-lg border border-[#1a3557] mt-10">
              <h3 className="text-xl font-bold mb-4 text-center">
                مهتم بخدمات الإغلاق والفتح لدينا؟
              </h3>
              <p className="text-center mb-4">
                تواصل معنا للحصول على استشارة مجانية حول حلولنا المخصصة للفتح والإغلاق.
              </p>
              <div className="flex justify-center">
                <Link 
                  href="/contact" 
                  className="bg-[#1a3557] hover:bg-[#4b6b80] text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
                  aria-label="اتصل بنا لاستشارة حول خدمات الإغلاق والفتح"
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

export default LockingServicePage;