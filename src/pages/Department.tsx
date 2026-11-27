import { useParams, Link } from 'react-router-dom';
import { departments, underConstruction } from '../data/content';
import { ArrowLeft, Construction } from 'lucide-react';

export default function Department() {
  const { id } = useParams<{ id: string }>();
  const dept = departments.find((d) => d.id === id || d.path === `/${id}`);

  // Fallback for direct paths
  const current = dept || departments.find((d) => d.path.slice(1) === id);

  if (!current) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl text-white mb-4">صفحه یافت نشد</h1>
        <Link to="/" className="text-amber-400">بازگشت به خانه</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-10">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400 mb-4">
          <ArrowLeft className="w-4 h-4 rotate-180" />
          بازگشت
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{current.title}</h1>
        <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">{current.description}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {current.features.map((f) => (
          <div
            key={f}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm"
          >
            {f}
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-4">
        <Construction className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-amber-400 mb-1">بخش‌های تکمیلی</h3>
          <p className="text-sm text-slate-400">
            {underConstruction} زیرصفحات تخصصی (مانند قیمت روز، فرم LC، نقشه کشورها، پنل نمایندگی و …) در نسخه‌های بعدی فعال می‌شوند.
          </p>
        </div>
      </div>
    </div>
  );
}
