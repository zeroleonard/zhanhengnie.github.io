export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: 'Published' | 'Under Review' | 'Technical Report';
  highlight?: 'Oral' | 'Poster';
  role: string;
  arxiv?: string;
  dataset?: string;
  abstract: { en: string; zh: string };
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
    abstract: {
      en: 'Proposes Modality-Driven MoE, Dual-Level Alignment, and MLLM-based co-augmentation to address modality imbalance in multimodal product representation. Achieves SOTA on MBE2.0 and multiple public benchmarks.',
      zh: '提出模态驱动 MoE、双层对齐和基于 MLLM 的协同增强，解决多模态商品表征中的模态不平衡问题。在 MBE2.0 及多个公开基准上达到 SOTA。'
    }
  },
  {
    title: 'MOON3.0: Reasoning-aware Multimodal Representation Learning for E-commerce Product Understanding',
    authors: 'Junxian Wu*, Chenghan Fu*, Zhanheng Nie*, Daoze Zhang*, et al.',
    venue: 'ACM MM 2026',
    year: 2026,
    status: 'Published',
    highlight: 'Poster',
    role: 'Co-first author',
    arxiv: 'https://arxiv.org/abs/2604.00513',
    abstract: {
      en: 'First reasoning-aware MLLM for product representation. Introduces joint contrastive-RL (GRPO) training and FIRE module for fine-grained detail preservation.',
      zh: '首个推理感知的多模态大模型商品表征系统。引入对比-强化学习联合训练（GRPO）和 FIRE 模块实现细粒度细节保留。'
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
    abstract: {
      en: 'First generative MLLM-based product representation model. Proposes Guided MoE, core semantic region detection, and specialized negative sampling for multimodal product understanding.',
      zh: '首个基于生成式多模态大模型的商品表征模型。提出引导式 MoE、核心语义区域检测和专用负采样策略。'
    }
  },
  {
    title: 'One Step to Realistic: Advancing Infinite Continual Learning with Hierarchical Mixture Architectures',
    authors: 'Zhanheng Nie*, Qisen Wang*, Yifan Zhao, Jia Li',
    venue: 'IEEE TCSVT',
    year: 2025,
    status: 'Under Review',
    role: 'Co-first author (1st)',
    abstract: {
      en: 'Formalizes online infinite continual learning and proposes H-MoMaE, a hierarchical Mixture-of-Models-and-Experts architecture with dynamic sparse routing for unbounded data streams.',
      zh: '形式化在线无限持续学习范式，提出 H-MoMaE 层次化模型-专家混合架构，通过动态稀疏路由应对无界数据流。'
    }
  },
  {
    title: 'HMoLA-Diff: Hierarchical MoE-LoRA for Continual Few-Shot Personalized T2I Generation',
    authors: 'Zhanheng Nie, Yifan Zhao, Hongyu Wu, Qigang Wang, et al.',
    venue: 'ICXR 2026',
    year: 2025,
    status: 'Under Review',
    role: 'Sole first author',
    abstract: {
      en: 'Hierarchical MoE-LoRA with cross-modal prototype routing for continual personalization of diffusion models. Only 4.82M trainable parameters, achieving positive backward transfer across all task orderings.',
      zh: '层次化 MoE-LoRA 结合跨模态原型路由，实现扩散模型的持续个性化生成。仅 4.82M 可训练参数，在所有任务序列上实现正向后向迁移。'
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
    abstract: {
      en: 'Comprehensive 31-page account of deploying MOON across Taobao search advertising (recall, relevance, ranking), reporting +20% cumulative CTR improvement over three years.',
      zh: '31 页完整技术报告，记录 MOON 在淘宝搜索广告全链路（召回、相关性、排序）的部署，累计 +20% CTR 提升。'
    }
  }
];
