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
    id: 'eco-seed',
    slug: 'eco-seed-kit',
    name: { en: 'Urban Starter Kit', zh: '城市入门套装' },
    tagline: {
      en: 'The RM50–RM100 starter offer recommended by CityGarden’s market research.',
      zh: '符合 CityGarden 市场调研 RM50–RM100 偏好的入门方案。',
    },
    description: {
      en: 'Designed for students and young apartment residents who want an affordable, low-mess way to start. Includes a compact stackable planter, biodegradable starter pots, coco-peat soil disks, fast-sprouting seeds, and a digital beginner guide.',
      zh: '专为学生和年轻公寓居民设计，以低门槛、低脏乱方式开始种植。包含紧凑叠放花盆、可降解育苗盆、椰糠土饼、快速发芽种子和数字新手指南。',
    },
    priceRM: 79,
    featured: true,
    fits: ['balcony', 'indoor'],
    features: {
      en: [
        'Compact stackable planter for balcony or desk spaces',
        '6 biodegradable seed starter pots + drip tray',
        'Compressed organic coco-peat soil disks',
        'Eco-friendly wooden plant markers',
        'Fast-sprouting seed packs: spinach, mint, and pak choi',
        'Digital quick-start guide & care instruction sheets',
      ],
      zh: [
        '适合阳台或桌面的紧凑叠放花盆',
        '6 个可降解育苗花盆 + 接水托盘',
        '压缩有机椰糠土饼',
        '环保木质植物标签',
        '快速发芽种子包：菠菜、薄荷和小白菜',
        '数字化快速入门与养护指南',
      ],
    },
  },
  {
    id: 'starter',
    slug: 'starter-kit',
    name: { en: 'Vertical Starter Kit', zh: '垂直入门套装' },
    tagline: {
      en: 'A compact balcony kit for customers who want space-saving structure from day one.',
      zh: '面向想从第一天就节省空间的用户，适合阳台的紧凑套装。',
    },
    description: {
      en: 'Designed for apartment dwellers and first-time growers, this kit includes a 3-tier vertical wall planter, coco-peat blend, drip tray, and a curated tropical seed selection. It directly addresses limited space, mess concerns, and beginner uncertainty from the survey findings.',
      zh: '专为公寓居民和园艺新手设计，包含三层垂直壁挂花盆、椰糠混合土、接水托盘和热带种子组合，直接回应问卷中的空间不足、脏乱担忧和新手不确定性。',
    },
    priceRM: 99,
    featured: false,
    fits: ['balcony', 'indoor'],
    features: {
      en: [
        '3-tier vertical wall planter (60 × 40 cm footprint)',
        'COCO peat + perlite soil blend (6 L)',
        'Drip-tray system — zero floor mess',
        'Curated tropical seed pack: lettuce, kangkung, coriander, chili',
        'Illustrated quick-start guide (EN / ZH)',
        'Care calendar for low-maintenance weekly routines',
      ],
      zh: [
        '三层垂直壁挂花盆（占地 60 × 40 厘米）',
        '椰糠+珍珠岩混合土壤（6 升）',
        '托盘接水系统——地板零污染',
        '热带精选种子包：生菜、空心菜、香菜、辣椒',
        '图文快速入门手册（中英双语）',
        '低维护每周养护日历',
      ],
    },
  },
  {
    id: 'smart',
    slug: 'smart-garden-kit',
    name: { en: 'Self-Watering Upgrade Kit', zh: '自动浇水升级套装' },
    tagline: {
      en: 'A premium option for busy residents who need watering support without complex setup.',
      zh: '面向忙碌居民的进阶选择，提供自动浇水支持且设置简单。',
    },
    description: {
      en: 'This optional upgrade addresses the 82% survey finding that automatic watering increases willingness to maintain a garden. It combines modular vertical planting with a 2 L self-watering reservoir, simple moisture indicator, and web-based care checklist.',
      zh: '此进阶套装回应 82% 受访者认为自动浇水会提高维护意愿的调研结果。它结合模块化垂直种植、2 升自动储水系统、简单湿度指示和网页养护清单。',
    },
    priceRM: 199,
    featured: false,
    fits: ['balcony', 'rooftop', 'indoor'],
    features: {
      en: [
        '5-tier modular planter — expand when space allows',
        '2 L self-watering reservoir with float valve',
        'Simple moisture indicator for beginner-friendly checking',
        'CityGarden web care checklist and reminder template',
        'Organic soil blend (12 L) + slow-release fertiliser',
        'Tropical seed variety pack (8 varieties)',
        'Optional consultation add-on for setup support',
      ],
      zh: [
        '五层模块化花盆——空间允许时可继续扩展',
        '2 升自动储水系统，配浮球阀',
        '简单湿度指示器，方便新手检查',
        'CityGarden 网页养护清单与提醒模板',
        '有机混合土壤（12 升）+ 缓释肥料',
        '热带种子多样包（8 个品种）',
        '可选安装咨询支持',
      ],
    },
  },
  {
    id: 'commercial',
    slug: 'commercial-rooftop',
    name: { en: 'Commercial Rooftop', zh: '商用屋顶方案' },
    tagline: {
      en: 'Custom rooftop and balcony greening for buildings, cafés, and shared spaces.',
      zh: '面向楼宇、咖啡馆和共享空间的定制屋顶与阳台绿化。',
    },
    description: {
      en: 'A consultation-led service concept for cafes, offices, apartments, and residential communities. The package covers site assessment, planting layout, professional installation planning, and a maintenance proposal, matching the report’s 74% interest in rooftop and balcony greening services.',
      zh: '面向咖啡馆、办公室、公寓和住宅社区的咨询型服务概念，涵盖现场评估、种植布局、专业安装规划和维护建议，回应报告中 74% 受访者对屋顶与阳台绿化服务的兴趣。',
    },
    priceRM: 0,
    featured: false,
    fits: ['rooftop'],
    features: {
      en: [
        'Structural load & waterproofing assessment report',
        'Bespoke planting layout by certified horticulturist',
        'Professional installation plan by CityGarden crew',
        'Commercial-grade recycled-plastic raised beds',
        'Automated drip irrigation with timer & rain sensor',
        'Monthly maintenance visit + quarterly soil refresh',
        'Produce harvest log & cost-saving report',
      ],
      zh: [
        '结构承重与防水评估报告',
        '认证园艺师专属种植布局设计',
        'CityGarden 团队专业安装规划',
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
