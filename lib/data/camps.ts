// 8大营地类型 + 营期产品 Mock
// 基于《2025年汝攀夏令营产品体系(内部保密资料)》《汝攀夏令营招商手册》《新汝空间研学产品手册》《汝攀国防教育驻校宣传手册》提炼

export type CampCategory = {
  id: string;
  name: string;
  enName: string;
  desc: string;
  cover: string; // /images/...
  color: string;  // tailwind
  accent: string; // 副色
  tags: string[];
};

export type CampProgram = {
  id: string;
  categoryId: string;
  title: string;
  subTitle: string;
  ageRange: string;     // 6-9 / 9-12 / 12-16
  days: number;
  price: number;        // 人民币元
  originalPrice?: number;
  city: string;         // 营地所在省市
  base: string;         // 营地名称
  cover: string;
  gallery: string[];
  highlights: string[];
  schedule: { day: number; title: string; items: string[] }[];
  inclusions: string[];
  notes: string[];
  hot?: boolean;
  new?: boolean;
};

export const CATEGORIES: CampCategory[] = [
  {
    id: "theme",
    name: "主题营",
    enName: "THEME CAMP",
    desc: "围绕单一主题深耕：军事、国学、演讲口才、红色之旅… 快速强化专项能力。",
    cover: "/images/scenes/嘉禾1958新汝空间研学基地课程_p1_418e0821f6.jpeg",
    color: "military",
    accent: "sand",
    tags: ["军事", "国学", "红色", "演讲口才", "小记者"]
  },
  {
    id: "military-tech",
    name: "军事科技",
    enName: "MILITARY & TECH",
    desc: "国防+科技双引擎：95式步枪模拟射击、无人机、机器人、航模、创客编程。",
    cover: "/images/scenes/汝攀国防教育驻校宣传手册_p8_bc3c902bce.jpeg",
    color: "military",
    accent: "steel",
    tags: ["无人机", "机器人", "航模", "创客编程", "国防"]
  },
  {
    id: "sports",
    name: "体育户外",
    enName: "SPORTS & OUTDOOR",
    desc: "球类、户外、竞技、水上项目，强健体魄，练就坚毅品格。",
    cover: "/images/scenes/汝攀国防教育驻校宣传手册_p15_64291cf310.jpeg",
    color: "military",
    accent: "sand",
    tags: ["球类", "竞技", "水上", "徒步", "攀岩"]
  },
  {
    id: "arts",
    name: "文化艺术",
    enName: "ARTS & CULTURE",
    desc: "琴棋书画、戏曲影视、音乐舞蹈、动漫游戏 — 沉浸式美育与文化传承。",
    cover: "/images/scenes/新汝空间研学产品手册_p8_433e2cec7d.jpeg",
    color: "sand",
    accent: "military",
    tags: ["琴棋书画", "音乐舞蹈", "戏曲影视", "动漫游戏"]
  },
  {
    id: "food",
    name: "美食体验",
    enName: "FOOD & CRAFT",
    desc: "砂型铸造、面点制作、嘉禾伴嫁歌非遗… 在烟火气里体悟匠心。",
    cover: "/images/scenes/新汝空间研学产品手册_p9_4033132a9c.jpeg",
    color: "sand",
    accent: "military",
    tags: ["面点", "非遗", "铸造", "厨艺"]
  },
  {
    id: "research",
    name: "研学旅行",
    enName: "RESEARCH TRIP",
    desc: "知识科普、自然户外、体验考察、文化康乐、励志拓展、非遗文化。",
    cover: "/images/scenes/汝攀1天沙洲基地课程_p1_26dba2f8b9.jpeg",
    color: "military",
    accent: "sand",
    tags: ["自然科考", "红色研学", "非遗", "名校"]
  },
  {
    id: "intl",
    name: "国际营",
    enName: "INTERNATIONAL",
    desc: "足迹遍及欧/美/非/亚/大洋/南北极，培养中国少年全球胜任力。",
    cover: "/images/scenes/汝攀夏令营招商手册_p2_774c7f240c.jpeg",
    color: "military",
    accent: "sand",
    tags: ["欧洲", "美洲", "非洲", "亚洲", "大洋洲"]
  },
  {
    id: "holiday",
    name: "假日营",
    enName: "HOLIDAY CAMP",
    desc: "周末营、亲子营、假日营 — 短时高频，让家长和孩子随时可加入。",
    cover: "/images/scenes/新汝空间研学产品手册_p8_aff52bf9d2.jpeg",
    color: "sand",
    accent: "military",
    tags: ["周末营", "亲子营", "假日营"]
  }
];

// 营地产品（精选26款，覆盖8大类型+完整营期体系）
// 基于《2025年汝攀夏令营产品体系》《汝攀品牌全能领导力夏令营》完整产品线
// 7天体验营 → 14天强化营 → 21天磨炼营 → 28天蜕变营 四大阶梯
export const PROGRAMS: CampProgram[] = [
  // ========================
  // 核心产品线：全能领导力夏令营（四大阶梯）
  // ========================
  {
    id: "core-7",
    categoryId: "theme",
    title: "全能领导力 · 7 天体验营",
    subTitle: "「领导力初体验，探索自我」独立第一步",
    ageRange: "6-16",
    days: 7,
    price: 3980,
    city: "湖南郴州",
    base: "沙洲总部基地",
    cover: "/images/scenes/汝攀国防教育驻校宣传手册_p8_bc3c902bce.jpeg",
    gallery: [
      "/images/scenes/汝攀国防教育驻校宣传手册_p8_bc3c902bce.jpeg",
      "/images/scenes/汝攀国防教育驻校宣传手册_p7_752caa3eee.jpeg",
      "/images/scenes/汝攀国防教育驻校宣传手册_p9_465658e72c.jpeg"
    ],
    highlights: [
      "7 天 24 节精品课：生活自理 + 礼仪认知 + 战术基础 + 95 式步枪模拟射击",
      "退役军人教官 1:7 配比，24h 随队医生，100 万/人意外险",
      "烧烤/篝火晚会/内务评比，寓教于乐",
      "市电视台连续 5 年独家报道品牌"
    ],
    schedule: [
      { day: 1, title: "入营 · 报到的力量", items: ["抵达营地 · 签到领物", "开营仪式 · 编制连队", "内务整理 4S 教学"] },
      { day: 2, title: "纪律 · 塑形", items: ["军姿队列训练", "体型认知训练", "班务会：写家书"] },
      { day: 3, title: "探索 · 自我认知", items: ["自我介绍的艺术", "认知礼仪", "急救/止血包扎课程"] },
      { day: 4, title: "国防 · 轻武器", items: ["95 式自动步枪模拟射击", "战车启航体验", "真人 CS 对抗"] },
      { day: 5, title: "挑战 · 突破", items: ["野外求生之帐篷搭建", "第一阶段军事格斗", "篝火晚会"] },
      { day: 6, title: "感恩 · 成长", items: ["感恩教育课", "一封家书", "将军令领导力课程"] },
      { day: 7, title: "结营 · 汇报演出", items: ["汇报演出彩排", "正式汇报 + 颁奖", "包饺子 + 返程"] }
    ],
    inclusions: ["营地住宿(标间/多人间)", "6 餐/日 营养餐", "教材教具 + 营服 2 套", "100 万/人意外险", "结营证书"],
    notes: ["营期全程封闭式管理", "家长群每日直播", "适合第一次参加夏令营的孩子"],
    hot: true
  },
  {
    id: "core-14",
    categoryId: "theme",
    title: "全能领导力 · 14 天强化营",
    subTitle: "「强化领导力，挑战极限」品格锻造黄金期",
    ageRange: "7-16",
    days: 14,
    price: 5980,
    originalPrice: 6980,
    city: "湖南郴州",
    base: "沙洲总部 + 嘉禾 1958",
    cover: "/images/scenes/汝攀国防教育驻校宣传手册_p4_8dcff0a786.jpeg",
    gallery: [
      "/images/scenes/汝攀国防教育驻校宣传手册_p4_8dcff0a786.jpeg",
      "/images/scenes/汝攀国防教育驻校宣传手册_p5_fa7429f878.jpeg",
      "/images/scenes/汝攀国防教育驻校宣传手册_p6_a377aee50a.jpeg",
      "/images/scenes/汝攀国防教育驻校宣传手册_p13_5e9f5ac4f7.jpeg"
    ],
    highlights: [
      "7 天体验营全部内容 + 7 天强化课程：野外求生(钻木取火/野外取水)",
      "重走长征路实景徒步 · 野炊埋锅造饭 · 星空露营",
      "魔王关心理突破 · 校园欺凌应对处置 · 消防/安全实战",
      "第二阶段军事格斗 · 定向寻宝 · 特种兵体验日"
    ],
    schedule: [
      { day: 1, title: "入营 · 报到", items: ["签到领物", "开营授旗", "内务 4S"] },
      { day: 2, title: "纪律 · 塑形", items: ["队列训练", "体型认知", "一封家书"] },
      { day: 3, title: "国防 · 体验", items: ["95 式步枪模拟射击", "战车启航", "真人 CS"] },
      { day: 4, title: "野外 · 求生", items: ["钻木取火", "野外取水", "帐篷搭建"] },
      { day: 5, title: "长征 · 徒步", items: ["重走长征路", "野炊埋锅造饭", "露营"] },
      { day: 6, title: "安全 · 防护", items: ["消防安全", "校园欺凌应对", "禁毒教育"] },
      { day: 7, title: "心态 · 磨炼", items: ["魔王关心理突破", "特种兵体验日", "篝火晚会"] },
      { day: 8, title: "格斗 · 进阶", items: ["第二阶段军事格斗", "快速反应射击", "拉歌互动"] },
      { day: 9, title: "寻宝 · 探索", items: ["定向寻宝", "杯子舞", "平安电话"] },
      { day: 10, title: "礼仪 · 修养", items: ["餐桌礼仪", "南水北调拓展", "作业辅导"] },
      { day: 11, title: "感恩 · 觉醒", items: ["感恩教育", "剧本杀校园霸凌角色扮演", "我的梦想演讲"] },
      { day: 12, title: "领导 · 组织", items: ["将军令", "盲人接力", "军歌嘹亮"] },
      { day: 13, title: "冲刺 · 彩排", items: ["结营考核彩排", "内务评比", "篝火晚会"] },
      { day: 14, title: "结营 · 荣誉", items: ["汇报演出", "颁发勋章", "包饺子 + 返程"] }
    ],
    inclusions: ["营地住宿", "6 餐/日 营养餐", "教材教具 + 营服 2 套", "100 万/人意外险", "结营证书"],
    notes: ["完整 14 天封闭式管理", "家长群每日直播照片视频", "适合有一定独立能力的孩子"],
    hot: true
  },
  {
    id: "core-21",
    categoryId: "theme",
    title: "全能领导力 · 21 天魔炼营",
    subTitle: "「磨炼意志，锻造领袖」21 天重塑行为习惯",
    ageRange: "8-16",
    days: 21,
    price: 7980,
    originalPrice: 8980,
    city: "湖南郴州",
    base: "沙洲总部 + 嘉禾 1958",
    cover: "/images/scenes/汝攀国防教育驻校宣传手册_p30_58705c7570.jpeg",
    gallery: [
      "/images/scenes/汝攀国防教育驻校宣传手册_p30_58705c7570.jpeg",
      "/images/scenes/汝攀国防教育驻校宣传手册_p22_49c761d3fa.jpeg",
      "/images/scenes/汝攀国防教育驻校宣传手册_p25_fc686168ce.jpeg"
    ],
    highlights: [
      "14 天强化营全部内容 + 7 天进阶课程",
      "实弹射击（真枪实弹）· 叫花鸡/竹筒饭/烤全羊野炊盛宴",
      "高台演讲 · 防身术 · 中华小神厨 · 非洲鼓/泡泡龙/龙武争霸",
      "领袖风采 · 共绘中国梦 · 军歌嘹亮 · 集体生日会",
      "家长寄语视频 · 拜访礼仪/会客礼仪实战"
    ],
    schedule: [
      { day: 1, title: "入营 · 报到", items: ["签到领物", "开营授旗", "熟悉环境"] },
      { day: 2, title: "入门 · 基础", items: ["队列训练", "自我介绍", "内务 4S"] },
      { day: 3, title: "国防 · 体验", items: ["95 式步枪模拟射击", "战车启航", "军歌嘹亮"] },
      { day: 4, title: "野外 · 生存", items: ["钻木取火", "野外取水", "帐篷搭建"] },
      { day: 5, title: "长征 · 徒步", items: ["重走长征路", "野炊埋锅造饭", "露营"] },
      { day: 6, title: "安全 · 防护", items: ["消防安全", "校园欺凌应对", "禁毒教育"] },
      { day: 7, title: "突破 · 心理", items: ["魔王关心理突破", "特种兵体验日", "篝火晚会"] },
      { day: 8, title: "格斗 · 战术", items: ["第二阶段军事格斗", "快速反应射击", "拉歌互动"] },
      { day: 9, title: "探索 · 寻宝", items: ["定向寻宝", "杯子舞", "平安电话"] },
      { day: 10, title: "礼仪 · 修养", items: ["餐桌礼仪", "拜访礼仪", "会客礼仪"] },
      { day: 11, title: "感恩 · 觉醒", items: ["感恩教育", "校园霸凌剧本杀", "我的梦想演讲"] },
      { day: 12, title: "领导 · 组织", items: ["将军令", "南水北调", "盲人接力"] },
      { day: 13, title: "口才 · 台风", items: ["高台演讲训练", "演讲实战", "PK 赛"] },
      { day: 14, title: "休整 · 沉淀", items: ["半日休整", "内务评比", "一封家书"] },
      { day: 15, title: "实弹 · 荣耀", items: ["实弹射击体验", "战车打靶", "扎竹排"] },
      { day: 16, title: "厨艺 · 匠心", items: ["中华小神厨", "叫花鸡制作", "竹筒饭"] },
      { day: 17, title: "艺术 · 绽放", items: ["非洲鼓", "泡泡龙", "龙武争霸"] },
      { day: 18, title: "防身 · 自护", items: ["防身术", "防触电/防震", "魔术培训"] },
      { day: 19, title: "领袖 · 风采", items: ["领袖风采", "共绘中国梦", "集体生日 + 家长寄语"] },
      { day: 20, title: "冲刺 · 彩排", items: ["结营考核彩排", "烤全羊盛宴", "篝火晚会"] },
      { day: 21, title: "结营 · 蜕变", items: ["汇报演出", "授勋仪式", "结营返程"] }
    ],
    inclusions: ["营地住宿", "6 餐/日 营养餐", "教材教具 + 营服", "100 万/人意外险", "结营证书 + 勋章", "实弹射击费用"],
    notes: ["21 天完整行为重塑周期", "科学验证：21 天形成良好行为习惯", "推荐有夏令营经验的孩子参加"],
    hot: true
  },
  {
    id: "core-28",
    categoryId: "theme",
    title: "全能领导力 · 28 天蜕变营",
    subTitle: "「破茧成蝶，领袖蜕变」从平凡到卓越",
    ageRange: "9-16",
    days: 28,
    price: 9980,
    originalPrice: 11980,
    city: "湖南郴州",
    base: "沙洲总部 + 嘉禾 1958 + 赣州方特",
    cover: "/images/scenes/汝攀国防教育驻校宣传手册_p31_4b032960a3.jpeg",
    gallery: [
      "/images/scenes/汝攀国防教育驻校宣传手册_p31_4b032960a3.jpeg",
      "/images/scenes/汝攀国防教育驻校宣传手册_p32_0a64112407.jpeg",
      "/images/scenes/汝攀国防教育驻校宣传手册_p28_32b814aef7.jpeg"
    ],
    highlights: [
      "21 天魔炼营全部内容 + 7 天高阶蜕变课程",
      "3D 打印体验 · 防溺水实战 · 向手机游戏说不",
      "农耕日（干农活/捕鱼/采摘）· 野外生存日 · 创业日",
      "赣州方特之旅（创业基金自主规划出行）",
      "专属成长档案 + 九大能力评估报告"
    ],
    schedule: [
      { day: 1, title: "入营", items: ["签到开营", "连队编制", "4S 内务"] },
      { day: 2, title: "纪律", items: ["队列训练", "体型认知", "自我介绍的艺术"] },
      { day: 3, title: "国防", items: ["95 式模拟射击", "战车启航", "真人 CS"] },
      { day: 4, title: "野外", items: ["钻木取火", "野外取水", "帐篷搭建"] },
      { day: 5, title: "长征", items: ["重走长征路", "野炊埋锅造饭", "露营"] },
      { day: 6, title: "安全", items: ["消防安全", "校园欺凌应对", "禁毒教育"] },
      { day: 7, title: "突破", items: ["魔王关心理突破", "特种兵体验日", "篝火晚会"] },
      { day: 8, title: "格斗", items: ["军事格斗进阶", "快速反应射击", "拉歌互动"] },
      { day: 9, title: "探索", items: ["定向寻宝", "杯子舞", "平安电话"] },
      { day: 10, title: "礼仪", items: ["餐桌礼仪", "拜访礼仪", "会客礼仪"] },
      { day: 11, title: "感恩", items: ["感恩教育", "校园霸凌剧本杀", "梦想演讲"] },
      { day: 12, title: "领导", items: ["将军令", "南水北调", "盲人接力"] },
      { day: 13, title: "演讲", items: ["高台演讲训练", "实战 PK", "军歌嘹亮"] },
      { day: 14, title: "修整", items: ["半日休整", "内务评比", "一封家书"] },
      { day: 15, title: "实弹", items: ["实弹射击", "战车打靶", "扎竹排"] },
      { day: 16, title: "厨艺", items: ["中华小神厨", "叫花鸡/竹筒饭", "烤全羊"] },
      { day: 17, title: "艺术", items: ["非洲鼓", "泡泡龙", "龙武争霸"] },
      { day: 18, title: "防身", items: ["防身术", "防触电/防震", "魔术表演"] },
      { day: 19, title: "领袖", items: ["领袖风采", "共绘中国梦", "集体生日 + 家长寄语"] },
      { day: 20, title: "科技", items: ["3D 打印体验", "水火箭制作", "创客编程入门"] },
      { day: 21, title: "防溺", items: ["防溺水实战", "向手机游戏说不", "励志感恩电影"] },
      { day: 22, title: "农耕", items: ["农耕日：干农活", "捕鱼体验", "采摘"] },
      { day: 23, title: "创业", items: ["创业日：进货销售", "财务规划", "利润核算"] },
      { day: 24, title: "远行", items: ["赣州方特之旅（自主出行）", "科技文化体验", "团队任务"] },
      { day: 25, title: "沉淀", items: ["复盘总结", "队列组织训练", "九大能力测评"] },
      { day: 26, title: "冲刺", items: ["结营考核彩排", "内务总评", "篝火晚会"] },
      { day: 27, title: "绽放", items: ["汇报演出彩排", "营地狂欢夜", "毕业寄语"] },
      { day: 28, title: "结营", items: ["正式汇报演出", "授勋颁奖", "包饺子 + 返程"] }
    ],
    inclusions: ["营地住宿(28 天)", "6 餐/日 营养餐", "营服 + 专属装备", "100 万/人意外险", "结营证书 + 勋章 + 成长档案", "实弹射击 + 赣州方特门票"],
    notes: ["28 天完整蜕变周期", "报名即送次年成长之星资格", "需家长签署完整入营协议"],
    hot: true
  },
  // ===== 主题营 =====
  {
    id: "th-speech-7",
    categoryId: "theme",
    title: "演讲口才领袖营 7 天",
    subTitle: "从开口到登台 · 7 天重塑表达力",
    ageRange: "8-14",
    days: 7,
    price: 4580,
    originalPrice: 4980,
    city: "湖南郴州",
    base: "嘉禾 1958 新汝空间",
    cover: "/images/scenes/新汝空间研学产品手册_p11_3e6064d5da.jpeg",
    gallery: [
      "/images/scenes/新汝空间研学产品手册_p11_3e6064d5da.jpeg",
      "/images/scenes/新汝空间研学产品手册_p11_40d894dfd3.jpeg"
    ],
    highlights: ["声音/演讲/主持 3 大模块", "电视台主持人亲授", "结营汇报演出 + 家长观摩"],
    schedule: [
      { day: 1, title: "破冰 · 声音觉醒", items: ["自我介绍重塑", "发声基础训练", "团队分组"] },
      { day: 2, title: "形体 · 台风塑造", items: ["站姿台步", "眼神交流", "公众表达 5 步法"] },
      { day: 3, title: "逻辑 · 演讲结构", items: ["演讲逻辑训练", "故事力培养", "即兴表达"] },
      { day: 4, title: "实战 · 模拟主持", items: ["模拟主持训练", "现场采访演练", "视频回看分析"] },
      { day: 5, title: "辩论 · 思维碰撞", items: ["辩论赛基础", "分组对抗", "导师点评"] },
      { day: 6, title: "冲刺 · 彩排联排", items: ["汇报演出联排", "一对一辅导", "自信建设"] },
      { day: 7, title: "绽放 · 汇报演出", items: ["正式汇报演出", "结营颁奖", "家长观摩"] }
    ],
    inclusions: ["教学场地", "营养餐", "演讲教材", "结营证书 + 视频"],
    notes: ["小班制 20 人/班"],
    new: true
  },
  // ===== 军事科技 =====
  {
    id: "mt-dro-7",
    categoryId: "military-tech",
    title: "无人机 + 机器人科技营 7 天",
    subTitle: "从飞行原理到编程实操",
    ageRange: "9-16",
    days: 7,
    price: 5680,
    originalPrice: 6280,
    city: "湖南郴州",
    base: "嘉禾 1958 新汝空间",
    cover: "/images/scenes/新汝空间研学产品手册_p9_7082b60444.jpeg",
    gallery: [
      "/images/scenes/新汝空间研学产品手册_p9_7082b60444.jpeg",
      "/images/scenes/新汝空间研学产品手册_p9_c8b9886c5d.jpeg",
      "/images/scenes/新汝空间研学产品手册_p9_590243f9ad.jpeg"
    ],
    highlights: ["飞行原理 + 安全法规", "DIY 拼装 + 编程实操", "航拍 + 穿越机竞赛", "机器人编程入门"],
    schedule: [
      { day: 1, title: "启航 · 飞行原理", items: ["无人机结构认知", "安全飞行 5 大守则", "模拟器试飞"] },
      { day: 2, title: "拼装 · 工程师初体验", items: ["DIY 四轴飞行器", "电调/电机调试", "试飞 + 故障排除"] },
      { day: 3, title: "编程 · 智能控制", items: ["图形化编程入门", "自动飞行航线规划", "编队飞行练习"] },
      { day: 4, title: "机器人 · 搭建", items: ["机器人结构认知", "传感器应用", "基础搭建"] },
      { day: 5, title: "机器人 · 编程", items: ["机器人编程实战", "自动巡线", "任务挑战"] },
      { day: 6, title: "竞赛 · 巅峰对决", items: ["穿越机竞速赛", "机器人对抗", "航拍作品展"] },
      { day: 7, title: "结营 · 成果展示", items: ["项目路演", "颁发证书 + 勋章", "作品打包返程"] }
    ],
    inclusions: ["教学套装(无人机+机器人)", "营养餐", "作品可带走", "结营证书"],
    notes: ["学员作品可带走继续研究", "需自带 iPad/平板用于编程"],
    hot: true
  },
  {
    id: "mt-natdef-5",
    categoryId: "military-tech",
    title: "国防教育 · 95 式步枪 5 天",
    subTitle: "国防 + 轻武器 + 真人 CS",
    ageRange: "9-16",
    days: 5,
    price: 3680,
    city: "湖南郴州",
    base: "沙洲总部基地",
    cover: "/images/scenes/汝攀国防教育驻校宣传手册_p8_bc3c902bce.jpeg",
    gallery: [
      "/images/scenes/汝攀国防教育驻校宣传手册_p8_bc3c902bce.jpeg",
      "/images/scenes/汝攀国防教育驻校宣传手册_p10_31a66fcfac.jpeg",
      "/images/scenes/汝攀国防教育驻校宣传手册_p12_e4a6c1652f.jpeg"
    ],
    highlights: ["退役军人教官亲授", "95 式步枪模拟射击", "装甲战车 + 迫击炮 + 火箭筒体验", "真人 CS 战术对抗"],
    schedule: [
      { day: 1, title: "国防 · 国家意识", items: ["开营授旗", "国防知识讲堂", "军事体能入门"] },
      { day: 2, title: "轻武器 · 95式", items: ["轻武器参观讲解", "模拟射击训练", "战术基础动作"] },
      { day: 3, title: "重装备 · 战车", items: ["装甲战车体验", "迫击炮发射体验", "火箭筒体验"] },
      { day: 4, title: "实战 · CS 对抗", items: ["真人 CS 战术", "小组对抗赛", "战地野炊"] },
      { day: 5, title: "结营 · 荣耀时刻", items: ["射击考核", "授勋仪式", "结营返程"] }
    ],
    inclusions: ["军事训练装备", "营养餐", "营服", "结营证书"],
    notes: ["全程退役军人教官执教"],
    hot: true
  },
  // ===== 体育户外 =====
  {
    id: "sp-outdoor-7",
    categoryId: "sports",
    title: "山地户外挑战营 7 天",
    subTitle: "徒步 · 攀岩 · 野外生存",
    ageRange: "9-16",
    days: 7,
    price: 4980,
    city: "湖南郴州",
    base: "沙洲 + 热水研学路线",
    cover: "/images/scenes/汝攀国防教育驻校宣传手册_p15_64291cf310.jpeg",
    gallery: [
      "/images/scenes/汝攀国防教育驻校宣传手册_p15_64291cf310.jpeg",
      "/images/scenes/汝攀国防教育驻校宣传手册_p14_43d35266ba.jpeg",
      "/images/scenes/汝攀国防教育驻校宣传手册_p16_4e6752683f.jpeg"
    ],
    highlights: ["15 公里山林徒步", "攀岩 + 速降", "野外净水/取火/搭帐篷", "LNT 无痕山林理念"],
    schedule: [
      { day: 1, title: "开营 · 装备认知", items: ["装备清单点验", "LNT 无痕山林理念", "团队组建"] },
      { day: 2, title: "徒步 · 走完有走完的力量", items: ["15 公里山径徒步", "中途补给站挑战", "夜间星空观测"] },
      { day: 3, title: "攀岩 · 超越自我", items: ["攀岩基础教学", "岩壁攀登挑战", "速降体验"] },
      { day: 4, title: "野外 · 生存技能", items: ["野外净水", "钻木取火", "帐篷搭建实训"] },
      { day: 5, title: "溯溪 · 团队协作", items: ["溪谷穿越", "团队溯溪挑战", "水上安全教学"] },
      { day: 6, title: "露营 · 星空之夜", items: ["山顶露营", "篝火晚会", "星空故事会"] },
      { day: 7, title: "结营 · 凯旋", items: ["总结分享", "授勋", "返程"] }
    ],
    inclusions: ["专业户外装备", "营养餐 + 路餐", "登山保险", "结营证书"],
    notes: ["按体能分 A/B 组", "报名需提供近期体检证明"]
  },
  {
    id: "sp-water-5",
    categoryId: "sports",
    title: "水上安全 + 皮划艇营 5 天",
    subTitle: "防溺水必修课 + 水上竞技",
    ageRange: "8-14",
    days: 5,
    price: 3980,
    city: "湖南郴州",
    base: "热水研学基地",
    cover: "/images/scenes/汝攀国防教育驻校宣传手册_p17_a7790f2bb9.jpeg",
    gallery: [
      "/images/scenes/汝攀国防教育驻校宣传手册_p17_a7790f2bb9.jpeg"
    ],
    highlights: ["防溺水自救互救", "皮划艇基础 + 进阶", "团队水上接力赛"],
    schedule: [
      { day: 1, title: "亲水 · 安全先行", items: ["防溺水理论", "救生衣正确穿戴", "浅池适应"] },
      { day: 2, title: "皮划艇 · 划出方向", items: ["基础桨法", "直线/转弯", "8 字绕标"] },
      { day: 3, title: "救援 · 自救互救", items: ["溺水救援模拟", "心肺复苏 CPR", "抛绳救援"] },
      { day: 4, title: "竞技 · 水上对决", items: ["皮划艇竞速", "团队接力赛", "水上趣味游戏"] },
      { day: 5, title: "结营 · 收获", items: ["水上安全知识考核", "授勋结营", "返程"] }
    ],
    inclusions: ["救生装备", "营养餐", "结营证书"],
    notes: ["营员须无心脏病等不适宜剧烈运动病史"]
  },
  // ===== 文化艺术 =====
  {
    id: "ar-nonherit-7",
    categoryId: "arts",
    title: "非遗手作 + 书画美育营 7 天",
    subTitle: "嘉禾伴嫁歌 + 砂型铸造 + 书画",
    ageRange: "7-14",
    days: 7,
    price: 4680,
    originalPrice: 4980,
    city: "湖南郴州",
    base: "嘉禾 1958 新汝空间",
    cover: "/images/scenes/新汝空间研学产品手册_p8_aff52bf9d2.jpeg",
    gallery: [
      "/images/scenes/新汝空间研学产品手册_p8_aff52bf9d2.jpeg",
      "/images/scenes/新汝空间研学产品手册_p8_c0a5f9c773.jpeg",
      "/images/scenes/新汝空间研学产品手册_p8_c52fe9b39c.jpeg"
    ],
    highlights: ["嘉禾伴嫁歌非遗传承人授课", "砂型铸造亲手制作", "国画/书法基础入门", "铸造文化馆参访"],
    schedule: [
      { day: 1, title: "开营 · 老厂房新生命", items: ["1958 厂房导览", "营员分组", "非遗第一课"] },
      { day: 2, title: "伴嫁歌 · 国家级非遗", items: ["伴嫁歌起源", "学唱经典片段", "传承人访谈"] },
      { day: 3, title: "铸造 · 工匠精神", items: ["参观铸造文化馆", "砂型铸造体验", "作品打磨"] },
      { day: 4, title: "书画 · 笔墨丹青", items: ["国画基础教学", "书法入门", "扇面创作"] },
      { day: 5, title: "非遗 · 综合创作", items: ["伴嫁歌 + 书画融合创作", "展品布置", "排练"] },
      { day: 6, title: "展演 · 非遗日", items: ["非遗作品展", "伴嫁歌汇报演出", "篝火晚会"] },
      { day: 7, title: "结营 · 满载而归", items: ["结营仪式", "作品打包", "返程"] }
    ],
    inclusions: ["非遗教材", "作品可带走", "营养餐", "结营证书"],
    notes: ["嘉禾伴嫁歌：国家级非物质文化遗产"],
    new: true
  },
  // ===== 美食体验 =====
  {
    id: "fd-bake-3",
    categoryId: "food",
    title: "小小面点师 3 天体验营",
    subTitle: "包子/饺子/桂花糕亲手做",
    ageRange: "6-12",
    days: 3,
    price: 1680,
    city: "湖南郴州",
    base: "嘉禾 1958 新汝空间",
    cover: "/images/scenes/新汝空间研学产品手册_p9_4033132a9c.jpeg",
    gallery: [
      "/images/scenes/新汝空间研学产品手册_p9_4033132a9c.jpeg"
    ],
    highlights: ["8 种面点学习", "传统美食文化讲解", "成品可带回家"],
    schedule: [
      { day: 1, title: "面粉的旅行", items: ["食材认知", "和面基础", "做包子"] },
      { day: 2, title: "饺子的形状", items: ["擀皮练习", "包饺子比赛", "桂花糕制作"] },
      { day: 3, title: "美食分享日", items: ["创意面点比赛", "美食分享会", "结营仪式"] }
    ],
    inclusions: ["食材 + 围裙", "午餐 + 下午茶", "作品可带走"],
    notes: ["过敏史报名时需提前告知"]
  },
  // ===== 研学旅行 =====
  {
    id: "rs-shazhou-1",
    categoryId: "research",
    title: "沙洲 1 天研学 · 「半条被子」",
    subTitle: "红色文化 · 1 日走读",
    ageRange: "6-16",
    days: 1,
    price: 268,
    city: "湖南郴州",
    base: "沙洲 5A 景区",
    cover: "/images/scenes/汝攀国防教育驻校宣传手册_p20_d9d164bc01.jpeg",
    gallery: [
      "/images/scenes/汝攀国防教育驻校宣传手册_p20_d9d164bc01.jpeg",
      "/images/scenes/汝攀国防教育驻校宣传手册_p21_7562343a15.jpeg"
    ],
    highlights: ["沙洲红色纪念馆讲解", "重走红军小道", "研学手册 + 盖章证书"],
    schedule: [
      { day: 1, title: "半条被子的温度", items: ["8:30 集合", "9:00 纪念馆参访", "10:30 红军小道", "12:00 农家饭", "14:00 情景剧", "16:00 结营"] }
    ],
    inclusions: ["讲解 + 物料", "午餐", "保险", "研学证书"],
    notes: ["30 人成团，上限 200 人/团"]
  },
  {
    id: "rs-jiahe-2",
    categoryId: "research",
    title: "嘉禾 1958 工业遗产 2 天 1 晚",
    subTitle: "老厂房 · 非遗 · 国防体验",
    ageRange: "7-16",
    days: 2,
    price: 1280,
    city: "湖南郴州",
    base: "嘉禾 1958 新汝空间",
    cover: "/images/scenes/新汝空间研学产品手册_p1_6f510da36a.jpeg",
    gallery: [
      "/images/scenes/新汝空间研学产品手册_p1_6f510da36a.jpeg",
      "/images/scenes/新汝空间研学产品手册_p2_ffeedee59d.jpeg",
      "/images/scenes/新汝空间研学产品手册_p3_3cb14fba7d.jpeg"
    ],
    highlights: ["26 字母分区对应 12 大主题", "工业遗址 + 非遗 + 国防沉浸式体验"],
    schedule: [
      { day: 1, title: "开营 + 厂房探秘", items: ["开营仪式", "1958 厂房导览", "铸造文化馆", "砂型铸造体验"] },
      { day: 2, title: "国防 + 非遗", items: ["轻武器参观", "伴嫁歌习歌堂", "结营仪式"] }
    ],
    inclusions: ["1 晚营地住宿", "3 餐", "教具", "保险", "结营证书"],
    notes: ["郴州首个完整工业遗址营地"]
  },
  // ===== 国际营 =====
  {
    id: "in-asia-7",
    categoryId: "intl",
    title: "「新加坡 + 泰国」7 天双语营",
    subTitle: "东南亚多元文化探索",
    ageRange: "10-16",
    days: 7,
    price: 18800,
    originalPrice: 20800,
    city: "海外",
    base: "新加坡 + 曼谷",
    cover: "/images/scenes/汝攀夏令营招商手册_p2_774c7f240c.jpeg",
    gallery: [
      "/images/scenes/汝攀夏令营招商手册_p2_774c7f240c.jpeg"
    ],
    highlights: ["双语沉浸", "新加坡国立大学参访", "多元文化体验", "夜间动物园探索"],
    schedule: [
      { day: 1, title: "启程 · 抵达新加坡", items: ["机场集合", "入住酒店", "安全说明会"] },
      { day: 2, title: "城市探索", items: ["鱼尾狮公园", "新生水专家参访", "夜间动物园"] },
      { day: 3, title: "学府 · 国立大学", items: ["新加坡国立大学参访", "留学生交流", "牛车水文化探索"] },
      { day: 4, title: "跨界 · 前往泰国", items: ["飞曼谷", "大皇宫参访", "水上市场"] },
      { day: 5, title: "文化 · 深度体验", items: ["泰拳体验课", "泰国美食 DIY", "文化之夜"] },
      { day: 6, title: "自然 · 生态探索", items: ["热带雨林徒步", "大象保护营", "结营晚宴"] },
      { day: 7, title: "返程 · 满载而归", items: ["机场总结分享", "返回中国", "家长接机"] }
    ],
    inclusions: ["国际机票", "四星酒店", "餐食", "双语导师", "签证辅导"],
    notes: ["需提前 30 天办理护照/签证", "建议家长陪同或组团出行"]
  },
  // ===== 假日营/周末营/亲子营 =====
  {
    id: "ho-weekend-2",
    categoryId: "holiday",
    title: "周末亲子营 2 天 1 晚",
    subTitle: "父母同住 · 共同成长",
    ageRange: "5-12",
    days: 2,
    price: 1980,
    originalPrice: 2280,
    city: "湖南郴州",
    base: "嘉禾 1958 新汝空间",
    cover: "/images/scenes/新汝空间研学产品手册_p14_b3022d174a.jpeg",
    gallery: [
      "/images/scenes/新汝空间研学产品手册_p14_b3022d174a.jpeg"
    ],
    highlights: ["1 大 1 小同住", "亲子定向越野", "夜间篝火晚会", "铸造体验亲子共同完成"],
    schedule: [
      { day: 1, title: "报到 · 家庭编组", items: ["家庭签到", "亲子破冰游戏", "晚餐 + 篝火晚会"] },
      { day: 2, title: "任务 · 默契挑战", items: ["亲子定向越野", "砂型铸造亲子体验", "结营颁奖"] }
    ],
    inclusions: ["1 晚亲子房", "3 餐", "教具", "保险", "合影"],
    notes: ["每周六开营，限 30 组家庭"],
    new: true
  },
  {
    id: "ho-single-3",
    categoryId: "holiday",
    title: "假日独立营 3 天 2 晚",
    subTitle: "短途独立 · 假期充电",
    ageRange: "6-12",
    days: 3,
    price: 2280,
    city: "湖南郴州",
    base: "沙洲总部基地",
    cover: "/images/scenes/汝攀1天沙洲基地课程_p1_66808bad30.jpeg",
    gallery: [
      "/images/scenes/汝攀1天沙洲基地课程_p1_66808bad30.jpeg",
      "/images/scenes/汝攀1天沙洲基地课程_p5_f434116159.jpeg"
    ],
    highlights: ["短时高效", "独立生活入门", "国防教育初体验", "适合夏令营预备"],
    schedule: [
      { day: 1, title: "独立 · 第一天", items: ["入营报到", "连队编制", "内务 4S 教学"] },
      { day: 2, title: "挑战 · 第二天", items: ["军事训练基础", "95 式模拟射击", "篝火晚会"] },
      { day: 3, title: "收获 · 结营", items: ["感恩教育", "汇报展示", "返程"] }
    ],
    inclusions: ["营地住宿", "6 餐", "保险", "营服"],
    notes: ["假日营期灵活，可预约任意假日"]
  }
];

// 工具：根据 id 查产品
export function getProgramById(id: string): CampProgram | undefined {
  return PROGRAMS.find(p => p.id === id);
}
export function getCategoryById(id: string): CampCategory | undefined {
  return CATEGORIES.find(c => c.id === id);
}
export function programsByCategory(id: string): CampProgram[] {
  return PROGRAMS.filter(p => p.categoryId === id);
}
