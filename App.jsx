import React, { useMemo, useState } from 'react'
import {
  Activity, ArrowDownRight, ArrowUpRight, Bell, BriefcaseBusiness, Building2,
  ChartNoAxesCombined, ChevronDown, Clock3, Globe2, Menu, Newspaper, Search,
  Settings2, ShieldCheck, Sparkles, X, Coins, Fuel, LayoutDashboard
} from 'lucide-react'
import { markets, companies, news } from './data'

const copy = {
  en: {
    eyebrow: 'GLOBAL FINANCIAL INTELLIGENCE', overview: 'Market overview',
    subtitle: 'A clearer view of the markets that move the world.',
    live: 'DEMO MARKET DATA', today: 'Today', all: 'All markets',
    metals: 'Metals', energy: 'Energy', indices: 'Indices', fx: 'FX',
    watchlist: 'Market watch', viewAll: 'View all', movers: 'Top companies',
    news: 'Latest market intelligence', read: 'Read briefing',
    dashboard: 'Overview', markets: 'Markets', companies: 'Companies',
    insights: 'News & insights', search: 'Search markets, companies…',
    notification: 'Notifications', demo: 'Demo preview',
    disclaimer: 'Illustrative sample data • Not live quotes or investment advice',
    performance: 'Market performance', day: '1D', week: '1W', month: '1M',
    welcome: 'Good morning', updated: 'Sample dashboard',
    explore: 'Explore global markets', allCompanies: 'Company directory',
    sectors: 'SECTORS', marketCap: 'MARKET CAP', details: 'Open profile',
    noResults: 'No matching results found.'
  },
  ar: {
    eyebrow: 'ذكاء الأسواق المالية العالمية', overview: 'نظرة عامة على الأسواق',
    subtitle: 'رؤية أوضح للأسواق التي تحرك العالم.',
    live: 'بيانات تجريبية', today: 'اليوم', all: 'كل الأسواق',
    metals: 'المعادن', energy: 'الطاقة', indices: 'المؤشرات', fx: 'العملات',
    watchlist: 'مراقبة الأسواق', viewAll: 'عرض الكل', movers: 'أبرز الشركات',
    news: 'أحدث أخبار الأسواق', read: 'اقرأ الملخص',
    dashboard: 'الرئيسية', markets: 'الأسواق', companies: 'الشركات',
    insights: 'الأخبار والتحليلات', search: 'ابحث عن سوق أو شركة…',
    notification: 'الإشعارات', demo: 'نسخة تجريبية',
    disclaimer: 'بيانات توضيحية تجريبية • ليست أسعارًا لحظية أو نصيحة استثمارية',
    performance: 'أداء السوق', day: 'يوم', week: 'أسبوع', month: 'شهر',
    welcome: 'أهلاً بك', updated: 'لوحة بيانات تجريبية',
    explore: 'استكشف الأسواق العالمية', allCompanies: 'دليل الشركات',
    sectors: 'القطاعات', marketCap: 'القيمة السوقية', details: 'عرض الملف',
    noResults: 'لا توجد نتائج مطابقة.'
  }
}

function Sparkline({ points, positive }) {
  const coords = points.map((p, i) => `${(i / (points.length - 1)) * 100},${70 - p}`).join(' ')
  return <svg className="sparkline" viewBox="0 0 100 70" preserveAspectRatio="none" aria-hidden="true">
    <polyline points={coords} fill="none" stroke={positive ? '#b9a16b' : '#c47b76'} strokeWidth="2.2" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
}

function MarketCard({ item }) {
  return <article className="market-card glass">
    <div className="market-top"><span className="symbol">{item.symbol}</span><span className="market-dot" /></div>
    <div className="market-name">{item.name}</div>
    <div className="market-price-row"><strong>{item.price}</strong><span className={item.positive ? 'positive' : 'negative'}>{item.positive ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>} {item.change}</span></div>
    <div className="spark-wrap"><Sparkline points={item.points} positive={item.positive}/></div>
  </article>
}

export default function App() {
  const [lang, setLang] = useState('en')
  const [active, setActive] = useState('dashboard')
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [period, setPeriod] = useState('1D')
  const t = copy[lang]
  const rtl = lang === 'ar'

  const filteredMarkets = useMemo(() => markets.filter(m => {
    const categoryMatch = filter === 'all' || (filter === 'metals' && m.value === 'Precious metals') || (filter === 'energy' && m.value === 'Energy') || (filter === 'indices' && m.value === 'Indices')
    const textMatch = `${m.name} ${m.symbol} ${m.ar}`.toLowerCase().includes(query.toLowerCase())
    return categoryMatch && textMatch
  }), [filter, query])
  const filteredCompanies = companies.filter(c => `${c.name} ${c.ticker}`.toLowerCase().includes(query.toLowerCase()))

  const nav = [
    { id: 'dashboard', label: t.dashboard, icon: LayoutDashboard },
    { id: 'markets', label: t.markets, icon: ChartNoAxesCombined },
    { id: 'companies', label: t.companies, icon: Building2 },
    { id: 'insights', label: t.insights, icon: Newspaper },
  ]
  const setPage = (id) => { setActive(id); setMenuOpen(false) }

  return <div className={`app ${rtl ? 'rtl' : ''}`} dir={rtl ? 'rtl' : 'ltr'}>
    <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
      <div className="brand"><div className="brand-mark">V</div><div><div className="brand-name">VOLKA<span>.</span></div><div className="brand-sub">{t.eyebrow}</div></div><button className="close-menu" onClick={() => setMenuOpen(false)}><X size={18}/></button></div>
      <div className="side-label">{rtl ? 'مساحة العمل' : 'WORKSPACE'}</div>
      <nav>{nav.map(({id,label,icon:Icon}) => <button key={id} className={`nav-link ${active === id ? 'selected' : ''}`} onClick={() => setPage(id)}><Icon size={18}/><span>{label}</span>{id === 'insights' && <i className="nav-count">3</i>}</button>)}</nav>
      <div className="side-bottom">
        <div className="sidebar-note"><ShieldCheck size={17}/><div><b>{t.demo}</b><small>{rtl ? 'الأسعار المعروضة للتوضيح فقط' : 'Quotes shown for demonstration'}</small></div></div>
        <div className="profile-row"><div className="avatar">V</div><div><b>VOLKA</b><small>Personal workspace</small></div><Settings2 size={17} className="muted-icon"/></div>
      </div>
    </aside>

    {menuOpen && <button className="scrim" aria-label="Close menu" onClick={() => setMenuOpen(false)}/>}
    <main className="main">
      <header className="topbar">
        <div className="top-left"><button className="mobile-menu icon-button" onClick={() => setMenuOpen(true)}><Menu size={20}/></button><div className="breadcrumb">VOLKA <span>/</span> {nav.find(n => n.id === active)?.label}</div></div>
        <div className="top-actions">
          <label className="search-box"><Search size={16}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder={t.search}/><kbd>⌘ K</kbd></label>
          <button className="language-button" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}><Globe2 size={16}/>{lang === 'en' ? 'عربي' : 'English'}</button>
          <div className="notification-wrap"><button className="icon-button notification-button" aria-label={t.notification} onClick={() => setNotificationsOpen(!notificationsOpen)}><Bell size={18}/><i/></button>
            {notificationsOpen && <div className="notification-pop glass"><b>{t.notification}</b><p>{rtl ? 'لا توجد إشعارات جديدة في النسخة التجريبية.' : 'No new notifications in this demo.'}</p></div>}
          </div>
        </div>
      </header>

      <div className="content">
        {active === 'dashboard' && <>
          <section className="hero">
            <div><div className="eyebrow"><span className="eyebrow-line"/> {t.eyebrow}</div><h1>{t.overview}<span className="gold-dot">.</span></h1><p>{t.subtitle}</p></div>
            <div className="hero-meta"><span className="demo-pill"><i/> {t.live}</span><span className="date-pill"><Clock3 size={14}/> {t.today}</span></div>
          </section>

          <section className="stats-grid">
            <div className="stat-card glass"><div className="stat-heading"><span>{rtl ? 'الأسواق المتابعة' : 'TRACKED MARKETS'}</span><Activity size={17}/></div><div className="stat-value">06 <small>{rtl ? 'أصول' : 'ASSETS'}</small></div><div className="stat-foot">{rtl ? 'عبر فئات عالمية متعددة' : 'Across global asset classes'}</div></div>
            <div className="stat-card glass"><div className="stat-heading"><span>{rtl ? 'الشركات الرئيسية' : 'MAJOR COMPANIES'}</span><Building2 size={17}/></div><div className="stat-value">04 <small>{rtl ? 'شركات' : 'COMPANIES'}</small></div><div className="stat-foot">{rtl ? 'شركات عالمية مختارة' : 'Selected global companies'}</div></div>
            <div className="stat-card glass accent-stat"><div className="stat-heading"><span>{rtl ? 'حالة المنصة' : 'PLATFORM STATUS'}</span><Sparkles size={17}/></div><div className="stat-value status-value"><i/> {rtl ? 'تجريبي' : 'Preview'}</div><div className="stat-foot">{rtl ? 'واجهة أولية قيد التطوير' : 'Initial interface in development'}</div></div>
          </section>

          <section className="section-block">
            <div className="section-heading"><div><div className="section-kicker">01 / {rtl ? 'الأسواق' : 'THE MARKETS'}</div><h2>{t.watchlist}</h2></div><button className="text-link" onClick={() => setPage('markets')}>{t.viewAll} <span>↗</span></button></div>
            <div className="filter-row">{[['all',t.all],['metals',t.metals],['energy',t.energy],['indices',t.indices]].map(([id,label]) => <button key={id} onClick={() => setFilter(id)} className={`filter-chip ${filter === id ? 'active' : ''}`}>{label}</button>)}</div>
            <div className="market-grid">{filteredMarkets.slice(0,6).map(item => <MarketCard key={item.symbol} item={item}/>)}</div>
            {filteredMarkets.length === 0 && <div className="empty-state">{t.noResults}</div>}
          </section>

          <section className="lower-grid">
            <div className="section-block companies-block"><div className="section-heading"><div><div className="section-kicker">02 / {rtl ? 'الشركات' : 'COMPANIES'}</div><h2>{t.movers}</h2></div><button className="text-link" onClick={() => setPage('companies')}>{t.viewAll} <span>↗</span></button></div>
              <div className="company-list">{companies.slice(0,3).map(c => <div className="company-row" key={c.ticker}><div className="company-logo">{c.initials}</div><div className="company-info"><b>{c.name}</b><small>{c.ticker} · {c.sector}</small></div><div className="company-quote"><b>{c.price}</b><small className={c.positive ? 'positive' : 'negative'}>{c.change}</small></div></div>)}</div>
            </div>
            <div className="section-block news-block"><div className="section-heading"><div><div className="section-kicker">03 / {rtl ? 'المستجدات' : 'INTELLIGENCE'}</div><h2>{t.news}</h2></div><Newspaper size={18} className="heading-icon"/></div>
              {news.slice(0,2).map((n,i) => <article className="news-item" key={n.tag}><div className="news-meta"><span>{n.tag}</span><small>{n.time}</small></div><h3>{rtl ? n.ar : n.title}</h3><div className="news-source">{n.source}</div></article>)}
            </div>
          </section>
        </>}

        {active === 'markets' && <section className="page-section"><div className="eyebrow"><span className="eyebrow-line"/> GLOBAL ASSET CLASSES</div><h1>{t.explore}<span className="gold-dot">.</span></h1><p className="page-intro">{t.subtitle}</p><div className="filter-row">{[['all',t.all],['metals',t.metals],['energy',t.energy],['indices',t.indices]].map(([id,label]) => <button key={id} onClick={() => setFilter(id)} className={`filter-chip ${filter === id ? 'active' : ''}`}>{label}</button>)}</div><div className="market-grid">{filteredMarkets.map(item => <MarketCard key={item.symbol} item={item}/>)}</div></section>}

        {active === 'companies' && <section className="page-section"><div className="eyebrow"><span className="eyebrow-line"/> GLOBAL CORPORATE PROFILES</div><h1>{t.allCompanies}<span className="gold-dot">.</span></h1><p className="page-intro">{rtl ? 'تابع مجموعة مختارة من الشركات العالمية.' : 'Follow a curated selection of major global companies.'}</p><div className="company-directory glass">{filteredCompanies.map(c => <div className="directory-row" key={c.ticker}><div className="company-logo">{c.initials}</div><div className="company-info"><b>{c.name}</b><small>{c.ticker} · {c.sector}</small></div><div className="company-quote"><b>{c.price}</b><small className={c.positive ? 'positive' : 'negative'}>{c.change}</small></div><span className="profile-link">{t.details} ↗</span></div>)}{filteredCompanies.length === 0 && <div className="empty-state">{t.noResults}</div>}</div></section>}

        {active === 'insights' && <section className="page-section"><div className="eyebrow"><span className="eyebrow-line"/> MARKET INTELLIGENCE</div><h1>{t.news}<span className="gold-dot">.</span></h1><p className="page-intro">{rtl ? 'موجز تجريبي لمتابعة أبرز تطورات الأسواق.' : 'A sample briefing of notable market developments.'}</p><div className="full-news-list">{news.map(n => <article className="full-news-card glass" key={n.tag}><div className="news-meta"><span>{n.tag}</span><small>{n.time}</small></div><h2>{rtl ? n.ar : n.title}</h2><p>{n.source} · {t.demo}</p><button className="text-link">{t.read} ↗</button></article>)}</div></section>}

        <footer className="footer"><div className="footer-brand">VOLKA<span>.</span></div><div>{t.disclaimer}</div><div>© 2026 VOLKA</div></footer>
      </div>
    </main>
  </div>
}