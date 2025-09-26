
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">من نحن؟</h2>
            <p className="text-lg text-gray-600 mt-2">خبراؤك المعتمدون لإنجاز معاملاتك</p>
            <div className="mt-4 w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
                <img src="https://picsum.photos/600/400" alt="About Us" className="rounded-lg shadow-2xl" />
            </div>
            <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold text-green-700 mb-4">المتخصصة للتوظيف</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    نحن مكتب مرخص ومعتمد من السفارة السعودية في الأردن، متخصصون في تسهيل كافة الإجراءات المتعلقة بالسفارة السعودية. مهمتنا هي توفير وقتكم وجهدكم من خلال تقديم خدمات دقيقة وموثوقة.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                    يقوم فريق عملنا بتفويض تأشيرات العمل بمختلف المهن، وتصديق الشهادات الجامعية والمدرسية، بالإضافة إلى جميع الوثائق الرسمية التي تتطلب مصادقة من السفارة السعودية. نلتزم بأعلى معايير الاحترافية لضمان إنجاز معاملاتكم بكفاءة وسرعة.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
