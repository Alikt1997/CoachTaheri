import React, { useState } from 'react';

const CplCalculator: React.FC = () => {
    const [totalCost, setTotalCost] = useState<number>(0);
    const totalLeads = 35; // Based on previous report
    const cpl = totalLeads > 0 ? (totalCost / totalLeads).toFixed(2) : 0;

    return (
        <div className="bg-[#121212] p-6 rounded-lg border border-slate-700">
            <h3 className="text-lg font-bold text-amber-500 mb-4">محاسبه‌گر هزینه به ازای هر لید (CPL)</h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm text-slate-400 mb-1">کل هزینه‌های کمپین (تومان)</label>
                    <input
                        type="number"
                        value={totalCost}
                        onChange={(e) => setTotalCost(Number(e.target.value))}
                        className="w-full bg-[#1a1a1a] border border-slate-600 rounded p-2 text-white"
                        placeholder="مثال: ۵۰۰۰۰۰"
                    />
                </div>
                <div>
                    <p className="text-sm text-slate-400">تعداد کل لیدها: <span className="text-white font-bold">{totalLeads}</span></p>
                    <p className="text-lg font-bold text-amber-500 mt-2">CPL: {cpl} تومان</p>
                </div>
            </div>
        </div>
    );
};

export default CplCalculator;
