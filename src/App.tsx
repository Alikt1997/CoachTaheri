/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
import { Doughnut, Bar } from 'react-chartjs-2';

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

  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 p-4 md:p-8 font-sans text-slate-100">
      <header className="mb-8 border-b-2 border-slate-800 pb-6 flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-100">گزارش ساعت‌های کاری</h1>
          <p className="text-slate-400 mt-1">توسط: علی کهن ترابی | تاریخ: خرداد ۱۴۰۴</p>
        </div>
        <div className="text-left bg-slate-900 p-4 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-400">کارفرما:</p>
          <p className="font-semibold text-lg text-slate-100">جناب امیرحسین طاهری</p>
          <p className="text-2xl font-bold text-amber-400">۵۷ ساعت</p>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'ساعات کل', value: totalHours },
          { label: 'ساعات خالص این ماه', value: currentMonthHours },
          { label: 'ساعات متمم قبلی', value: carriedOverHours },
          { label: 'تسک اصلی: جلسات', value: '۱۴.۵ ساعت' },
        ].map((kpi, i) => (
          <div key={i} className="bg-slate-900 p-6 border border-slate-800 rounded-lg shadow-sm">
            <p className="text-sm text-slate-400">{kpi.label}</p>
            <p className="text-3xl font-bold mt-2 text-slate-100">{kpi.value.toString().replace('.', '/')}</p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="bg-slate-900 p-6 border border-slate-800 rounded-lg shadow-sm lg:col-span-1 flex items-center justify-center">
          <Doughnut data={chartData} options={{ plugins: { legend: { labels: { color: '#f1f5f9' }, position: 'bottom' } } }} />
        </div>
        <div className="bg-slate-900 p-6 border border-slate-800 rounded-lg shadow-sm lg:col-span-2">
          <Bar data={chartData} options={{ indexAxis: 'y', plugins: { legend: { display: false } }, scales: { x: { ticks: { color: '#f1f5f9' } }, y: { ticks: { color: '#f1f5f9' } } } }} />
        </div>
      </section>

      <section className="bg-slate-900 border border-slate-800 rounded-lg shadow-sm overflow-hidden mt-8">
        <h2 className="p-4 font-bold text-lg text-slate-100 border-b border-slate-800">گزارش روزانه</h2>
        <table className="w-full text-right border-collapse">
          <thead className="bg-slate-800 border-b border-slate-700">
            <tr>
              <th className="p-4 font-semibold text-slate-300">تاریخ</th>
              <th className="p-4 font-semibold text-slate-300">شرح فعالیت</th>
              <th className="p-4 font-semibold text-slate-300">ساعات</th>
            </tr>
          </thead>
          <tbody>
            {dailyLogs.map((log, i) => (
              <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/50">
                <td className="p-4 text-slate-300 whitespace-nowrap">{log.date}</td>
                <td className="p-4 text-slate-300">{log.activity}</td>
                <td className="p-4 font-mono font-medium text-amber-400">{formatHours(log.hours)}</td>
              </tr>
            ))}
            <tr className="bg-slate-800 border-b border-slate-700">
              <td className="p-4 text-slate-300" colSpan={2}>ساعات خالص این ماه</td>
              <td className="p-4 font-mono text-slate-100">51:30</td>
            </tr>
            <tr className="bg-slate-800 border-b border-slate-700">
              <td className="p-4 text-slate-300" colSpan={2}>ساعات متمم از ماه فروردین</td>
              <td className="p-4 font-mono text-slate-100">5:30</td>
            </tr>
            <tr className="bg-slate-800 font-bold">
              <td className="p-4 text-slate-100" colSpan={2}>جمع کل نهایی</td>
              <td className="p-4 font-mono text-amber-400">57:00</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
