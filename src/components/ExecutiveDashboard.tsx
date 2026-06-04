import React, { useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { ArrowLeft } from 'lucide-react';
// Removed unused imports
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const ExecutiveDashboard = ({ onBack }: { onBack: () => void }) => {
    const dashboardRef = useRef<HTMLDivElement>(null);

// Export function removed
    const barData = {
        labels: ['راز الشایع', 'دیگر گروگان کارمندت نباش'],
        datasets: [{
            label: 'انگیجمنت',
            data: [55, 10], 
            backgroundColor: '#D4AF37'
        }, {
            label: 'لید',
            data: [8, 2],
            backgroundColor: '#C5A880'
        }]
    };

    const geoData = {
        labels: ['ایران', 'ترکیه', 'کانادا', 'افغانستان', 'سایر'],
        datasets: [{
            data: [55, 18, 9, 9, 9],
            backgroundColor: ['#D4AF37', '#1a365d', '#2d3748', '#4a5568', '#718096']
        }]
    };

    return (
        <div className="bg-[#121212] text-slate-100 min-h-screen p-8" dir="rtl" ref={dashboardRef}>
            <header className="mb-10 text-center relative">
                <h1 className="text-4xl font-bold text-amber-500 mb-2">داشبورد استراتژیک گزارش عملکرد ماهانه</h1>
                <button 
                  onClick={onBack}
                  className="fixed bottom-6 right-6 p-4 bg-amber-600 rounded-full text-white shadow-lg hover:bg-amber-700 z-50 flex items-center gap-2"
                >
                  <ArrowLeft size={24} /> بازگشت
                </button>
            </header>

            <div className="max-w-6xl mx-auto space-y-8">
                {/* 40 Days Recap */}
                <section className="bg-[#1a1a1a] p-6 rounded-lg border border-amber-900/50">
                    <h2 className="text-2xl font-bold mb-4 text-amber-500">چهل روزی که گذشت در یک نگاه (ابتدای اردیبهشت تا میانه ی خرداد)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
                        <div className="bg-[#121212] p-4 rounded border-r-2 border-amber-600">
                            <h3 className="font-bold text-amber-400 mb-2">کارهای مهم این ماه</h3>
                            <p>تمرکز روی چیدمان و آماده کردن کارهای پایه، بایو، مسیر حرکت مخاطب، ۱۵ سناریو، پاکسازی فالووینگها و استارت لینکدین.</p>
                        </div>
                        <div className="bg-[#121212] p-4 rounded border-r-2 border-red-600">
                            <h3 className="font-bold text-red-400 mb-2">مشکلات و گیرها</h3>
                            <p>گیرهای اداری و سرعتی در تایید محتوا (&gt;۲۴ساعت)، تاخیر در آپلود پستها (۳ از ۵) و بارگذاری نشدن کاورهای جدید.</p>
                        </div>
                        <div className="bg-[#121212] p-4 rounded border-r-2 border-blue-600">
                            <h3 className="font-bold text-blue-400 mb-2">تحلیل آمار و رفتار مخاطب</h3>
                            <p>بیش از ۱۰ هزار بازدید، ویدیو «الشایع» بمب ماه (۸ از ۱۰ لید جذبشده از این ویدیو)، ۹۰٪ فالوورها ایرانی.</p>
                        </div>
                        <div className="bg-[#121212] p-4 rounded border-r-2 border-green-600">
                            <h3 className="font-bold text-green-400 mb-2">دروس و اکشنپلان</h3>
                            <p>تغییر هدف (مدیران امارات)، حل مشکل تایید (فیلمبرداری دستهای در استودیو)، تکرار فرمول موفق (مدل الشایع) و کاهش هزینه لید با تولید محتوای سریعتر.</p>
                        </div>
                    </div>
                </section>

                {/* Infrastructure Section */}
                <section className="bg-[#1a1a1a] p-6 rounded-lg border border-amber-900/50">
                    <h2 className="text-2xl font-bold mb-4 text-amber-600">۱. اتاق فرمانِ زیرساخت</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-300">
                        <li>✅ بازطراحی کامل بایو (Bio)، تحقیق تخصصی کلمات کلیدی، تعیین سبک محتوایی، ساختار سفر مشتری.</li>
                        <li>✅ استخراج چکلیستهای تخصصی «بایدها و نبایدهای پروفایل» و «ضبط ویدیو».</li>
                        <li>✅ لیست هشتگها، تقویم محتوایی خرداد، طراحی لیست و هایلایتها با سناریو.</li>
                        <li>✅ نگارش ۱۵ سناریوی تخصصی، نظارت بر ادیت پستها، ساخت استوریها و سناریو.</li>
                        <li>✅ لاگین اکانتها، پاکسازی فالووینگها، ادیت تصاویر پروفایل و راهاندازی لینکدین.</li>
                        <li>✅ ترین کردن هوش مصنوعی، طراحی کاورها، پاسخگویی و جلسات هفتگی.</li>
                    </ul>
                </section>

                {/* Video & KPI */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden border border-slate-700 relative">
                        <div className="absolute top-2 left-2 z-10 bg-black/70 text-white text-[10px] p-2 rounded max-w-[80%]">
                            اگر ویدیو را به درستی نمی‌توانید مشاهده کنید، روی دکمه pop out ضربه بزنید.
                        </div>
                        <iframe className="w-full h-full border-0" src="https://drive.google.com/file/d/1B3nEBMWnzpkpKGiVAPLc8hCJoNIRhDyL/preview" allowFullScreen></iframe>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-slate-100 mb-4">وضعیت تعهدات</h3>
                        <div>
                            <p className="text-sm mb-1">وضعیت انتشار پستها (۳ از ۵)</p>
                            <div className="w-full bg-slate-800 h-2 rounded"><div className="bg-amber-600 h-2 rounded" style={{width: '60%'}}></div></div>
                        </div>
                        <div>
                            <p className="text-sm mb-1">امتیاز انتشار استوری (۵ از ۱۰)</p>
                            <div className="w-full bg-slate-800 h-2 rounded"><div className="bg-amber-600 h-2 rounded" style={{width: '50%'}}></div></div>
                        </div>
                        <div className="p-3 bg-red-900/10 border border-red-700/50 rounded text-xs text-red-200">
                            گلوگاه سرعت (باگ عملیاتی): تایید محتوا بیش از ۲۴ ساعت طول می‌کشد.
                        </div>
                    </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="bg-[#1a1a1a] p-6 rounded-lg border border-slate-800">
                        <h3 className="text-lg font-bold mb-4">محتوای پربازده (انگیجمنت و لید)</h3>
                        <Bar data={barData}/>
                    </div>
                    <div className="bg-[#1a1a1a] p-6 rounded-lg border border-slate-800">
                        <h3 className="text-lg font-bold mb-4">جغرافیای بازدید</h3>
                        <Pie data={geoData}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExecutiveDashboard;
