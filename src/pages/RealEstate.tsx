import { Link } from 'react-router-dom';
import { departments, underConstruction } from '../data/content';
import { Building2, Construction, ArrowLeft } from 'lucide-react';

const dept = departments.find((d) => d.id === 'realestate')!;

export default function RealEstate() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
          <Building2 className="w-6 h-6" />
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
      <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20 flex gap-3 mb-8">
        <Construction className="w-5 h-5 text-amber-400 shrink-0" />
        <p className="text-sm text-slate-400">{underConstruction}</p>
      </div>
      <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-slate-950 font-medium rounded-lg hover:bg-amber-400 transition">
        تماس برای پروژه‌های ملکی
        <ArrowLeft className="w-4 h-4" />
      </Link>
    </div>
  );
}
