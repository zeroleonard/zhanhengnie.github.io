export const profile = {
  name: { en: 'Zhanheng Nie', zh: '聂湛恒' },
  philosophy: {en: 'Zero to start, and one is the best motivation.', zh: '慢慢开始，有为勿停'},
  role: {
    en: 'M.S. Student, Beihang University',
    zh: '硕士研究生，北京航空航天大学'
  },
  bio: {
    en: {
      short: 'I study how multimodal models learn useful representations and keep adapting as data, tasks, and contexts change.',
      long: 'I am a second-year M.S. student at the School of Computer Science and Engineering, Beihang University, advised by Prof. Jia Li. My research focuses on multimodal representation learning and continual learning, with Mixture-of-Experts as a unifying architectural lens. I am currently a research intern at Alibaba Group (Taobao & Tmall), where I contribute to the MOON series of multimodal product representation models deployed in search advertising.'
    },
    zh: {
      short: '我研究多模态模型如何学习有效表征，并在数据、任务和场景持续变化时保持适应能力。',
      long: '我是北京航空航天大学计算机科学与工程学院二年级硕士研究生，导师为李甲教授。研究方向聚焦多模态表征学习与持续学习，以混合专家（MoE）架构为统一视角。目前在阿里巴巴集团（淘天）搜索广告团队担任研究实习生，参与 MOON 系列多模态商品表征模型的研发。'
    }
  },
  email: 'NieZH@buaa.edu.cn',
  scholar: 'https://scholar.google.com/citations?user=Kj35CWsAAAAJ&hl=en',
  github: 'https://github.com/zeroleonard',
  huggingface: 'https://huggingface.co/ZHNie',
  orcid: 'https://orcid.org/0009-0007-6313-3504',
  researchFocus: {
    en: [
      { title: 'Multimodal Representation Learning', desc: 'Building generative MLLM-based models for product understanding at industrial scale' },
      { title: 'Continual & Adaptive Learning', desc: 'Enabling models to learn from unbounded data streams without catastrophic forgetting' },
      { title: 'Efficient Mixture Architectures', desc: 'Designing hierarchical MoE systems that unify recognition, generation, and representation' }
    ],
    zh: [
      { title: '多模态表征学习', desc: '构建基于生成式多模态大模型的工业级商品理解系统' },
      { title: '持续与自适应学习', desc: '使模型在无界数据流中持续学习而不遗忘' },
      { title: '高效混合专家架构', desc: '设计层次化 MoE 系统，统一识别、生成与表征' }
    ]
  }
};
