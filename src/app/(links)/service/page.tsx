"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceItem {
  title: string;
  description: string;
  link: string;
}

const Service = () => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  useEffect(() => setHasMounted(true), []);
  if (!hasMounted) return null;

  // متغيرات الحركة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const services: ServiceItem[] = [
    {
      title: "حماية المنشآت والمصانع",
      description: "حماية المباني التجارية والمستودعات والمجمعات المكتبية. حراسة المنشآت الصناعية ومواقع الإنتاج. التحكم في دخول الأشخاص والمركبات.",
      link: "/servone"
    },
    {
      title: "خدمات الدوريات والمراقبة",
      description: "جولات تفتيش متنقلة في أوقات متغيرة. متابعة الإنذارات والتدخل الفوري في حالات الطوارئ الأمنية.",
      link: "/servtwo"
    },
    {
      title: "أمن المحلات التجارية",
      description: "محققون متخصصون للوقاية من السرقة. خدمات حراسة الأبواب للوجود الرادع والمرئي.",
      link: "/servthree"
    },
    {
      title: "حماية الفعاليات والمناسبات",
      description: "تخطيط وتنفيذ الخطط الأمنية. التحكم في الدخول وحماية الشخصيات المهمة في المناسبات.",
      link: "/servfour"
    },
    {
      title: "حراسة المواقع الإنشائية",
      description: "الحماية من السرقة والتخريب. حراس حرائق ومراقبة ليلية للمواقع الإنشائية.",
      link: "/servfive"
    },
    {
      title: "حماية المتاحف والتراث الثقافي",
      description: "تأمين القطع الفنية والمعارض. تنظيم تدفق الزوار والحماية من التلفيات.",
      link: "/servsix"
    },
    {
      title: "خدمات الاستقبال والبوابين",
      description: "إدارة الزوار وتنظيم الدخول. خدمات المركز الهاتفي والبريدية لشركتك.",
      link: "/servseven"
    },
    {
      title: "خدمات الإقفال",
      description: "جولات فتح وإغلاق المنشآت. جولات تفتيش خارج أوقات العمل لضمان أقصى درجات الأمان.",
      link: "/serveight"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden h-full" dir="rtl">
      {/* خلفية الصورة مع طبقة داكنة */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black/90"></div>
        <Image
          src="/images/security-about.jpg"
          alt="خلفية الصفحة"
          fill
          quality={100}
          priority
          className="object-cover opacity-20" 
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان الرئيسي */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            <span className="text-[#4b6b80]">MZ</span> خدماتنا
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            نكتشف التهديدات الخفية قبل أن تتحول إلى مشاكل حقيقية. حلول أمنية متكاملة لحماية عملك في عالم تتزايد فيه التهديدات الأمنية المعقدة.
          </motion.p>
        </motion.div>

        {/* شبكة الخدمات */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/20 h-full min-h-[300px] flex flex-col"
              whileHover={{ y: -5 }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                </div>
                <div className="mt-auto text-center">
                  <Link 
                    href={service.link} 
                    className="inline-block bg-[#4b6b80] hover:bg-[#3a5668] text-white px-6 py-2 rounded-lg transition-colors duration-300"
                  >
                    المزيد من التفاصيل
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;