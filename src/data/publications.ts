export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: 'Published' | 'Accepted' | 'Technical Report';
  highlight?: 'Oral' | 'Poster';
  role: string;
  arxiv?: string;
  dataset?: string;
  image: string;
  tldr: { en: string; zh: string };
}

export const publications: Publication[] = [
  {
    title: 'MOON2.0: Dynamic Modality-balanced Multimodal Representation Learning for E-commerce Product Understanding',
    authors: 'Zhanheng Nie*, Chenghan Fu*, Daoze Zhang*, Junxian Wu*, et al.',
    venue: 'CVPR 2026',
    year: 2026,
    status: 'Published',
    highlight: 'Poster',
    role: 'Co-first author (1st), independently led all work',
    arxiv: 'https://arxiv.org/abs/2511.12449',
    dataset: 'https://huggingface.co/datasets/ZHNie/MBE2.0',
    image: '/assets/projects/moon2.png',
    tldr: {
      en: 'We propose Modality-Driven MoE and Dual-Level Alignment to solve modality imbalance in multimodal product representation, achieving SOTA on multiple benchmarks.',
      zh: '提出模态驱动 MoE 和双层对齐，解决多模态商品表征的模态不平衡问题，在多个基准上达到 SOTA。'
    }
  },
  {
    title: 'MOON: Generative MLLM-based Multimodal Representation Learning for E-commerce Product Understanding',
    authors: 'Daoze Zhang*, Chenghan Fu*, Zhanheng Nie*, Jianyu Liu*, et al.',
    venue: 'WSDM 2026',
    year: 2026,
    status: 'Published',
    highlight: 'Oral',
    role: 'Co-first author',
    arxiv: 'https://arxiv.org/abs/2508.11999',
    dataset: 'https://huggingface.co/datasets/Daoze/MM-Bench-E-Commerce',
    image: '/assets/projects/moon1.png',
    tldr: {
      en: 'We propose the first generative MLLM-based product representation model with Guided MoE and specialized negative sampling.',
      zh: '首个基于生成式多模态大模型的商品表征模型，引入引导式 MoE 和专用负采样策略。'
    }
  },
  {
    title: 'MOON3.0: Reasoning-aware Multimodal Representation Learning for E-commerce Product Understanding',
    authors: 'Junxian Wu*, Chenghan Fu*, Zhanheng Nie*, Daoze Zhang*, et al.',
    venue: 'ACM MM 2026',
    year: 2026,
    status: 'Accepted',
    highlight: 'Poster',
    role: 'Co-first author',
    arxiv: 'https://arxiv.org/abs/2604.00513',
    image: '/assets/projects/moon3.png',
    tldr: {
      en: 'We propose the first reasoning-aware MLLM for product representation, combining contrastive learning with GRPO reinforcement and a FIRE module for fine-grained details.',
      zh: '首个推理感知的多模态大模型商品表征系统，结合对比学习与 GRPO 强化训练及 FIRE 细粒度增强模块。'
    }
  },
  {
    title: 'MOON Embedding: Multimodal Representation Learning for E-commerce Search Advertising',
    authors: 'Chenghan Fu*, Daoze Zhang*, Yukang Lin*, Zhanheng Nie*, et al.',
    venue: 'arXiv:2511.11305',
    year: 2025,
    status: 'Technical Report',
    role: 'Co-first author',
    arxiv: 'https://arxiv.org/abs/2511.11305',
    image: '/assets/projects/moon_report.png',
    tldr: {
      en: 'A comprehensive 31-page report documenting MOON deployment across Taobao search advertising, achieving cumulative +20% CTR over three years.',
      zh: '31 页完整技术报告，记录 MOON 在淘宝搜索广告全链路部署，累计 +20% CTR 提升。'
    }
  }
];
