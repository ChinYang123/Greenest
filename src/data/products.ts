import type { Lang } from '../i18n/ui';

export type SpaceType = 'balcony' | 'rooftop' | 'indoor';

export interface Product {
  id: string;
  slug: string;
  name: Record<Lang, string>;
  tagline: Record<Lang, string>;
  description: Record<Lang, string>;
  priceRM: number; // 0 = custom / contact for quote
  featured: boolean;
  fits: SpaceType[];
  features: Record<Lang, string[]>;
}

export const products: Product[] = [
  {
    id: 'starter',
    slug: 'starter-kit',
    name: { en: 'Starter Kit', zh: '入门套装' },
    tagline: {
      en: 'Everything you need to grow your first harvest in 30 days.',
      zh: '30 天内收获第一批蔬菜，所需一切尽在其中。',
    },
    description: {
      en: 'Designed for apartment dwellers and first-time growers, the Starter Kit comes with a 3-tier vertical wall planter, premium COCO peat soil blend, and a curated seed selection optimised for Malaysia\'s tropical climate. No prior gardening experience needed — just follow the illustrated quick-start guide and you\'ll be harvesting in under a month.',
      zh: '专为公寓居民和园艺新手设计，入门套装包含三层垂直壁挂花盆、优质椰糠混合土壤，以及针对马来西亚热带气候精选的种子组合。无需任何园艺经验——只需按照图文快速入门手册操作，不到一个月即可收获第一批绿叶蔬菜。',
    },
    priceRM: 299,
    featured: false,
    fits: ['balcony', 'indoor'],
    features: {
      en: [
        '3-tier vertical wall planter (60 × 40 cm footprint)',
        'Premium COCO peat + perlite soil blend (6 L)',
        'Drip-tray system — zero floor mess',
        'Curated tropical seed pack: lettuce, kangkung, coriander, chili',
        'Illustrated quick-start guide (EN / ZH)',
        '30-day harvest guarantee or free seed replacement',
      ],
      zh: [
        '三层垂直壁挂花盆（占地 60 × 40 厘米）',
        '优质椰糠+珍珠岩混合土壤（6 升）',
        '托盘接水系统——地板零污染',
        '热带精选种子包：生菜、空心菜、香菜、辣椒',
        '图文快速入门手册（中英双语）',
        '30 天收获保证，否则免费补寄种子',
      ],
    },
  },
  {
    id: 'smart',
    slug: 'smart-garden-kit',
    name: { en: 'Smart Garden Kit', zh: '智能花园套装' },
    tagline: {
      en: 'Sensor-driven care so your garden thrives, even on your busiest weeks.',
      zh: '传感器智能养护，即使再忙，花园依然茁壮。',
    },
    description: {
      en: 'Our best-selling kit takes the guesswork out of urban gardening. A 2 L self-watering reservoir and Bluetooth soil sensor pair with the GreenNest mobile app to deliver real-time moisture, light, and pH readings. The app sends care reminders calibrated to your specific plants — no overwatering, no forgotten waterings. Ideal for balconies up to 6 m² and open-plan indoor spaces.',
      zh: '我们最畅销的套装，彻底消除城市园艺中的盲目操作。2 升自动储水系统与蓝牙土壤传感器配合 GreenNest 手机 App，实时呈现土壤湿度、光照强度和 pH 值数据。App 会根据您种植的具体植物发出精准养护提醒——不再有过度浇水或忘记浇水的烦恼。适合不超过 6 平方米的阳台和开放式室内空间。',
    },
    priceRM: 599,
    featured: true,
    fits: ['balcony', 'rooftop', 'indoor'],
    features: {
      en: [
        '5-tier modular planter — expand up to 10 tiers',
        '2 L self-watering reservoir with float valve',
        'Bluetooth soil sensor: moisture, light & pH',
        'GreenNest app (iOS & Android) with push reminders',
        'Premium organic soil blend (12 L) + NPK slow-release fertiliser',
        'Tropical seed variety pack (12 varieties)',
        '90-day sensor warranty + 1-year structural warranty',
      ],
      zh: [
        '五层模块化花盆——可扩展至十层',
        '2 升自动储水系统，配浮球阀',
        '蓝牙土壤传感器：湿度、光照与 pH',
        'GreenNest App（iOS 和 Android），推送养护提醒',
        '优质有机混合土壤（12 升）+ NPK 缓释肥料',
        '热带种子多样包（12 个品种）',
        '传感器 90 天保修 + 结构件 1 年保修',
      ],
    },
  },
  {
    id: 'commercial',
    slug: 'commercial-rooftop',
    name: { en: 'Commercial Rooftop', zh: '商用屋顶方案' },
    tagline: {
      en: 'Turn your rooftop into a revenue-generating green asset.',
      zh: '将屋顶变成创收的绿色资产。',
    },
    description: {
      en: 'A fully managed, end-to-end rooftop garden solution for cafes, hotels, offices, and residential developers. Our certified horticulturists handle everything from structural load assessment and waterproofing review to custom planting design, professional installation, and an ongoing monthly maintenance plan. Past clients have reduced rooftop surface temperatures by up to 8 °C and generated F&B savings of RM 1,200–3,500 per month from on-site produce.',
      zh: '面向咖啡馆、酒店、办公楼及住宅开发商的全托管屋顶花园整体方案。我们的认证园艺师负责全程服务：从结构承重评估、防水复查，到定制种植设计、专业安装，以及持续月度养护计划。过往客户的屋顶表面温度最高降低了 8 °C，每月来自自产食材的餐饮节省高达 RM 1,200–3,500。',
    },
    priceRM: 0,
    featured: false,
    fits: ['rooftop'],
    features: {
      en: [
        'Structural load & waterproofing assessment report',
        'Bespoke planting layout by certified horticulturist',
        'Professional installation by trained GreenNest crew',
        'Commercial-grade recycled-plastic raised beds',
        'Automated drip irrigation with timer & rain sensor',
        'Monthly maintenance visit + quarterly soil refresh',
        'Produce harvest log & cost-saving report',
      ],
      zh: [
        '结构承重与防水评估报告',
        '认证园艺师专属种植布局设计',
        'GreenNest 专业团队施工安装',
        '商用级再生塑料高架种植床',
        '带定时器与雨量传感器的自动滴灌系统',
        '每月上门养护 + 季度换土更新',
        '产出记录与成本节省报告',
      ],
    },
  },
];

export function priceLabel(p: Product, lang: Lang): string {
  if (p.priceRM === 0) return lang === 'zh' ? '定制报价' : 'Custom Quote';
  return `RM ${p.priceRM.toLocaleString()}`;
}
