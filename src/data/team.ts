import type { Lang } from '../i18n/ui';

export interface TeamMember {
  initials: string;
  name: Record<Lang, string>;
  role: Record<Lang, string>;
  bio: Record<Lang, string>;
}

export const team: TeamMember[] = [
  {
    initials: 'AC',
    name: { en: 'Aisha Chia', zh: '谢爱莎' },
    role: { en: 'Business Strategy Lead', zh: '商业策略负责人' },
    bio: {
      en: 'Aisha represents the startup strategy role for this CityGarden prototype, focusing on market positioning, customer segments, and alignment with the Entrepreneurship.docx research findings.',
      zh: '谢爱莎代表此 CityGarden 原型中的创业策略角色，负责市场定位、顾客细分，以及与 Entrepreneurship.docx 调研结果保持一致。',
    },
  },
  {
    initials: 'RT',
    name: { en: 'Rajesh Tan', zh: '陈拉杰' },
    role: { en: 'Urban Gardening Operations Lead', zh: '城市园艺运营负责人' },
    bio: {
      en: 'Rajesh represents the horticulture operations role, translating limited-space gardening needs into practical kit, plant, and maintenance recommendations for urban residents.',
      zh: '陈拉杰代表园艺运营角色，将有限空间园艺需求转化为适合城市居民的实际套装、植物和养护建议。',
    },
  },
  {
    initials: 'MW',
    name: { en: 'Mei Wong', zh: '黄美' },
    role: { en: 'Finance & Pricing Lead', zh: '财务与定价负责人' },
    bio: {
      en: 'Mei represents the finance role, keeping CityGarden’s starter offers aligned with the survey’s RM50–RM100 willingness-to-pay range while separating premium upgrades and custom services.',
      zh: '黄美代表财务角色，确保 CityGarden 入门方案符合问卷中 RM50–RM100 的支付意愿，同时区分进阶升级和定制服务。',
    },
  },
  {
    initials: 'DK',
    name: { en: 'David Kumar', zh: '库马大卫' },
    role: { en: 'Partnerships & Services Lead', zh: '合作与服务负责人' },
    bio: {
      en: 'David represents the partnerships role for rooftop, balcony, residential-community, and commercial greening inquiries in the prototype service model.',
      zh: '大卫代表合作与服务角色，负责原型服务模型中的屋顶、阳台、住宅社区和商业绿化咨询。',
    },
  },
  {
    initials: 'SC',
    name: { en: 'Siti Chong', zh: '庄诗婷' },
    role: { en: 'Community & Education Lead', zh: '社区与教育负责人' },
    bio: {
      en: 'Siti represents the community and education role, coordinating beginner workshops, DIY guides, and shared-garden support to reduce knowledge and maintenance barriers.',
      zh: '庄诗婷代表社区与教育角色，协调新手工作坊、DIY 指南和共享花园支持，以降低知识和维护障碍。',
    },
  },
];
