// DEMO DATA ONLY — not live market quotes.
export const markets = [
  { symbol: 'XAU/USD', name: 'Gold Spot', ar: 'الذهب الفوري', price: '2,684.32', change: '+0.84%', positive: true, value: 'Precious metals', points: [18,22,19,28,24,35,31,42,38,52,48,62] },
  { symbol: 'XAG/USD', name: 'Silver Spot', ar: 'الفضة الفورية', price: '31.42', change: '+1.26%', positive: true, value: 'Precious metals', points: [16,19,17,24,21,31,28,38,34,45,42,57] },
  { symbol: 'BRENT', name: 'Brent Crude', ar: 'خام برنت', price: '74.86', change: '-0.32%', positive: false, value: 'Energy', points: [50,46,48,39,43,34,38,30,34,26,29,23] },
  { symbol: 'WTI', name: 'WTI Crude', ar: 'خام غرب تكساس', price: '70.18', change: '+0.41%', positive: true, value: 'Energy', points: [20,25,23,32,29,36,33,43,40,48,46,55] },
  { symbol: 'S&P 500', name: 'S&P 500 Index', ar: 'ستاندرد آند بورز 500', price: '5,982.72', change: '+0.56%', positive: true, value: 'Indices', points: [15,20,18,26,23,33,30,40,37,48,45,59] },
  { symbol: 'NASDAQ', name: 'Nasdaq Composite', ar: 'ناسداك المركب', price: '19,214.65', change: '-0.18%', positive: false, value: 'Indices', points: [55,51,53,45,48,39,43,35,37,30,32,27] },
]
export const companies = [
  { ticker: 'AAPL', name: 'Apple Inc.', sector: 'Technology', price: '$232.14', change: '+1.12%', positive: true, initials: 'A' },
  { ticker: 'NVDA', name: 'NVIDIA Corporation', sector: 'Semiconductors', price: '$138.85', change: '+2.46%', positive: true, initials: 'N' },
  { ticker: 'MSFT', name: 'Microsoft Corporation', sector: 'Technology', price: '$415.32', change: '-0.24%', positive: false, initials: 'M' },
  { ticker: 'TSLA', name: 'Tesla, Inc.', sector: 'Automotive', price: '$338.21', change: '+0.73%', positive: true, initials: 'T' },
]
export const news = [
  { tag: 'COMMODITIES', time: '12 min ago', title: 'Gold steadies as investors assess the global rate outlook', ar: 'استقرار الذهب مع متابعة المستثمرين لتوقعات أسعار الفائدة العالمية', source: 'VOLKA Markets Desk' },
  { tag: 'EQUITIES', time: '38 min ago', title: 'Global equities trade mixed ahead of key economic data', ar: 'تباين أداء الأسهم العالمية قبل صدور بيانات اقتصادية مهمة', source: 'Market Brief' },
  { tag: 'ENERGY', time: '1 hr ago', title: 'Oil markets weigh supply outlook and demand signals', ar: 'أسواق النفط تقيّم توقعات المعروض ومؤشرات الطلب', source: 'Energy Monitor' },
]