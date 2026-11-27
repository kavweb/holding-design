import { underConstruction } from '../data/content';
import { Construction, FolderKanban } from 'lucide-react';

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
          <FolderKanban className="w-6 h-6" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">پروژه‌ها و فعالیت‌ها</h1>
      </div>
      <p className="text-lg text-slate-400 max-w-3xl mb-10">
        پروژه‌های صنعتی و عمرانی، صادراتی و ساختمانی گروه. طرح‌های در حال اجرا و تکمیل‌شده به‌زودی با جزئیات فنی و تصاویر نمایش داده می‌شوند.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {['پروژه‌های صنعتی و عمرانی', 'پروژه‌های صادراتی', 'پروژه‌های ساختمانی'].map((t) => (
          <div key={t} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="font-semibold text-white mb-2">{t}</h3>
            <p className="text-sm text-slate-500">جزئیات به‌زودی</p>
          </div>
        ))}
      </div>
      <div className="p-6 rounded-xl bg-amber-500/5 border border-amber-500/20 flex gap-3">
        <Construction className="w-5 h-5 text-amber-400 shrink-0" />
        <p className="text-sm text-slate-400">{underConstruction}</p>
      </div>
    </div>
  );
}
