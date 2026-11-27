import { about, siteInfo } from '../data/content';
import { Target, Eye, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-3xl mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">درباره ما</h1>
        <p className="text-lg text-slate-400 leading-relaxed">{about.intro}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-semibold text-white">مأموریت</h2>
          </div>
          <p className="text-slate-400 leading-relaxed">{about.mission}</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-semibold text-white">چشم‌انداز</h2>
          </div>
          <p className="text-slate-400 leading-relaxed">{about.vision}</p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Heart className="w-6 h-6 text-amber-400" />
          ارزش‌ها
        </h2>
        <div className="flex flex-wrap gap-3">
          {about.values.map((v) => (
            <span
              key={v}
              className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-sm"
            >
              {v}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          تاریخچه و مسیر رشد
        </h2>
        <p className="text-slate-400 leading-relaxed">{about.history}</p>
        <p className="mt-4 text-sm text-slate-500">
          صفحه اختصاصی دکتر حسن قاسمی، گواهینامه‌ها و ساختار مدیریتی به‌زودی تکمیل می‌شود.
        </p>
      </div>
    </div>
  );
}
