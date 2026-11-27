import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigation, siteInfo } from '../data/content';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="لوگوی هلدینگ قاسمی"
              className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition"
            />
            <div className="hidden sm:block">
              <div className="text-sm md:text-base font-bold text-white leading-tight">{siteInfo.shortName}</div>
              <div className="text-[10px] md:text-xs text-amber-400/80">{siteInfo.tagline}</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setDeptOpen(true)}
                  onMouseLeave={() => setDeptOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm text-slate-300 hover:text-amber-400 transition rounded-lg hover:bg-slate-800/50">
                    {item.title}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {deptOpen && (
                    <div className="absolute top-full right-0 mt-1 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-xl py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition"
                          onClick={() => setDeptOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm rounded-lg transition ${
                      isActive
                        ? 'text-amber-400 bg-slate-800/60'
                        : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800/50'
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition shadow-lg shadow-amber-500/20"
            >
              درخواست همکاری
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="منو"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950">
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.path}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 text-slate-300 hover:text-amber-400"
                    onClick={() => setDeptOpen(!deptOpen)}
                  >
                    {item.title}
                    <ChevronDown className={`w-4 h-4 transition ${deptOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {deptOpen && (
                    <div className="pr-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-3 py-2 text-sm text-slate-400 hover:text-amber-400"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2.5 text-slate-300 hover:text-amber-400"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className="block mt-3 text-center px-4 py-2.5 bg-amber-500 text-slate-950 font-medium rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              درخواست همکاری
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
