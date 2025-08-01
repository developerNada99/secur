"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceItem {
  id: number;
  text: string;
}

const CulturalHeritageProtectionPage: React.FC = () => {
  const services: ServiceItem[] = [
    { id: 1, text: "حماية المعارض والمجموعات الفنية" },
    { id: 2, text: "إدارة وتنظيم تدفق الزوار" },
    { id: 3, text: "الحماية من السرقة والتلفيات" },
    { id: 4, text: "مراقبة المناخ والبيئة في قاعات العرض" },
    { id: 5, text: "مرافقة نقل القطع الفنية القيمة" },
    { id: 6, text: "خطط أمنية للمعارض الخاصة" },
    { id: 7, text: "إدارة الإنذارات وحالات الطوارئ" },
    { id: 8, text: "التعاون مع المرممين والقيمين الفنيين" }
  ];

  return (
    <div className="relative min-h-screen" dir="rtl">
      {/* خلفية مع طبقة داكنة */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/security-about.jpg"
          alt="خدمات حماية المتاحف والتراث الثقافي"
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
              src="/images/servsix.jpg"
              alt="خدمات حماية المتاحف والتراث الثقافي"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </div>

        {/* محتوى النص */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-white/20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-400">
            حماية المتاحف والتراث الثقافي
          </h1>

          <div className="max-w-none">
            <p className="text-lg mb-6">
              حماية متخصصة للقطع الفنية القيمة والإرث الحضاري
            </p>

            <p className="mb-6">
              تقدم خدماتنا المتخصصة في حماية المتاحف والتراث الثقافي الأمان لمعروضاتكم ومجموعاتكم القيمة. نطور خططاً أمنية مخصصة تلبي المتطلبات الخاصة بالقطع التراثية والثقافية.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-300">
              خدمات حماية المتاحف التي نقدمها:
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
              مميزات خدمة حماية التراث الثقافي لدينا:
            </h2>

            <p className="mb-6">
              يتم تدريب عناصرنا الأمنية خصيصاً للتعامل مع القطع الفنية والتراثية. نحن ندرك المتطلبات الخاصة بالمناخ، الإضاءة، والتعامل مع المعروضات ونعمل بشكل وثيق مع طاقم المتحف.
            </p>

            <p className="mb-6">
              من خلال وجود غير مزعج وتقنيات أمنية حديثة، نحمي كنوزكم دون التأثير على تجربة الزوار. تتوافق إجراءاتنا مع المعايير الدولية لحماية التراث الثقافي.
            </p>

            <div className="bg-[#4b6b80]/30 p-6 rounded-lg border border-[#1a3557] mt-10">
              <h3 className="text-xl font-bold mb-4 text-center">
                هل تحتاجون لحماية كنوزكم الثقافية؟
              </h3>
              <p className="text-center mb-4">
                تواصلوا معنا للحصول على استشارة مجانية وخطة أمنية مخصصة لاحتياجاتكم.
              </p>
              <div className="flex justify-center">
                <Link 
                  href="/contact" 
                  className="bg-[#1a3557] hover:bg-[#4b6b80] text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
                  aria-label="اتصل بنا لاستشارة حول حماية التراث الثقافي"
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

export default CulturalHeritageProtectionPage;