export interface Project {
  id: string;
  title: string;
  tagline: { en: string; zh: string };
  desc: { en: string; zh: string };
  highlights: { en: string[]; zh: string[] };
  papers: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'moon',
    title: 'MOON Series',
    tagline: {
      en: 'Industrial Multimodal Representation at Billion Scale',
      zh: '亿级工业多模态表征'
    },
    desc: {
      en: 'A family of generative MLLM-based multimodal representation models for e-commerce product understanding, deployed across Taobao search advertising. The series progresses from generative representation (MOON), to modality-balanced learning (MOON 2.0), to reasoning-aware fine-grained representation (MOON 3.0).',
      zh: 'MOON 系列是基于生成式多模态大模型的商品表征模型族，部署于淘宝搜索广告全链路。从生成式表征（MOON）、到模态平衡学习（MOON 2.0）、再到推理感知细粒度表征（MOON 3.0），逐步演进。'
    },
    highlights: {
      en: [
        'Cumulative +20% CTR in Taobao search advertising',
        'Modality-Driven MoE for adaptive multimodal processing',
        'Joint contrastive-RL (GRPO) training with FIRE module'
      ],
      zh: [
        '淘宝搜索广告累计 +20% CTR',
        '模态驱动 MoE 实现自适应多模态处理',
        '对比-强化学习（GRPO）联合训练 + FIRE 模块'
      ]
    },
    papers: ['MOON2.0 (CVPR 2026)', 'MOON3.0 (ACM MM 2026)', 'MOON (WSDM 2026 Oral)', 'Tech Report']
  },
  {
    id: 'hmomae',
    title: 'H-MoMaE',
    tagline: {
      en: 'Online Infinite Continual Learning',
      zh: '在线无限持续学习'
    },
    desc: {
      en: 'Formalizes the online infinite continual learning paradigm where task boundaries are unknown and data streams are unbounded. Proposes a hierarchical Mixture-of-Models-and-Experts architecture with dynamic sparse routing and dual-threshold expansion.',
      zh: '形式化在线无限持续学习范式——任务边界未知、数据流无界。提出层次化模型-专家混合架构，结合动态稀疏路由与双阈值扩展机制。'
    },
    highlights: {
      en: [
        'Two-tier architecture: model-level diversity + expert-level specialization',
        'Dynamic dual-threshold expansion mechanism',
        'Outperforms 11 baselines on 4 benchmarks',
        'Leads by 7+ points on CIFAR-100 Joint Accuracy'
      ],
      zh: [
        '双层架构：模型级多样性 + 专家级特化',
        '动态双阈值扩展机制',
        '在 4 个基准上超越 11 种基线方法',
        'CIFAR-100 联合准确率领先 7+ 分'
      ]
    },
    papers: ['IEEE TCSVT (Under Review)']
  },
  {
    id: 'hmoladiff',
    title: 'HMoLA-Diff',
    tagline: {
      en: 'Continual Personalized Generation',
      zh: '持续个性化生成'
    },
    desc: {
      en: 'Organizes LoRA experts along the UNet hierarchy for continual few-shot personalized text-to-image generation. Uses cross-modal prototype routing and image-free weight-swap distillation to achieve positive backward transfer.',
      zh: '沿 UNet 层次结构组织 LoRA 专家，实现持续少样本个性化文生图。通过跨模态原型路由与无图权重交换蒸馏实现正向后向迁移。'
    },
    highlights: {
      en: [
        'Only 4.82M trainable parameters (~1/180 of full UNet)',
        'Only method achieving positive backward transfer (BWT > 0)',
        'Cross-modal prototype routing at object/relation/scene levels',
        'Evaluated against 14 baselines across 3 task orderings'
      ],
      zh: [
        '仅 4.82M 可训练参数（完整 UNet 的 ~1/180）',
        '唯一实现正向后向迁移（BWT > 0）的方法',
        '物体/关系/场景三层跨模态原型路由',
        '3 种任务序列下对比 14 种基线方法'
      ]
    },
    papers: ['ICXR 2026 (Under Review)']
  }
];
