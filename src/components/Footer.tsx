import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteInfo, navigation } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="لوگوی هلدینگ قاسمی"
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="font-bold text-white">{siteInfo.shortName}</div>
                <div className="text-xs text-amber-400/80">{siteInfo.tagline}</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {siteInfo.description}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              {navigation.slice(0, 6).map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-slate-400 hover:text-amber-400 transition">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">دپارتمان‌ها</h3>
            <ul className="space-y-2">
              {navigation.find((n) => n.children)?.children?.map((child) => (
                <li key={child.path}>
                  <Link to={child.path} className="text-sm text-slate-400 hover:text-amber-400 transition">
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">تماس با ما</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" />
                <span>مشهد، بلوار امامت، حدفاصل امامت 33 و 35</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>09901171059</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>09158589019</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>051-91011059</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>10024@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {siteInfo.name}. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <Link to="/contact" className="hover:text-amber-400">حریم خصوصی</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-amber-400">شرایط استفاده</Link>
            <span>|</span>
            <span className="text-slate-600">نسخه میانی – بخش‌هایی در دست ساخت</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
