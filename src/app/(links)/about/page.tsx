"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const AboutUsPage = () => {
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
  }

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
  }

  return (
    <section className="relative py-36 overflow-hidden min-h-screen" dir="rtl">
      {/* قسم الصورة مع طبقة داكنة */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/images/lines.jpg"
          alt="عن شركة MZ للأمن والسلامة"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/90"></div>
      </div>

      {/* قسم المحتوى */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* قسم النص */}
          <motion.div
            className="text-white flex flex-col items-start"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-right w-full"
              variants={itemVariants}
            >
              <span className="text-[#4b6b80]">MZ للأمن والسلامة
              </span> - من نحن
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 leading-relaxed text-right w-full"
              variants={itemVariants}
            >
              MZ للأمن والسلامة هي شركة رائدة في مجال تقديم حلول الأمن المتكاملة. نحن نحمي أكثر من 500 منشأة.
            </motion.p>
            
            <motion.div className="space-y-4 w-full" variants={itemVariants}>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4b6b80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-lg mr-2">
                  فريق من الخبراء، مدربين وفقًا للمعايير الدولية
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4b6b80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-lg mr-2">
                  أحدث التقنيات في أنظمة المراقبة والأمن
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4b6b80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-lg mr-2">
                  حلول أمنية مخصصة تلبي احتياجاتك
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* قسم الصورة */}
          <motion.div 
            className="block rounded-lg overflow-hidden shadow-xl w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video">
              <Image
                src="/images/security-team.jpg"
                alt="فريق MZ للأمن والسلامة"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsPage