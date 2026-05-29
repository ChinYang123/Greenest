import type { Lang } from '../i18n/ui';

export interface TeamMember {
  initials: string;
  name: Record<Lang, string>;
  role: Record<Lang, string>;
  bio: Record<Lang, string>;
}

export const team: TeamMember[] = [
  {
    initials: 'AL',
    name: { en: 'Aisha Lim', zh: '林爱莎' },
    role: { en: 'CEO', zh: '首席执行官' },
    bio: {
      en: 'Sets strategy, raises investment, and leads overseas expansion and partnerships.',
      zh: '制定战略、引入投资，并主导海外拓展与合作。',
    },
  },
  {
    initials: 'RT',
    name: { en: 'Rajesh Tan', zh: '陈拉杰' },
    role: { en: 'COO', zh: '首席运营官' },
    bio: {
      en: 'Runs daily operations, production, garden installation, and the supply chain.',
      zh: '负责日常运营、生产、花园安装与供应链。',
    },
  },
  {
    initials: 'MW',
    name: { en: 'Mei Wong', zh: '黄美' },
    role: { en: 'CFO', zh: '首席财务官' },
    bio: {
      en: 'Manages budgets, profitability, and capital allocation.',
      zh: '管理预算、盈利与资金分配。',
    },
  },
  {
    initials: 'DK',
    name: { en: 'David Kumar', zh: '库马大卫' },
    role: { en: 'Sales Director', zh: '销售总监' },
    bio: {
      en: 'Leads market sales and B2B partnerships with developers.',
      zh: '主导市场销售与面向开发商的 B2B 合作。',
    },
  },
  {
    initials: 'SC',
    name: { en: 'Siti Chong', zh: '庄诗婷' },
    role: { en: 'Community Director', zh: '社区拓展总监' },
    bio: {
      en: 'Runs community talks, resident education, and brand events.',
      zh: '负责社区讲座、居民教育与品牌活动。',
    },
  },
];
