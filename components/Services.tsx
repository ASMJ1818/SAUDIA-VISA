
import React from 'react';

const CheckCircleIcon: React.FC<{className: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const DocumentTextIcon: React.FC<{className: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const BriefcaseIcon: React.FC<{className: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const AcademicCapIcon: React.FC<{className: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" />
    </svg>
);

const servicesData = [
    {
        icon: <BriefcaseIcon className="h-12 w-12 text-green-600" />,
        title: 'تأشيرات العمل',
        description: 'إصدار وتفويض تأشيرات العمل لمختلف المهن مع متابعة كافة الإجراءات اللازمة.'
    },
    {
        icon: <AcademicCapIcon className="h-12 w-12 text-green-600" />,
        title: 'تصديق الشهادات',
        description: 'تصديق الشهادات الجامعية، المدرسية، والوثائق الرسمية من السفارة السعودية.'
    },
    {
        icon: <DocumentTextIcon className="h-12 w-12 text-green-600" />,
        title: 'تقديم طلب مصادقة',
        description: 'نساعدك في تقديم طلبات المصادقة السعودية وضمان استيفاء جميع الشروط.'
    },
    {
        icon: <CheckCircleIcon className="h-12 w-12 text-green-600" />,
        title: 'تقديم طلب الاعتماد المهني',
        description: 'تسهيل إجراءات تقديم طلب الاعتماد المهني للمتخصصين والفنيين.'
    },
    {
        icon: <CheckCircleIcon className="h-12 w-12 text-green-600" />,
        title: 'طلب هيئة المهندسين',
        description: 'مساعدتك في تقديم طلبات الانضمام والاعتماد من هيئة المهندسين السعودية.'
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">خدماتنا</h2>
                    <p className="text-lg text-gray-600 mt-2">حلول متكاملة لجميع معاملات السفارة السعودية</p>
                    <div className="mt-4 w-24 h-1 bg-green-600 mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6 mx-auto">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">{service.title}</h3>
                            <p className="text-gray-600 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
