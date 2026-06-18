import React, { useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
// Removed unused imports
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const ExecutiveDashboard = ({ onBack }: { onBack: () => void }) => {
    const dashboardRef = useRef<HTMLDivElement>(null);


    const geoData = {
        labels: ['ایران', 'امارات'],
        datasets: [{
            data: [95, 3],
            backgroundColor: ['#D4AF37', '#1a365d']
        }]
    };

    const genderData = {
        labels: ['مرد', 'زن'],
        datasets: [{
            data: [40, 60],
            backgroundColor: ['#3182ce', '#e53e3e']
        }]
    };

    const trafficData = {
        labels: ['اکسپلور', 'سایر'],
        datasets: [{
            data: [56, 44],
            backgroundColor: ['#D4AF37', '#718096']
        }]
    };

    return (
        <div className="bg-[#121212] text-slate-100 min-h-screen p-8" dir="rtl" ref={dashboardRef}>
            <header className="mb-10 text-center relative">
                <h1 className="text-4xl font-bold text-amber-500 mb-2">داشبورد استراتژیک گزارش عملکرد ماهانه</h1>
                
            </header>

            <div className="max-w-6xl mx-auto space-y-8">
                {/* Audience Insights */}
                <section className="bg-[#1a1a1a] p-6 rounded-lg border border-amber-900/50">
                    <h2 className="text-2xl font-bold mb-4 text-amber-500">تحلیل رفتار مخاطب و اینسایت اینستاگرام</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300">
                        <div className="p-4 bg-[#121212] rounded">
                             <h4 className="font-bold text-amber-400">عملکرد لید/تعامل</h4>
                             <p className="text-xs">بیشترین انگیجمنت: راز الشایع (۵۸). بیشترین لید: رشد حبابی یا سیستمی؟ (۱۰ درخواست مشاوره). مجموع لید: ۳۰ (از طریق ریل‌ها). فرمول CPL = هزینه/لید.</p>
                        </div>
                        <div className="p-4 bg-[#121212] rounded">
                             <h4 className="font-bold text-amber-400">اینسایت اینستاگرام</h4>
                             <p className="text-xs">ویو کل: ۱۹.۲هزار (۵۶% اکسپلور). ریچ: ۸,۸۳۰ اکانت. پروفایل ویزیت: ۶۵۰ (۸۰ فالو). پربازدیدترین ریل: دیگه گروگان کارمندات نباش.</p>
                        </div>
                        <div className="p-4 bg-[#121212] rounded">
                            <h4 className="font-bold text-amber-400">داده‌های جمعیتی</h4>
                            <p className="text-xs">جذب فالوور: ۲۲ (پست رشد حبابی). ایران: ۹۲٪، امارات: ۲٪. سن: ۲۵-۳۴ (۵۵٪). جنسیت: ۷۸٪ مرد، ۲۲٪ زن.</p>
                        </div>
                    </div>
                </section>


                {/* Charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="bg-[#1a1a1a] p-6 rounded-lg border border-slate-800">
                        <h3 className="text-lg font-bold mb-4">جغرافیای بازدید</h3>
                        <Pie data={geoData}/>
                    </div>
                    <div className="bg-[#1a1a1a] p-6 rounded-lg border border-slate-800">
                        <h3 className="text-lg font-bold mb-4">توزیع جنسیتی</h3>
                        <Pie data={genderData}/>
                    </div>
                    <div className="bg-[#1a1a1a] p-6 rounded-lg border border-slate-800">
                        <h3 className="text-lg font-bold mb-4">منابع ترافیک (اکسپلور)</h3>
                        <Pie data={trafficData}/>
                    </div>
                </div>

                {/* Strategic Roadmap */}
                <section className="bg-[#1a1a1a] p-6 rounded-lg border border-amber-900/50">
                    <h2 className="text-2xl font-bold mb-4 text-amber-500">تصمیمات راهبردی برای ماه بعد</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
                        <div className="p-4 bg-[#121212] rounded border-l-2 border-amber-600">
                             <h4 className="font-bold text-amber-400 mb-2">سیستماتیک کردن تولید (افزایش سرعت)</h4>
                             <p className="text-xs">شیفت به سمت جلسات استودیویی (تولید دسته‌ای)، تعریف «پنجره زمانی تایید» (انضباط سیستم برای جلوگیری از گلوگاه)، کاهش زمان رفت‌وب‌برگشت‌ها.</p>
                        </div>
                        <div className="p-4 bg-[#121212] rounded border-l-2 border-slate-600">
                             <h4 className="font-bold text-slate-400 mb-2">استراتژی مخاطب امارات/خارج</h4>
                             <p className="text-xs">تمرکز بر کیساستادی‌های بین‌المللی موفق (مدل الشایع)، همطرازی بصری و کلامی با پرستیژ مدیران سطح بالا در دبی (عدم تایید فضای بنفش/ارغوانی فعلی).</p>
                        </div>
                        <div className="p-4 bg-[#121212] rounded border-l-2 border-blue-600">
                             <h4 className="font-bold text-blue-400 mb-2">اقدامات فوری/بصری</h4>
                             <p className="text-xs">بارگذاری فوری کاورهای هایلایت (معوقه)، طراحی کاور پست‌ها، فعال‌سازی قدرتمند لینکدین، و پیگیری اجرای بصری با‌کیفیت.</p>
                        </div>
                        <div className="p-4 bg-[#121212] rounded border-l-2 border-green-600">
                             <h4 className="font-bold text-green-400 mb-2">پیشنهاد نهایی</h4>
                             <p className="text-xs">ورود سریع به فاز متا ادز برای کاهش هزینه‌های لید و افزایش بازدهی.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ExecutiveDashboard;
