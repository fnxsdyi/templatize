import type { CategoryInfo, Template } from "@/types";

export const categories: CategoryInfo[] = [
  {
    id: "ai-startup",
    label: "AI 创业启动包",
    slug: "ai-startup",
    description: "从 idea 到 MVP 的全套模板，加速 AI 产品落地",
  },
  {
    id: "solopreneur",
    label: "Solopreneur 运营系统",
    slug: "solopreneur",
    description: "一人公司的完整运营体系，高效管理你的业务",
  },
  {
    id: "content",
    label: "内容创作日历",
    slug: "content",
    description: "内容规划、创作和发布的系统化工具",
  },
  {
    id: "crm",
    label: "客户管理 CRM",
    slug: "crm",
    description: "跟踪客户关系，不错过任何商机",
  },
  {
    id: "knowledge",
    label: "个人知识库",
    slug: "knowledge",
    description: "构建你的第二大脑，知识管理的终极方案",
  },
];

export const templates: Template[] = [
  {
    id: "tpl-001",
    slug: "ai-startup-kit",
    title: "AI 创业启动包",
    subtitle: "从 0 到 1 构建你的 AI 产品",
    description:
      "包含产品定位画布、MVP 规划模板、技术选型指南、融资路演 PPT 框架、用户增长策略模版。专为 AI 创业者设计，覆盖产品从概念到上线的完整路径。",
    price: 39,
    category: "ai-startup",
    tags: ["AI", "创业", "MVP", "融资"],
    features: [
      "产品定位画布（Notion 版）",
      "MVP 功能优先级矩阵",
      "技术栈评估框架",
      "8 页融资路演 PPT 模板",
      "用户获取策略手册",
      "竞品分析模板",
    ],
    previewImages: [
      "/images/ai-kit-1.jpg",
      "/images/ai-kit-2.jpg",
      "/images/ai-kit-3.jpg",
    ],
    gumroadUrl: "https://shoujiang.gumroad.com/l/smrreb",
    whatsIncluded: [
      "6 个 Notion 模板",
      "1 份 PDF 策略手册",
      "1 套 PPT 模板（Keynote/PPT）",
      "终身免费更新",
    ],
    rating: 4.8,
    reviewCount: 127,
    author: "Templatize Studio",
    publishDate: "2025-01-15",
    updatedDate: "2026-01-20",
  },
  {
    id: "tpl-002",
    slug: "solopreneur-system",
    title: "Solopreneur 运营系统",
    subtitle: "一人公司的高效运营体系",
    description:
      "整合项目管理、客户关系、财务追踪、内容排期的全能运营系统。专为独立开发者、自由职业者和小团队设计，让你一个人也能管好所有业务。",
    price: 29,
    originalPrice: 39,
    category: "solopreneur",
    tags: ["运营", "效率", "项目管理", "独立开发者"],
    features: [
      "项目管理仪表盘",
      "客户关系跟踪器",
      "财务记帐与分析",
      "内容排期日历",
      "任务自动化工作流",
      "周报自动生成",
    ],
    previewImages: [
      "/images/solo-1.jpg",
      "/images/solo-2.jpg",
      "/images/solo-3.jpg",
    ],
    gumroadUrl: "https://shoujiang.gumroad.com/l/flbkiw",
    whatsIncluded: [
      "1 个 Notion 全功能工作台",
      "设置指南视频",
      "自动化模板",
      "季度更新",
    ],
    rating: 4.9,
    reviewCount: 89,
    author: "Templatize Studio",
    publishDate: "2025-03-01",
    updatedDate: "2026-01-18",
  },
  {
    id: "tpl-003",
    slug: "content-calendar",
    title: "内容创作日历",
    subtitle: "系统化你的内容创作流程",
    description:
      "从选题规划到发布排期的全流程内容管理系统。支持多平台同步发布、数据分析追踪，让你的内容策略不再随缘。",
    price: 19,
    category: "content",
    tags: ["内容", "社交媒体", "日历", "规划"],
    features: [
      "年度内容规划模板",
      "社交媒体排期日历",
      "选题灵感看板",
      "内容效果分析表",
      "批量内容生产清单",
      "跨平台发布检查表",
    ],
    previewImages: [
      "/images/content-1.jpg",
      "/images/content-2.jpg",
      "/images/content-3.jpg",
    ],
    gumroadUrl: "https://shoujiang.gumroad.com/l/ysajyd",
    whatsIncluded: [
      "Notion 内容管理系统",
      "Google Calendar 集成",
      "内容复盘模板",
      "12 个月更新",
    ],
    rating: 4.7,
    reviewCount: 203,
    author: "Templatize Studio",
    publishDate: "2025-05-10",
    updatedDate: "2026-02-01",
  },
  {
    id: "tpl-004",
    slug: "client-crm",
    title: "客户管理 CRM",
    subtitle: "小团队的轻量级 CRM 系统",
    description:
      "不需要 Salesforce 的复杂度，也不需要 Excel 的简陋。专为小型团队和独立工作者设计的 CRM，让你完整跟踪每一条销售线索。",
    price: 29,
    category: "crm",
    tags: ["CRM", "销售", "客户", "管理"],
    features: [
      "客户档案数据库",
      "销售漏斗追踪",
      "跟进提醒系统",
      "合同管理模板",
      "发票自动生成",
      "客户满意度调查",
    ],
    previewImages: [
      "/images/crm-1.jpg",
      "/images/crm-2.jpg",
      "/images/crm-3.jpg",
    ],
    gumroadUrl: "https://shoujiang.gumroad.com/l/rbjnxp",
    whatsIncluded: [
      "Notion CRM 数据库",
      "自动化流程设置",
      "使用手册 PDF",
      "终身免费更新",
    ],
    rating: 4.6,
    reviewCount: 156,
    author: "Templatize Studio",
    publishDate: "2025-07-22",
    updatedDate: "2026-02-10",
  },
  {
    id: "tpl-005",
    slug: "personal-knowledge-base",
    title: "个人知识库",
    subtitle: "构建你的第二大脑",
    description:
      "基于 PARA 方法论的 Notion 知识管理系统。帮助你捕捉、组织、提炼和运用信息，让知识真正为你所用，而不仅仅是收藏。",
    price: 19,
    originalPrice: 29,
    category: "knowledge",
    tags: ["知识管理", "PARA", "第二大脑", "笔记"],
    features: [
      "PARA 体系完整框架",
      "每日笔记工作流",
      "项目管理知识库",
      "阅读笔记系统",
      "知识输出模板",
      "定期回顾系统",
    ],
    previewImages: [
      "/images/knowledge-1.jpg",
      "/images/knowledge-2.jpg",
      "/images/knowledge-3.jpg",
    ],
    gumroadUrl: "https://shoujiang.gumroad.com/l/zrerc",
    whatsIncluded: [
      "完整的 Notion 工作台",
      "入门视频教程",
      "PARA 体系 PDF 指南",
      "终身免费更新",
    ],
    rating: 4.9,
    reviewCount: 312,
    author: "Templatize Studio",
    publishDate: "2025-09-05",
    updatedDate: "2026-02-15",
  },
];

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}

export function getTemplatesByCategory(
  category: string
): Template[] {
  return templates.filter((t) => t.category === category);
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(0)}`;
}
