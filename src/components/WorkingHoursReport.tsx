import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';

interface WorkingHoursReportProps {
  dailyLogs: any[];
  taskData: any[];
  totalHours: number;
  currentMonthHours: number;
  carriedOverHours: number;
  formatHours: (h: number) => string;
  chartData: any;
  onBack: () => void;
}

export default function WorkingHoursReport({
  dailyLogs,
  taskData,
  totalHours,
  currentMonthHours,
  carriedOverHours,
  formatHours,
  chartData,
  onBack
}: WorkingHoursReportProps) {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 p-4 md:p-8 font-sans text-slate-100">
      <header className="mb-8 border-b-2 border-slate-800 pb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <button onClick={onBack} className="mb-2 text-slate-400 hover:text-white">&larr; بازگشت به خانه</button>
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
            {dailyLogs.map((log: any, i: number) => (
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
