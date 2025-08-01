"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceItem {
  id: number;
  text: string;
}

const ReceptionSecurityPage: React.FC = () => {
  const services: ServiceItem[] = [
    { id: 1, text: "استقبال الزوار وخدمتهم بشكل احترافي" },
    { id: 2, text: "مراقبة الدخول وتسجيل الزيارات" },
    { id: 3, text: "إدارة المركز الهاتفي وتوجيه الاستفسارات" },
    { id: 4, text: "استلام وإدارة الطرود والبريد" },
    { id: 5, text: "مراقبة مداخل ومخارج المبنى" },
    { id: 6, text: "مراقبة الموظفين والموردين" },
    { id: 7, text: "إدارة الطوارئ والإنذارات" },
    { id: 8, text: "مراقبة مواقف السيارات وتنظيم الزوار" }
  ];

  return (
    <div className="relative min-h-screen" dir="rtl">
      {/* خلفية مع طبقة داكنة */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/security-about.jpg"
          alt="خدمات الاستقبال والبوابين الأمنية"
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
              src="/images/servseven.jpg"
              alt="خدمات الاستقبال والبوابين"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </div>

        {/* محتوى النص */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-white/20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-400">
            خدمات الاستقبال والبوابين
          </h1>

          <div className="max-w-none">
            <p className="text-lg mb-6">
              نقطة الاتصال الأولى الاحترافية والحضور الأمني لشركتك
            </p>

            <p className="mb-6">
              تجمع خدمات الاستقبال والبوابين لدينا بين خدمة العملاء المهذبة والرقابة الأمنية الفعالة. نحن الوجه المختص لشركتك ونضمن في نفس الوقت حماية مرافقك.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-300">
              خدمات الاستقبال التي نقدمها:
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
              مميزات خدمات الاستقبال لدينا:
            </h2>

            <p className="mb-6">
              يتم تدريب موظفينا في الاستقبال على خدمة العملاء والقضايا الأمنية. إنهم يمثلون شركتك بشكل احترافي للخارج ويضمنون في نفس الوقت دخولاً منظماً. من خلال خدماتنا، تحصل على الأمان دون المساس بالضيافة.
            </p>

            <p className="mb-6">
              نقدم حلولاً مرنة تتراوح من كشك البوابة التقليدي إلى إدارة الاستقبال الحديثة. جميع موظفينا لديهم معرفة مكانية متعمقة وهم على دراية بإجراءات عملك وسياسات الأمان.
            </p>

            <div className="bg-[#4b6b80]/30 p-6 rounded-lg border border-[#1a3557] mt-10">
              <h3 className="text-xl font-bold mb-4 text-center">
                هل تحتاج إلى خدمات استقبال احترافية؟
              </h3>
              <p className="text-center mb-4">
                تواصل معنا للحصول على استشارة مجانية حول حلول الاستقبال والبوابين لدينا.
              </p>
              <div className="flex justify-center">
                <Link 
                  href="/contact" 
                  className="bg-[#1a3557] hover:bg-[#4b6b80] text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
                  aria-label="اتصل بنا لاستشارة حول خدمات الاستقبال"
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

export default ReceptionSecurityPage;