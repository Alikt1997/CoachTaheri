import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import ExecutiveDashboard from './components/ExecutiveDashboard';
import WorkingHoursReport from './components/WorkingHoursReport';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const taskData = [
  { name: 'پژوهش و آنالیز کلمات کلیدی', hours: 6.5 },
  { name: 'تقویم محتوایی و سفر مشتری', hours: 7 },
  { name: 'نگارش سناریوها و هشتگ‌ها', hours: 11 },
  { name: 'جلسات هماهنگی و بازبینی', hours: 14.5 },
  { name: 'طراحی بصری استوری‌ها', hours: 5.5 },
  { name: 'بهینه‌سازی پروفایل و دستورالعمل', hours: 4 },
  { name: 'مدیریت کانال و پشتیبانی', hours: 3 },
  { name: 'متمم ماه گذشته', hours: 5.5 },
];

const dailyLogs = [
  { date: '۶ اردیبهشت', activity: 'تقویم محتوا + ایده محتوا', hours: 2 },
  { date: '۷ اردیبهشت', activity: 'جست و جوی کلمات کلیدی + ادیت پلن ۴۰ روزه + ایده یابی محتوا', hours: 3 },
  { date: '۹ اردیبهشت', activity: 'فرستادن فایل‌های ادیت شده + هماهنگی متنی پیام‌ها', hours: 0.5 },
  { date: '۱۰ اردیبهشت', activity: 'نهایی سازی سناریوی ۵ پست اول + استخراج چک‌لیست‌های ضبط و پروفایل', hours: 4 },
  { date: '۱۳ اردیبهشت', activity: 'جلسه حضوری/آنلاینِ بازبینی و اصلاح سناریوها', hours: 4 },
  { date: '۱۴ اردیبهشت', activity: 'بازبینی و ویرایش متنی سناریوها', hours: 1.5 },
  { date: '۱۵ اردیبهشت', activity: 'بازبینی، توسعه و اصلاح عمیق سناریوها', hours: 50 / 60 },
  { date: '۱۹ اردیبهشت', activity: 'بازبینی نهایی و تدوین سناریوهای پست‌ها', hours: 4 },
  { date: '۲۱ اردیبهشت', activity: 'تنظیم تقویم محتوایی + بررسی لاگین‌ها و دسترسی‌ها', hours: 3.5 },
  { date: '۲۲ اردیبهشت', activity: 'ویرایش تقویم محتوایی + آنالیز عمیق ساختار رقبا', hours: 5.16 },
  { date: '۲۳ اردیبهشت', activity: 'نگارش ۵ سناریوی جدید + تهیه لیست هشتگ‌های هدف', hours: 5 },
  { date: '۲۴ اردیبهشت', activity: 'نگارش سناریوها، طراحی تقویم خرداد، سفر مشتری، پاکسازی فالوور', hours: 4.5 },
  { date: '۲۷ اردیبهشت', activity: 'طراحی سناریو، استوری، هایلایت، کپشن، شناسایی باگ‌ها', hours: 5.16 },
  { date: '۲۸ اردیبهشت', activity: 'ویرایش بایو، پروفایل، سناریوی هایلایت، پاسخگویی', hours: 3 },
  { date: '۲۹ اردیبهشت', activity: 'طراحی سناریوی استوری + اجرای بصری استوری‌ها', hours: 2 },
  { date: '۳۰ اردیبهشت', activity: 'ادیت تصویر پروفایل + ادیت استوری‌ها', hours: 1.5 },
  { date: '۳۱ اردیبهشت', activity: 'تدوین سناریو استوری + پاسخ سوالات + بررسی ویدیوی پست', hours: 2 },
];

export default function App() {
  const [view, setView] = React.useState<'home' | 'dashboard' | 'hours'>('home');

  const totalHours = 57;
  const currentMonthHours = 51.5;
  const carriedOverHours = 5.5;

  const formatHours = (decimalHours: number) => {
    const hours = Math.floor(decimalHours);
    const minutes = Math.round((decimalHours - hours) * 60);
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  };

  const sortedTaskData = [...taskData].sort((a, b) => b.hours - a.hours);

  const chartData = {
    labels: sortedTaskData.map(t => t.name),
    datasets: [{
      data: sortedTaskData.map(t => t.hours),
      backgroundColor: [
        '#fbbf24', '#f59e0b', '#d97706', '#b45309',
        '#64748b', '#475569', '#334155', '#1e293b'
      ],
      borderWidth: 0,
    }],
  };

  if (view === 'dashboard') return <ExecutiveDashboard />;
  if (view === 'hours') return (
    <WorkingHoursReport 
      dailyLogs={dailyLogs} 
      taskData={taskData} 
      totalHours={totalHours}
      currentMonthHours={currentMonthHours}
      carriedOverHours={carriedOverHours}
      formatHours={formatHours}
      chartData={chartData}
      onBack={() => setView('home')}
    />
  );

  return (
    <div className="min-h-screen bg-slate-950 p-8 flex flex-col items-center justify-center gap-6" dir="rtl">
        <h1 className="text-3xl font-bold text-slate-100 mb-8">انتخاب گزارش</h1>
        <button onClick={() => setView('dashboard')} className="w-full max-w-sm bg-slate-900 border border-slate-700 text-white p-6 rounded-lg text-xl font-bold hover:border-amber-600 transition">مشاهده داشبورد استراتژیک</button>
        <button onClick={() => setView('hours')} className="w-full max-w-sm bg-slate-900 border border-slate-700 text-white p-6 rounded-lg text-xl font-bold hover:border-amber-600 transition">مشاهده گزارش ساعات کاری</button>
    </div>
  );
}

