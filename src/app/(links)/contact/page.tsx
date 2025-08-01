"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

// تعريف أنواع الحركات المتحركة
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    filter: "blur(4px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      duration: 0.8,
    },
  },
};

// نوع بيانات عنصر الاتصال
interface ContactItem {
  icon: React.ReactNode;
  title: string;
  content: string;
}

// بيانات عناصر الاتصال
const contactItems: ContactItem[] = [
  {
    icon: <FaPhone className="text-2xl text-[#4b6b80]" />,
    title: "الهاتف",
    content: "+49 (0) 7541 123456",
  },
  {
    icon: <FaEnvelope className="text-2xl text-[#4b6b80]" />,
    title: "البريد الإلكتروني",
    content: "info@mz-schutz.de",
  },
  {
    icon: <FaClock className="text-2xl text-[#4b6b80]" />,
    title: "ساعات العمل",
    content: "من الإثنين إلى الجمعة: 08:00 - 17:00\nالسبت والأحد: مغلق",
  },
  {
    icon: <FaMapMarkerAlt className="text-2xl text-[#4b6b80]" />,
    title: "العنوان",
    content: "شارع المثال 123\n88045 فريدريشهافن",
  },
];

const ContactPage: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex bg-[#4b6b80] items-center justify-center overflow-hidden pt-36" 
      dir="rtl"
    >
      {/* خلفية الصفحة */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="خلفية شركة MZ للأمن والسلامة"
          width={1500}
          height={1500}
          className="object-cover opacity-20" 
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* المحتوى الرئيسي */}
      <motion.div
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {/* عنوان الصفحة */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            تواصل مع شركة MZ للأمن والسلامة
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto" 
            variants={itemVariants}
          >
            فريقنا متاح دائماً لمساعدتك في جميع استفساراتك الأمنية وخدمات الحماية.
          </motion.p>
        </motion.div>

        {/* بطاقات معلومات الاتصال */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16"
          variants={containerVariants}
        >
          {contactItems.map((contact, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:border-blue-400 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">{contact.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{contact.title}</h3>
              <p className="text-gray-300 whitespace-pre-line">{contact.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* نموذج التواصل */}
        <motion.div
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">أرسل استفسارك</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* حقل الاسم الكامل */}
            <div className="md:col-span-1">
              <label htmlFor="fullname" className="block text-gray-300 mb-2">
                الاسم الكامل <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                required
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4b6b80] focus:border-transparent"
                placeholder="الرجاء إدخال اسمك الكامل"
              />
            </div>

            {/* حقل البريد الإلكتروني */}
            <div className="md:col-span-1">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                البريد الإلكتروني <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4b6b80] focus:border-transparent"
                placeholder="example@domain.com"
              />
            </div>

            {/* حقل الهاتف */}
            <div className="md:col-span-1">
              <label htmlFor="phone" className="block text-gray-300 mb-2">
                رقم الهاتف
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4b6b80] focus:border-transparent"
                placeholder="+966 50 123 4567"
              />
            </div>

            {/* حقل الموضوع */}
            <div className="md:col-span-1">
              <label htmlFor="subject" className="block text-gray-300 mb-2">
                موضوع الرسالة
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4b6b80] focus:border-transparent"
                placeholder="الغرض من التواصل"
              />
            </div>

            {/* حقل الرسالة */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-gray-300 mb-2">
                الرسالة <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4b6b80] focus:border-transparent"
                placeholder="الرجاء كتابة رسالتك بالتفصيل..."
              ></textarea>
            </div>

            {/* زر الإرسال */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-[#4b6b80] hover:bg-[#5f86a0] text-white font-medium rounded-lg transition duration-300 transform hover:scale-105"
                aria-label="إرسال الرسالة"
              >
                إرسال الرسالة
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactPage;