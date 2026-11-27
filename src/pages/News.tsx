import { departments, underConstruction } from '../data/content';
import { Newspaper, Construction } from 'lucide-react';

const dept = departments.find((d) => d.id === 'news')!;

export default function News() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
          <Newspaper className="w-6 h-6" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">{dept.title}</h1>
      </div>
      <p className="text-lg text-slate-400 max-w-3xl mb-10 leading-relaxed">{dept.description}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {dept.features.map((f) => (
          <div key={f} className="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-200 text-sm font-medium">{f}</span>
          </div>
        ))}
      </div>
      <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center">
        <Construction className="w-10 h-10 text-amber-400 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-white mb-2">بخش اخبار و رسانه</h3>
        <p className="text-slate-400 text-sm max-w-md mx-auto">{underConstruction} بلاگ و بانک قیمت‌ها به‌زودی راه‌اندازی می‌شود.</p>
      </div>
    </div>
  );
}
