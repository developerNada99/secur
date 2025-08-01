"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const SecurityHeader = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error: Error) => {
        console.log("تم منع التشغيل التلقائي:", error);
      });
    }
  }, []);

  // متغيرات الحركة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Head>
        <title>MZ Schutz und Sicherheit - شركة الأمن والسلامة</title>
        <meta name="description" content="تقدم MZ حلول أمنية متكاملة لحماية الأفراد والممتلكات" />
      </Head>

      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* خلفية الفيديو مع طبقة داكنة */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/contact-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* المحتوى مع تأثيرات الحركة */}
        <motion.div
          className="relative z-10 text-center px-4 text-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          dir="rtl"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            MZ Schutz und Sicherheit
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl font-semibold mb-8 text-[#4b6b80]"
            variants={itemVariants}
          >
            شريككم الأساسي في الأمن والسلامة
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={itemVariants}
          >
            شركة رائدة في مجال أنظمة الأمن والسلامة. نقدم حلولاً متكاملة لحماية الأفراد والممتلكات باستخدام أحدث التقنيات ومعايير الجودة العالية.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Link 
              href={"/contact"} 
              className="bg-[#1a3557] hover:bg-[#4b6b80] text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              اتصل بنا
            </Link>
          </motion.div>
        </motion.div>
      </header>
    </>
  );
};

export default SecurityHeader;