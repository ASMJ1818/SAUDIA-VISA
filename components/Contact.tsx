
import React, { useState, FormEvent } from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    // IMPORTANT: Replace with your own Web3Forms access key.
    // Get your key here: https://web3forms.com/
    const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
            setStatus('error');
            setStatusMessage('يرجى استبدال مفتاح الوصول لتفعيل النموذج.');
            return;
        }

        setStatus('submitting');
        setStatusMessage('');

        const formData = new FormData();
        formData.append('access_key', WEB3FORMS_ACCESS_KEY);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('message', message);
        formData.append('subject', `رسالة جديدة من ${name} عبر الموقع الإلكتروني`);
        formData.append('from_name', 'المتخصصة للتوظيف');
        formData.append('replyto', email);


        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();

            if (data.success) {
                setStatus('success');
                setStatusMessage('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setStatusMessage(data.message || 'حدث خطأ ما. يرجى المحاولة مرة أخرى.');
            }
        } catch (error) {
            setStatus('error');
            setStatusMessage('حدث خطأ أثناء الاتصال بالخادم. يرجى المحاولة مرة أخرى.');
        }
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">اتصل بنا</h2>
                    <p className="text-lg text-gray-600 mt-2">نحن هنا لمساعدتك. تواصل معنا لأي استفسار.</p>
                    <div className="mt-4 w-24 h-1 bg-green-600 mx-auto"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="lg:w-1/3 bg-green-700 text-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <div>
                                    <h4 className="font-semibold">موقعنا</h4>
                                    <p>عمان، الأردن (العنوان التفصيلي)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <div>
                                    <h4 className="font-semibold">هاتف / واتساب</h4>
                                    <p dir="ltr">+962 7XX XXX XXX</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <div>
                                    <h4 className="font-semibold">البريد الإلكتروني</h4>
                                    <p>Alismj20@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="lg:w-2/3 bg-slate-50 p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">أرسل لنا رسالة</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم الكامل</label>
                                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">رقم الهاتف</label>
                                    <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">رسالتك</label>
                                <textarea id="message" name="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors disabled:bg-green-400 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            جارِ الإرسال...
                                        </>
                                    ) : 'إرسال الرسالة'}
                                </button>
                                
                                <div className="h-6 mt-2 text-center">
                                    {status === 'success' && (
                                        <p className="text-sm text-green-600 font-semibold">{statusMessage}</p>
                                    )}
                                    {status === 'error' && (
                                        <p className="text-sm text-red-600 font-semibold">{statusMessage}</p>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
