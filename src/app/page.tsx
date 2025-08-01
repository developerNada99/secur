// app/page.tsx
'use client';
import SecurityHeader from "./(links)/head/page";
import About from "./(links)/about/page";
import Service from "./(links)/service/page";
import Contact from "./(links)/contact/page";

// استخدام dynamic import وتعطيل SSR

export default function Home() {
  return (
    <div>
      <SecurityHeader />
      <Service />
      <About />
      <Contact />
    </div>
  );
}
