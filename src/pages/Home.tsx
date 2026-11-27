import type { ReactNode } from "react";
import { Link } from 'react-router-dom';
import { ArrowLeft, Factory, Globe, Building2, Newspaper, TrendingUp, Shield } from 'lucide-react';
import { homeHero, departments, siteInfo } from '../data/content';

const icons: Record<string, ReactNode> = {
  Factory: <Factory className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
  Newspaper: <Newspaper className="w-8 h-8" />,
  MapPin: <TrendingUp className="w-8 h-8" />,
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-slate-900 via-slate-950 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-6">
              <Shield className="w-3.5 h-3.5" />
              هلدینگ صنعتی و سرمایه‌گذاری
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {homeHero.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              {homeHero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl transition shadow-lg shadow-amber-500/25"
              >
                {homeHero.ctaPrimary}
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-amber-500/50 text-slate-200 hover:text-amber-400 font-medium rounded-xl transition"
              >
                {homeHero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Departments grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">حوزه‌های فعالیت</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            چهار ستون اصلی گروه: فولاد، صادرات، املاک و رسانه تخصصی
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.slice(0, 4).map((dept) => (
            <Link
              key={dept.id}
              to={dept.path}
              className="group relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-all hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition">
                {icons[dept.icon] || <Factory className="w-8 h-8" />}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition">
                {dept.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                {dept.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-amber-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                مشاهده جزئیات
                <ArrowLeft className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-l from-amber-600 to-amber-800 p-8 md:p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-2">
                آماده‌اید همکاری را شروع کنید؟
              </h2>
              <p className="text-slate-900/80">
                برای خرید اعتباری، صادرات یا سرمایه‌گذاری با ما در ارتباط باشید.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 px-8 py-3.5 bg-slate-950 text-amber-400 font-semibold rounded-xl hover:bg-slate-900 transition shadow-lg"
            >
              فرم تماس و همکاری
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
