import React from 'react';

const LegalInfoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100" dir="rtl">
      {/* طبقة داكنة للخلفية */}
      <div className="fixed inset-0 bg-black bg-opacity-70" style={{ zIndex: -1 }}></div>
      
      {/* حاوية المحتوى */}
      <div className="relative max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">البيانات القانونية</h1>
        
        <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">شركة SSK للأمن والخدمات الأمنية</h2>
              <address className="not-italic">
                شارع رادولفزيلر 25<br />
                78467 كونستانس، ألمانيا
              </address>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">معلومات الاتصال</h3>
              <p className="mb-1">هاتف: +49 (0)7531 / 8071826</p>
              <p className="mb-1">فاكس: +49 (0)7531 / 8071828</p>
              <p className="mb-1">
                البريد الإلكتروني: 
                <a href="mailto:info@ssk4stars.de" className="text-blue-400 hover:underline mr-1">
                  info@ssk4stars.de
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">المدير المفوض:</h3>
              <p>مارتن رايستر</p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">السجل التجاري</h3>
              <p>محكمة السجل التجاري في فرايبورغ</p>
              <p>رقم التسجيل: HRB 706144</p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">رقم ضريبة القيمة المضافة</h3>
              <p>رقم تعريف ضريبة القيمة المضافة وفقًا للمادة 27 أ من قانون ضريبة القيمة المضافة:</p>
              <p>DE274660067</p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">حقوق الصور</h3>
              <p>صورة الحفلة الموسيقية © drx – من Fotolia.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LegalInfoPage;