export interface Experience {
  kind: 'internship' | 'research' | 'education';
  title: { en: string; zh: string };
  org: { en: string; zh: string };
  brief?: { org: { en: string; zh: string }; role: { en: string; zh: string } };
  periodStart: string;
  periodEnd: string;
  desc: { en: string; zh: string };
}

export const experiences: Experience[] = [
  {
    kind: 'internship',
    title: { en: 'Research Intern / LLM Algorithm Engineer', zh: '研究实习生 / LLM 算法工程师' },
    org: { en: 'Alibaba Group, Taobao & Tmall Search Advertising', zh: '阿里巴巴集团，淘天搜索广告' },
    brief: {
      org: { en: 'Alibaba Group', zh: '阿里巴巴集团' },
      role: { en: 'Research Intern, Search Ads', zh: '研究实习生，搜索广告' }
    },
    periodStart: 'Apr 2025',
    periodEnd: 'Present',
    desc: {
      en: 'Core contributor to the MOON series of multimodal product representation models. Deployed across Taobao search advertising pipeline (recall, relevance, ranking), achieving cumulative +20% CTR — the largest single-project lift in search ads over three years.',
      zh: 'MOON 系列多模态商品表征模型核心贡献者。部署于淘宝搜索广告全链路（召回、相关性、排序），累计提升 +20% CTR——三年内搜索广告最大单项目收益。'
    }
  },
  {
    kind: 'research',
    title: { en: 'Graduate Researcher', zh: '硕士研究生' },
    org: { en: 'Beihang University, School of CS&E', zh: '北京航空航天大学，计算机学院' },
    periodStart: 'Sep 2024',
    periodEnd: 'Present',
    desc: {
      en: 'Research on continual learning and mixture-of-experts architectures under Prof. Jia Li. Published at CVPR, WSDM, and ACM MM. Investigating hierarchical MoE approaches for online continual learning and continual personalized generation.',
      zh: '在李甲教授指导下研究持续学习与混合专家架构。在 CVPR、WSDM、ACM MM 发表论文。探索层次化 MoE 方法在在线持续学习与持续个性化生成中的应用。'
    }
  },
  {
    kind: 'education',
    title: { en: 'B.Eng. in Software Engineering', zh: '软件工程学士' },
    org: { en: 'Beihang University, School of Software', zh: '北京航空航天大学，软件学院' },
    periodStart: 'Sep 2019',
    periodEnd: 'Jun 2024',
    desc: {
      en: 'GPA 3.82/4.0 (Top 6%). National Encouragement Scholarship recipient. First Prize in National Mathematical Modeling Contest (Beijing).',
      zh: 'GPA 3.82/4.0（前 6%）。国家励志奖学金获得者。全国大学生数学建模竞赛北京赛区一等奖。'
    }
  }
];

export const internships = experiences.filter((exp) => exp.kind === 'internship');
