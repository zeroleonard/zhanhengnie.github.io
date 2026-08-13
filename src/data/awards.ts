export interface Award {
  title: { en: string; zh: string };
  year: string;
}

export const awards: Award[] = [
  { title: { en: 'CVPR 2026 Publication (Poster)', zh: 'CVPR 2026 发表（Poster）' }, year: '2026' },
  { title: { en: 'ACM MM 2026 Publication (Poster)', zh: 'ACM MM 2026 发表（Poster）' }, year: '2026' },
  { title: { en: 'WSDM 2026 Publication (Oral)', zh: 'WSDM 2026 发表（Oral）' }, year: '2026' },
  { title: { en: 'Outstanding Graduate, Beihang University', zh: '北航优秀毕业生' }, year: '2024' },
  { title: { en: 'National Encouragement Scholarship (Top 10%)', zh: '国家励志奖学金（前 10%）' }, year: '2022-2023' },
  { title: { en: 'First Prize, National Mathematical Modeling Contest (Beijing)', zh: '全国大学生数学建模竞赛北京赛区一等奖' }, year: '2020, 2022' },
  { title: { en: 'First Prize, FLTRP English Public Speaking Contest (Provincial)', zh: '外研社英语演讲比赛省一等奖' }, year: '2022' },
  { title: { en: 'Honorable Mention, MCM/ICM (USA)', zh: '美国大学生数学建模竞赛 H 奖' }, year: '2020' }
];
