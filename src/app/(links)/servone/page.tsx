"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicePage = () => {
  return (
    <div className="relative min-h-screen" dir="rtl">
      {/* خلفية مع طبقة داكنة */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/security-about.jpg"
          alt="خدمات حماية المنشآت والخدمات الأمنية"
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
              src="/images/servone.jpg"
              alt="خدمات حماية المنشآت"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </div>

        {/* محتوى النص */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-white/20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-400">
            خدمات حماية المنشآت والمواقع الصناعية
          </h1>

          <div className="max-w-none">
            <p className="text-lg mb-6">
              نقدم حلول أمنية شاملة لحماية منشآتكم ومواقعكم الصناعية
            </p>

            <p className="mb-6">
              تتخصص شركتنا في الحماية الشاملة للمباني التجارية والمستودعات والمجمعات المكتبية والمنشآت الصناعية. نضمن بيئة آمنة من خلال أنظمة متكاملة مع مراقبة مستمرة وضوابط دخول صارمة.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-300">
              خدمات حماية المنشآت التي نقدمها:
            </h2>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <li className="flex items-center gap-1">
                <span className="text-blue-400 ml-2">•</span>
                حراسة المباني التجارية ومراكز الأعمال
              </li>
              <li className="flex items-center gap-1">
                <span className="text-blue-400 ml-2">•</span>
                تأمين المستودعات ومراكز اللوجستيات
              </li>
              <li className="flex items-center gap-1">
                <span className="text-blue-400 ml-2">•</span>
                حماية المنشآت الصناعية ومواقع الإنتاج
              </li>
              <li className="flex items-center gap-1">
                <span className="text-blue-400 ml-2">•</span>
                أنظمة التحكم في دخول الأشخاص والمركبات
              </li>
              <li className="flex items-center gap-1">
                <span className="text-blue-400 ml-2">•</span>
                ضوابط دخول وخروج على مدار 24/7
              </li>
              <li className="flex items-center gap-1">
                <span className="text-blue-400 ml-2">•</span>
                تفتيش المركبات والبضائع
              </li>
              <li className="flex items-center gap-1">
                <span className="text-blue-400 ml-2">•</span>
                أنظمة التعريف وبطاقات الأمان
              </li>
              <li className="flex items-center gap-1">
                <span className="text-blue-400 ml-2">•</span>
                إدارة الزوار والموظفين
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-300">
              مزايا خدماتنا الأمنية:
            </h2>

            <p className="mb-6">
              نقدم حلول أمنية مخصصة - بدءًا من عناصر الأمن المؤهلين وصولاً إلى أحدث أنظمة المراقبة والتحكم في الدخول. يتمتع فريقنا بخبرة واسعة في التعامل مع جميع التهديدات الأمنية المحتملة.
            </p>

            <p className="mb-6">
              تشمل خدماتنا إجراءات وقائية ضد السرقة والتخريب والتجسس الصناعي وغيرها من الأعمال غير القانونية. نقوم بتوثيق جميع الإجراءات الأمنية وإعداد تقارير نشاط مفصلة.
            </p>

            <div className="bg-[#4b6b80]/30 p-6 rounded-lg border border-[#1a3557] mt-10">
              <h3 className="text-xl font-bold mb-4 text-center">
                هل تحتاج إلى حلول أمنية لمنشآتك؟
              </h3>
              <p className="text-center mb-4">
                اتصل بنا الآن للحصول على استشارة مجانية وتحليل أمني
              </p>
              <div className="flex justify-center">
                <Link href={"/contact"} className="bg-[#1a3557] hover:bg-[#4b6b80] text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
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