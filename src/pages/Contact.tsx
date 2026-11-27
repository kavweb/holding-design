import { useState } from 'react';
import { contact, underConstruction } from '../data/content';
import { Mail, Phone, MapPin, Send, Construction } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{contact.title}</h1>
      <p className="text-slate-400 mb-12 max-w-2xl">
        برای درخواست همکاری تجاری، خرید اعتباری، صادرات یا سرمایه‌گذاری فرم زیر را تکمیل کنید.
      </p>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {sent ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">پیام شما ثبت شد</h3>
              <p className="text-slate-400 text-sm">در نسخه فعلی فقط نمایشی است. به‌زودی به سیستم واقعی متصل می‌شود.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">نام و نام خانوادگی</label>
                  <input required className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-amber-500 outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">شماره تماس</label>
                  <input required type="tel" className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-amber-500 outline-none transition" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1.5">ایمیل</label>
                <input type="email" className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-amber-500 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1.5">موضوع</label>
                <select className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-amber-500 outline-none transition">
                  <option>خرید / فروش فولاد</option>
                  <option>همکاری صادراتی</option>
                  <option>سرمایه‌گذاری</option>
                  <option>املاک و پروژه‌ها</option>
                  <option>سایر</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1.5">پیام</label>
                <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-amber-500 outline-none transition resize-none" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg transition">
                <Send className="w-4 h-4" />
                ارسال درخواست
              </button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-white">دفاتر</div>
                <div className="text-sm text-slate-400">مشهد، بلوار امامت، حدفاصل امامت 33 و 35</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-white">تلفن</div>
                <div className="text-sm text-slate-400">09901171059</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-white">ایمیل</div>
                <div className="text-sm text-slate-400">10024.ir@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex gap-3">
            <Construction className="w-5 h-5 text-amber-400 shrink-0" />
            <p className="text-xs text-slate-400">{underConstruction} اتصال واقعی به ایمیل/CRM و نقشه تعاملی دفاتر.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
