export interface NewsItem {
  date: string;
  type: 'Research' | 'Award' | 'Work';
  content: { en: string; zh: string };
}

export const news: NewsItem[] = [
  {
    date: 'Jul. 2026',
    type: 'Research',
    content: {
      en: '<b>1 paper</b> accepted by ACM MM 2026 (co-first author)',
      zh: '<b>1 篇论文</b>被 ACM MM 2026 录用（共同一作）'
    }
  },
  {
    date: 'Jun. 2026',
    type: 'Research',
    content: {
      en: '<b>1 paper</b> published at CVPR 2026 (<b>co-first author, independently led</b>)',
      zh: '<b>1 篇论文</b>在 CVPR 2026 发表（<b>共一排名第一，独立主导</b>）'
    }
  },
  {
    date: 'Feb. 2026',
    type: 'Research',
    content: {
      en: '<b>1 paper</b> published at WSDM 2026 <b>Oral</b> (co-first author)',
      zh: '<b>1 篇论文</b>在 WSDM 2026 发表 <b>Oral</b>（共同一作）'
    }
  },
  {
    date: 'Nov. 2025',
    type: 'Research',
    content: {
      en: '<b>MOON Technical Report</b> (31 pages) released on arXiv, documenting +20% CTR deployment',
      zh: '<b>MOON 技术报告</b>（31 页）发布于 arXiv，记录 +20% CTR 部署全过程'
    }
  },
  {
    date: 'Apr. 2025',
    type: 'Work',
    content: {
      en: 'Joined <b>Alibaba Group</b> (Taobao & Tmall) as Research Intern in Search Advertising',
      zh: '加入<b>阿里巴巴集团</b>（淘天）搜索广告团队担任研究实习生'
    }
  },
  {
    date: 'Sep. 2024',
    type: 'Award',
    content: {
      en: 'Started M.S. at <b>Beihang University</b>, School of CS&E (Top 20%)',
      zh: '进入<b>北京航空航天大学</b>计算机学院攻读硕士（前 20%）'
    }
  },
  {
    date: 'Jun. 2024',
    type: 'Award',
    content: {
      en: '<b>Outstanding Graduate</b> of Beihang University (Top 10%)',
      zh: '获评<b>北航优秀毕业生</b>（前 10%）'
    }
  }
];
