"use client"
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

interface NavItem {
  name: string;
  href: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: 'الرئيسية', href: '/' },
    { name: 'الخدمات', href: '/service' },
    { name: 'من نحن', href: '/about' },
    { name: 'اتصل بنا', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full py-1 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* خلفية زجاجية مع تمويه خفيف */}
          <div className={`absolute inset-0 backdrop-blur-sm bg-black/20 shadow-sm`}></div>
          
          {/* الشعار واسم الشركة - أبيض مع تأثير أزرق عند التحويم */}
          <div className="flex items-center z-10">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.png" 
                width={85} 
                height={80} 
                alt="شعار MZ Schutz und Sicherheit"
              />
            </Link>
          </div>

          {/* التنقل لسطح المكتب - نص أبيض مع تأثير أزرق عند التحويم */}
          <div className="flex items-center space-x-8 z-10 max-md:hidden">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#4b6b80] px-3 py-2 text-lg font-medium transition duration-300 hover:bg-white/10"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* زر القائمة للموبايل - أبيض مع تأثير أزرق عند التحويم */}
          <div className="hidden items-center z-10 max-md:flex">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#4b6b80] focus:outline-none transition duration-300 p-2 hover:bg-white/10"
              aria-label="قائمة التنقل"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* تنقل الموبايل - نص أبيض مع تأثير أزرق عند التحويم */}
      <div className={`hidden max-md:flex transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-sm w-full">
          {navItems.map((item: NavItem) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-[#4b6b80] hover:bg-white/10 block px-3 py-3 text-lg font-medium transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}