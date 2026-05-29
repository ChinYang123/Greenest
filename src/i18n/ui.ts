// UI string dictionaries for GreenNest (en default, zh second).
// Page body copy and shared labels resolve through these via useTranslations().

export const languages = {
  en: 'English',
  zh: '中文',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // brand
    'brand.name': 'GreenNest',
    'brand.parent': 'A CityGarden company',
    'brand.tagline': 'Sustainable Urban Gardening',

    // nav
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.vertical': 'Vertical Garden',
    'nav.roof': 'Roof Gardens',
    'nav.community': 'Community',
    'nav.design': 'Garden Designer',
    'nav.gallery': 'Gallery',
    'nav.blog': 'Blog',
    'nav.consultation': 'Book Consultation',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',

    // common buttons
    'btn.explore': 'Explore Packages',
    'btn.tryDesigner': 'Try the Garden Designer',
    'btn.buy': 'Add to Cart',
    'btn.viewDetails': 'View Details',
    'btn.customize': 'Customize',
    'btn.contact': 'Contact Us',
    'btn.submit': 'Submit',
    'btn.book': 'Book Now',
    'btn.register': 'Register',
    'btn.send': 'Send Message',
    'btn.readMore': 'Read More',
    'btn.startOver': 'Start Over',
    'btn.generate': 'Generate My Garden',

    // generic
    'common.price': 'Price',
    'common.from': 'from',
    'common.learnMore': 'Learn more',
    'common.allRights': 'All rights reserved.',
    'common.toastSuccess': 'Thank you! Your request has been received.',
    'common.toastCart': 'Added to cart (demo) — checkout opens in Phase 3.',
    'common.required': 'This field is required.',
    'common.optional': 'optional',

    // home
    'home.badge': '🌿 Sustainable Living',
    'home.heroTitle': 'Build Your Urban Garden with',
    'home.heroTitleAccent': 'AI',
    'home.heroDesc': 'Transform balconies, rooftops, and community spaces into sustainable green environments with smart, AI-powered recommendations.',
    'home.stat1Value': '10k+',
    'home.stat1Label': 'Happy Gardeners',
    'home.stat2Value': '50+',
    'home.stat2Label': 'Plant Varieties',
    'home.problemTitle': 'Living in the city with limited space?',
    'home.problemSubtitle': 'We understand the challenges of urban gardening and have the perfect solutions.',
    'home.problem1Title': 'Small apartment gardening',
    'home.problem1Desc': 'Maximize tiny spaces with smart vertical designs and compact growing systems.',
    'home.problem2Title': 'No experience needed',
    'home.problem2Desc': 'Our AI guides you step-by-step, taking the guesswork out of plant care.',
    'home.problem3Title': 'Easy maintenance support',
    'home.problem3Desc': 'Automated reminders and smart sensors keep your plants thriving effortlessly.',
    'home.recoTitle': 'AI Recommendation System',
    'home.recoSubtitle': 'Let our intelligent system design the perfect garden for your unique space.',
    'home.productsTitle': 'Our Solutions',
    'home.benefitsTitle': 'Why Choose GreenNest',
    'home.benefit1Title': 'Eco Friendly',
    'home.benefit1Desc': 'Sustainable materials and organic resources for a greener planet.',
    'home.benefit2Title': 'AI Recommendation',
    'home.benefit2Desc': 'Data-driven suggestions tailored specifically to your environment.',
    'home.benefit3Title': 'Custom Design',
    'home.benefit3Desc': 'Flexible setups that fit your aesthetic and space constraints.',
    'home.benefit4Title': 'Community Support',
    'home.benefit4Desc': 'Join a network of urban gardeners sharing tips, seeds, and harvests.',
    'home.testimonialsTitle': 'What Our Community Says',
    'home.ctaTitle': 'Start Your Green Journey Today',
    'home.ctaDesc': 'Join thousands of urban dwellers bringing nature back to the city.',

    // products
    'products.title': 'Our Solutions',
    'products.subtitle': 'Choose the kit that fits your space, goals, and budget.',
    'products.popular': 'Most Popular',
    'products.includes': 'What\'s included',

    // vertical garden
    'vertical.title': 'Vertical Garden Kits',
    'vertical.subtitle': 'Multi-tier planters, self-watering, and organic soil — grow vegetables and flowers on any balcony.',
    'vertical.f1Title': 'Multi-tier planters',
    'vertical.f1Desc': 'Stack growing space upward to make the most of small balconies and apartments.',
    'vertical.f2Title': 'Self-watering system',
    'vertical.f2Desc': 'Built-in reservoirs keep plants hydrated for days — perfect for busy urbanites.',
    'vertical.f3Title': 'Organic soil mix',
    'vertical.f3Desc': 'Nutrient-rich, sustainable soil that gives seedlings a healthy head start.',

    // roof garden
    'roof.title': 'Roof Garden Service',
    'roof.subtitle': 'We design and build rooftop greenery for homes and commercial buildings.',
    'roof.step1': 'Site assessment',
    'roof.step1Desc': 'We evaluate load, sunlight, drainage, and access on your rooftop.',
    'roof.step2': 'Custom design',
    'roof.step2Desc': 'A tailored layout with eco materials matched to your goals and budget.',
    'roof.step3': 'Build & handover',
    'roof.step3Desc': 'Professional installation, planting, and a maintenance plan.',
    'roof.formTitle': 'Request a rooftop design inquiry',

    // community
    'community.title': 'Community Garden Program',
    'community.subtitle': 'We help neighborhoods plan and care for shared green spaces that bring people together.',
    'community.formTitle': 'Register your community',

    // gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'A look at the balconies, rooftops, and community gardens we have helped grow.',

    // blog
    'blog.title': 'Blog & DIY Guides',
    'blog.subtitle': 'Tips, stories, and step-by-step guides for sustainable urban gardening.',
    'blog.all': 'All',
    'blog.blog': 'Blog',
    'blog.diy': 'DIY Guide',
    'blog.back': 'Back to Blog',

    // consultation
    'consult.title': 'Book a Consultation',
    'consult.subtitle': 'Talk to a GreenNest specialist about your space — free, no obligation.',
    'consult.formTitle': 'Schedule your session',

    // contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Questions, partnerships, or press — we\'d love to hear from you.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.addressValue': 'Multimedia University, Persiaran Multimedia, 63100 Cyberjaya, Selangor, Malaysia',

    // about
    'about.title': 'About CityGarden',
    'about.subtitle': 'GreenNest is the consumer platform of CityGarden Sdn Bhd — a Cyberjaya-based urban horticulture company helping Malaysian city dwellers grow food, reduce costs, and reconnect with nature.',
    'about.missionTitle': 'Our Mission',
    'about.mission': 'To make urban gardening accessible to every Malaysian household — regardless of space, experience, or budget — through smart tools, quality kits, and hands-on community support.',
    'about.visionTitle': 'Our Vision',
    'about.vision': 'To have 100,000 active urban gardens across Malaysia by 2030, making GreenNest the most trusted name in city horticulture from KL to Jakarta.',
    'about.teamTitle': 'Leadership Team',

    // form fields
    'form.name': 'Full name',
    'form.email': 'Email address',
    'form.phone': 'Phone number',
    'form.spaceType': 'Space type',
    'form.message': 'Message',
    'form.date': 'Preferred date',
    'form.community': 'Community / building name',
    'form.units': 'Approx. number of units',

    // configurator
    'cfg.title': 'Design Your Garden',
    'cfg.subtitle': 'Answer a few questions and we\'ll design a garden — kit, plants, and layout — for your space.',
    'cfg.spaceType': 'Where is your garden?',
    'cfg.space.balcony': 'Balcony',
    'cfg.space.rooftop': 'Rooftop',
    'cfg.space.indoor': 'Indoor',
    'cfg.size': 'How much space?',
    'cfg.size.small': 'Small (~2×3m)',
    'cfg.size.medium': 'Medium (~3×5m)',
    'cfg.size.large': 'Large (5m+)',
    'cfg.sunlight': 'How much sunlight?',
    'cfg.sun.full': 'Full sun',
    'cfg.sun.partial': 'Partial shade',
    'cfg.sun.low': 'Low light',
    'cfg.goal': 'What do you want to grow?',
    'cfg.goal.vegetables': 'Vegetables',
    'cfg.goal.flowers': 'Flowers',
    'cfg.goal.decorative': 'Decorative',
    'cfg.goal.mixed': 'A mix',
    'cfg.budget': 'Budget',
    'cfg.analyzing': 'Designing your garden...',
    'cfg.resultTitle': 'Your Personalized Garden',
    'cfg.match': 'Match',
    'cfg.recommendedKit': 'Recommended Kit',
    'cfg.recommendedPlants': 'Recommended Plants',
    'cfg.layout': 'Suggested Layout',
    'cfg.estTotal': 'Estimated Total',
    'cfg.kitNote': 'Closest kit within your budget.',
    'cfg.noPlants': 'No perfect matches — try broadening your sunlight or goal and generate again.',
    'cfg.bookCta': 'Book a consultation',
    'cfg.inspiration': 'How your garden could look',
    'cfg.inspirationNote': 'Real reference photos matched to your selection.',
  },
  zh: {
    // brand
    'brand.name': 'GreenNest',
    'brand.parent': 'CityGarden 旗下品牌',
    'brand.tagline': '可持续城市园艺',

    // nav
    'nav.home': '首页',
    'nav.products': '产品',
    'nav.vertical': '垂直园艺',
    'nav.roof': '屋顶花园',
    'nav.community': '社区花园',
    'nav.design': '花园设计器',
    'nav.gallery': '作品图库',
    'nav.blog': '博客',
    'nav.consultation': '预约咨询',
    'nav.about': '关于我们',
    'nav.contact': '联系我们',
    'nav.menu': '菜单',
    'nav.close': '关闭',

    // common buttons
    'btn.explore': '浏览套装',
    'btn.tryDesigner': '试试花园设计器',
    'btn.buy': '加入购物车',
    'btn.viewDetails': '查看详情',
    'btn.customize': '定制',
    'btn.contact': '联系我们',
    'btn.submit': '提交',
    'btn.book': '立即预约',
    'btn.register': '报名',
    'btn.send': '发送信息',
    'btn.readMore': '阅读全文',
    'btn.startOver': '重新开始',
    'btn.generate': '生成我的花园',

    // generic
    'common.price': '价格',
    'common.from': '起',
    'common.learnMore': '了解更多',
    'common.allRights': '版权所有。',
    'common.toastSuccess': '谢谢！我们已收到你的请求。',
    'common.toastCart': '已加入购物车（演示）—— 结算功能将在第三阶段开放。',
    'common.required': '此项为必填。',
    'common.optional': '选填',

    // home
    'home.badge': '🌿 可持续生活',
    'home.heroTitle': '用',
    'home.heroTitleAccent': 'AI',
    'home.heroDesc': '通过智能 AI 推荐，把阳台、屋顶和社区空间打造成可持续的绿色环境。',
    'home.stat1Value': '10k+',
    'home.stat1Label': '满意的园艺者',
    'home.stat2Value': '50+',
    'home.stat2Label': '植物品种',
    'home.problemTitle': '住在城市，空间有限？',
    'home.problemSubtitle': '我们了解城市园艺的难处，并准备好了完美的解决方案。',
    'home.problem1Title': '小户型园艺',
    'home.problem1Desc': '用智能垂直设计和紧凑种植系统，把小空间利用到极致。',
    'home.problem2Title': '零经验也能上手',
    'home.problem2Desc': '我们的 AI 一步步指导你，让植物养护不再靠猜。',
    'home.problem3Title': '轻松维护',
    'home.problem3Desc': '自动提醒与智能传感器，让你的植物毫不费力地茁壮成长。',
    'home.recoTitle': 'AI 推荐系统',
    'home.recoSubtitle': '让我们的智能系统为你的专属空间设计完美花园。',
    'home.productsTitle': '我们的方案',
    'home.benefitsTitle': '为什么选择 GreenNest',
    'home.benefit1Title': '环保',
    'home.benefit1Desc': '可持续材料与有机资源，守护更绿色的地球。',
    'home.benefit2Title': 'AI 推荐',
    'home.benefit2Desc': '基于数据、为你的环境量身定制的建议。',
    'home.benefit3Title': '定制设计',
    'home.benefit3Desc': '灵活方案，契合你的审美与空间限制。',
    'home.benefit4Title': '社区支持',
    'home.benefit4Desc': '加入城市园艺者网络，分享技巧、种子与收成。',
    'home.testimonialsTitle': '社区怎么说',
    'home.ctaTitle': '今天就开启你的绿色之旅',
    'home.ctaDesc': '加入数千位把自然带回城市的都市居民。',

    // products
    'products.title': '我们的方案',
    'products.subtitle': '挑选契合你空间、目标和预算的套装。',
    'products.popular': '最受欢迎',
    'products.includes': '套装包含',

    // vertical garden
    'vertical.title': '垂直园艺套装',
    'vertical.subtitle': '多层花盆、自动浇水、有机土 —— 在任何阳台都能种菜种花。',
    'vertical.f1Title': '多层花盆',
    'vertical.f1Desc': '向上堆叠种植空间，把小阳台和公寓利用到极致。',
    'vertical.f2Title': '自动浇水系统',
    'vertical.f2Desc': '内置储水箱让植物数天保持湿润，最适合忙碌的都市人。',
    'vertical.f3Title': '有机土配方',
    'vertical.f3Desc': '富含养分的可持续土壤，让幼苗健康起步。',

    // roof garden
    'roof.title': '屋顶花园服务',
    'roof.subtitle': '我们为住宅与商业楼宇设计并打造屋顶绿化。',
    'roof.step1': '现场评估',
    'roof.step1Desc': '我们评估屋顶的承重、日照、排水与通道。',
    'roof.step2': '定制设计',
    'roof.step2Desc': '用环保材料，按你的目标和预算量身定制布局。',
    'roof.step3': '施工与交付',
    'roof.step3Desc': '专业安装、种植，并附带养护方案。',
    'roof.formTitle': '提交屋顶设计咨询',

    // community
    'community.title': '社区花园项目',
    'community.subtitle': '我们帮助小区规划并打理公共绿地，促进邻里互动。',
    'community.formTitle': '为你的社区报名',

    // gallery
    'gallery.title': '作品图库',
    'gallery.subtitle': '一览我们帮助打造的阳台、屋顶与社区花园。',

    // blog
    'blog.title': '博客与种植指南',
    'blog.subtitle': '可持续城市园艺的技巧、故事与分步指南。',
    'blog.all': '全部',
    'blog.blog': '博客',
    'blog.diy': '种植指南',
    'blog.back': '返回博客',

    // consultation
    'consult.title': '预约咨询',
    'consult.subtitle': '与 GreenNest 顾问聊聊你的空间 —— 免费、无义务。',
    'consult.formTitle': '安排你的咨询',

    // contact
    'contact.title': '联系我们',
    'contact.subtitle': '咨询、合作或媒体 —— 我们很乐意听到你的声音。',
    'contact.email': '邮箱',
    'contact.phone': '电话',
    'contact.address': '地址',
    'contact.addressValue': '马来西亚雪兰莪 63100 赛城多媒体大学',

    // about
    'about.title': '关于 CityGarden',
    'about.subtitle': 'GreenNest 是 CityGarden 有限公司旗下的消费者平台——一家总部位于赛城的城市园艺企业，致力于帮助马来西亚城市居民种植食物、降低生活成本，并重新与自然建立连结。',
    'about.missionTitle': '我们的使命',
    'about.mission': '无论空间大小、经验多少、预算高低，通过智能工具、优质套装与社区支持，让每一个马来西亚家庭都能轻松开始城市园艺之旅。',
    'about.visionTitle': '我们的愿景',
    'about.vision': '到 2030 年在马来西亚建立 10 万个活跃城市花园，成为从吉隆坡到雅加达最受信赖的城市园艺品牌。',
    'about.teamTitle': '管理团队',

    // form fields
    'form.name': '姓名',
    'form.email': '电子邮箱',
    'form.phone': '电话号码',
    'form.spaceType': '空间类型',
    'form.message': '留言',
    'form.date': '期望日期',
    'form.community': '社区 / 楼宇名称',
    'form.units': '大约单位数量',

    // configurator
    'cfg.title': '设计你的花园',
    'cfg.subtitle': '回答几个问题，我们就为你的空间设计一座花园 —— 套装、植物与布局。',
    'cfg.spaceType': '你的花园在哪里？',
    'cfg.space.balcony': '阳台',
    'cfg.space.rooftop': '屋顶',
    'cfg.space.indoor': '室内',
    'cfg.size': '空间多大？',
    'cfg.size.small': '小（约 2×3 米）',
    'cfg.size.medium': '中（约 3×5 米）',
    'cfg.size.large': '大（5 米以上）',
    'cfg.sunlight': '日照如何？',
    'cfg.sun.full': '全日照',
    'cfg.sun.partial': '半阴',
    'cfg.sun.low': '弱光',
    'cfg.goal': '你想种什么？',
    'cfg.goal.vegetables': '蔬菜',
    'cfg.goal.flowers': '花卉',
    'cfg.goal.decorative': '观赏植物',
    'cfg.goal.mixed': '混合',
    'cfg.budget': '预算',
    'cfg.analyzing': '正在设计你的花园…',
    'cfg.resultTitle': '你的专属花园',
    'cfg.match': '匹配度',
    'cfg.recommendedKit': '推荐套装',
    'cfg.recommendedPlants': '推荐植物',
    'cfg.layout': '建议布局',
    'cfg.estTotal': '预估总价',
    'cfg.kitNote': '预算内最接近的套装。',
    'cfg.noPlants': '没有完美匹配 —— 试着放宽日照或目标后再生成一次。',
    'cfg.bookCta': '预约咨询',
    'cfg.inspiration': '你的花园大概长这样',
    'cfg.inspirationNote': '根据你的选择匹配的真实参考照片。',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
