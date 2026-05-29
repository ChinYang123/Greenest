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
    role: { en: 'Co-founder & CEO', zh: '联合创始人兼首席执行官' },
    bio: {
      en: 'Aisha holds an MBA from Universiti Malaya and spent eight years in sustainable property development before co-founding GreenNest in 2021. She leads long-term strategy, investor relations, and regional expansion across Malaysia, Singapore, and Indonesia. Under her leadership, GreenNest grew from a two-person startup to a team of 35 within three years.',
      zh: '林爱莎拥有马来亚大学 MBA 学位，在联合创立 GreenNest 之前从事可持续地产开发八年。她主导公司长期战略、投资者关系，以及在马来西亚、新加坡和印度尼西亚的区域扩张。在她的带领下，GreenNest 在三年内从两人初创团队成长为拥有 35 名员工的企业。',
    },
  },
  {
    initials: 'RT',
    name: { en: 'Rajesh Tan', zh: '陈拉杰' },
    role: { en: 'Co-founder & COO', zh: '联合创始人兼首席运营官' },
    bio: {
      en: 'Rajesh is a certified horticulturist with a BSc in Plant Science from Universiti Putra Malaysia. He oversees daily operations, garden installation quality, and the end-to-end supply chain — from nursery sourcing to last-mile delivery. He personally led the design of GreenNest\'s tropical soil blend, now used in over 4,000 home installations.',
      zh: '陈拉杰是认证园艺师，拥有马来西亚博特拉大学植物科学学士学位。他负责日常运营、花园安装质量及端到端供应链管理——从苗圃采购到终端配送。他亲自主导研发了 GreenNest 热带土壤配方，目前已应用于逾 4,000 个家庭安装项目。',
    },
  },
  {
    initials: 'MW',
    name: { en: 'Mei Wong', zh: '黄美' },
    role: { en: 'CFO', zh: '首席财务官' },
    bio: {
      en: 'Mei is a ACCA-qualified accountant with 12 years of finance experience across agri-tech and e-commerce. She joined GreenNest in 2022 to build the financial infrastructure needed to scale, overseeing budgeting, unit economics, and the company\'s Series A fundraising round. She is passionate about impact-linked finance and sits on the board of a Klang Valley urban farming cooperative.',
      zh: '黄美是 ACCA 认证会计师，拥有 12 年农业科技和电商领域财务经验。她于 2022 年加入 GreenNest，负责搭建规模化所需的财务架构，涵盖预算管理、单位经济模型及 A 轮融资工作。她热衷于影响力金融，并担任巴生谷城市农业合作社的董事会成员。',
    },
  },
  {
    initials: 'DK',
    name: { en: 'David Kumar', zh: '库马大卫' },
    role: { en: 'Head of Sales & Partnerships', zh: '销售与合作总监' },
    bio: {
      en: 'David brings 10 years of B2B sales experience from Malaysia\'s property and facilities management sectors. He leads GreenNest\'s commercial pipeline — managing relationships with residential developers, hotel groups, and corporate facility managers. He has personally closed over RM 2.8 million in commercial rooftop contracts since joining in 2022.',
      zh: '大卫拥有 10 年马来西亚地产及设施管理行业的 B2B 销售经验。他负责 GreenNest 的商业业务管道，管理与住宅开发商、酒店集团和企业设施经理的合作关系。自 2022 年加入以来，他个人主导签约的商用屋顶合同总额已超过 RM 280 万。',
    },
  },
  {
    initials: 'SC',
    name: { en: 'Siti Chong', zh: '庄诗婷' },
    role: { en: 'Head of Community & Education', zh: '社区与教育总监' },
    bio: {
      en: 'Siti holds a degree in Environmental Studies and spent five years running sustainability programmes for an NGO before joining GreenNest. She designs and delivers GreenNest\'s community workshops, school outreach programmes, and the annual Urban Harvest Festival. Her community garden projects have transformed 18 previously unused spaces in Klang Valley housing estates.',
      zh: '庄诗婷拥有环境研究学位，在加入 GreenNest 之前在一家非政府组织负责可持续发展项目长达五年。她负责设计和推广 GreenNest 的社区工作坊、学校外展项目，以及一年一度的城市丰收节。她主导的社区花园项目已将巴生谷 18 个闲置空间改造为绿色公共花园。',
    },
  },
];
