# Zhanheng Nie Personal Academic Homepage Plan

## 1. Goal

Build a bilingual-ready academic homepage for Zhanheng Nie (聂湛恒), centered on multimodal representation learning and continual learning. The page should help prospective supervisors, research collaborators, and recruiters understand the research identity, strongest work, and public artifacts within two minutes.

The site should not be a direct web copy of the CV. Its primary job is to establish a coherent research narrative:

> Building multimodal learning systems that adapt continuously, from industrial product representation to personalized generation.

Initial release recommendation: English-first single-page site, with a downloadable English CV. Add Chinese localization only after the English facts and copy are stable.

## 2. Workspace Findings

### 2.1 Confirmed identity and profile

- Name: Zhanheng Nie / 聂湛恒
- Current role: M.S. student at the School of Computer Science and Engineering, Beihang University
- Expected graduation: June 2027
- Advisor: Prof. Jia Li
- Current industry experience: Research Intern / LLM Algorithm Engineer at Alibaba Group, Taobao and Tmall search advertising team, since April 2025
- Public academic email candidate: `NieZH@buaa.edu.cn`
- Google Scholar ID: `Kj35CWsAAAAJ`
- Primary research areas: multimodal representation learning, continual learning, mixture-of-experts, multimodal foundation models, and personalized image generation

Primary sources:

- `../27fall_hk_phd/05_cv/cv_en.tex`
- `../27fall_hk_phd/05_cv/cv_zh.tex`
- `../27fall_hk_phd/06_RP/proposal_en.tex`
- `../27fall_hk_phd/03_research_direction/04_direction_refined_v4.md`

### 2.2 Publication candidates

Use the following only after a final status check immediately before launch:

| Work | Role currently supported by materials | Status currently stated | Public link status |
|---|---|---|---|
| MOON2.0 | Co-first author, first listed; project leadership is supported | CVPR 2026 Poster | arXiv `2511.12449`, verify |
| One Step to Realistic / H-MoMaE | Co-first author | IEEE TCSVT, under revision/review | No safe public paper/code link found |
| HMoLA-Diff | First author | ICXR 2026, under review | No safe public paper/code link found |
| MOON | Co-first author | WSDM 2026 Oral | arXiv `2508.11999`, verify |
| MOON3.0 | Co-first author | ACM MM 2026 Poster | arXiv `2604.00513`, verify |
| MOON Embedding | Co-first author | Technical report, 2025 | arXiv `2511.11305` |

Do not describe MOON2.0 as sole first-author work. Do not list H-MoMaE or HMoLA-Diff as accepted unless official evidence is available.

### 2.3 Project narratives suitable for the homepage

1. **Industrial multimodal representation**
   - MOON, MOON2.0, and MOON3.0 form a coherent progression from generative representation, to modality-balanced learning, to reasoning-aware fine-grained representation.
   - This should be the most prominent project family.

2. **Infinite continual learning**
   - H-MoMaE studies online streams without task boundaries and uses hierarchical model/expert routing.
   - Public copy should focus on the problem and architecture, not unverified performance numbers.

3. **Continual personalized generation**
   - HMoLA-Diff organizes LoRA experts along the UNet hierarchy and uses prototype routing plus image-free weight-swap distillation.
   - Current internal manuscript reports five domains, fourteen baselines, three task orderings, and 4.82M trainable parameters. Recheck submission status and result provenance before publication.

4. **On-device expression recognition**
   - A client-facing/industry collaboration involving synthetic data, TinyViT, annotation tooling, and a web demo.
   - Include only as an anonymized one-line experience item unless disclosure permission is confirmed.

### 2.4 Existing reusable visual assets

Preferred portrait candidate:

- `../27fall_hk_phd/paper_latex/TCSVT/zhanhengnie.jpg`

The current portrait is an ID-style photo with a plain white background. It is usable for an initial build but is too formal for a distinctive research homepage.

Preferred project visuals:

- `../27fall_hk_phd/07_PPT/figures/moon1_architecture.png`
- `../27fall_hk_phd/07_PPT/figures/moon2_pipeline.png`
- `../27fall_hk_phd/07_PPT/figures/moon3_pipeline.png`
- `../27fall_hk_phd/07_PPT/figures/tcsvt_architecture.png`
- `../27fall_hk_phd/07_PPT/figures/icxr_architecture.png`
- `../27fall_hk_phd/07_PPT/figures/icxr_qualitative.png`

Original/vector-quality sources also exist under:

- `../27fall_hk_phd/paper_latex/MOON20/Pic/`
- `../27fall_hk_phd/paper_latex/MOON30/samples/`
- `../ICXR/figures/`
- `../TCSVT/TCSVT_paper_revised/`

Avoid `../27fall_hk_phd/07_PPT/figures/ai_generated/` as research evidence. Confirm co-author and publisher permission before republishing paper figures.

### 2.5 Materials that must not be published

- Phone number and non-public personal contact details
- Internal Alibaba repository, storage, model registry, data pipeline, and infrastructure paths
- Internal-only business metrics, especially AUC, CTRi, and RPMi values explicitly marked as non-disclosable
- Unverified cumulative CTR and scale claims
- Raw customer deliverables and face images from `../合作.docx`
- Patent application forms, signatures, agency information, submission packages, logs, and non-public figures
- Reviewer comments, response letters, manuscript IDs, and private submission URLs
- Supervisor targeting notes, application strategy, personal weakness analysis, and contact lists
- Credentials or gateway keys in scripts under `../agent_config/`

## 3. Recommended Information Architecture

### Header

- Name/wordmark
- Research
- Publications
- Experience
- About
- CV
- Theme toggle only if both themes are deliberately designed; otherwise omit it

### Hero

- Name and current role
- One concrete research thesis, not a generic slogan
- Two primary actions: `View research` and `Download CV`
- Scholar and email links
- Portrait or a restrained research-system motif

Suggested hero copy direction:

> I study how multimodal models learn useful representations and keep adapting as data, tasks, and contexts change.

### Research Focus

Use three connected themes rather than a long keyword list:

- Multimodal representation learning
- Continual and adaptive learning
- Efficient mixture architectures

### Selected Research

Use three featured stories:

1. MOON series as the anchor story
2. H-MoMaE / online infinite continual learning
3. HMoLA-Diff / continual personalized generation

Each card needs: research question, contribution, role, status, one visual, and verified links. Do not overload cards with abstract text or unverified benchmark claims.

### Publications

- Chronological list grouped by year
- Clear status labels: Published, Accepted, Under Review, Technical Report
- Equal-contribution markers with a visible legend
- Buttons only where valid: Paper, Project, Code, Data, Poster
- No dead or `Coming soon` buttons in the initial public release; omit unavailable links

### Experience

- Beihang University graduate research
- Alibaba research internship
- Optional anonymized industry collaboration only after authorization

### Recognition

Show a short selection rather than every scholarship. Prioritize awards that clarify academic strength or communication ability.

### About and Contact

- Short first-person bio
- Research collaboration interests
- Academic email, Google Scholar, GitHub, Hugging Face, ORCID when verified
- Downloadable CV

### News

Do not launch with an empty news section. Add it only if at least three dated, verifiable items are available and there is a maintenance commitment.

## 4. Design Direction

### Concept: Adaptive Research Ledger

The visual system should express evolving model routes and connected research threads without turning the page into a neural-network diagram. Use a quiet editorial base with one signature element: a thin adaptive route that changes structure as it passes through the three featured research stories.

This route is meaningful because routing, expert specialization, and continual adaptation recur across the work. It should be the single visual risk; the rest of the page stays disciplined.

### Initial design tokens

- Ink: `#17212B`
- Paper: `#F6F8F7`
- Slate: `#65727D`
- Route blue: `#315E8A`
- Signal orange: `#D86B35`
- Soft sage: `#C9D7CD`

Typography should support English and Chinese without visual mismatch:

- Display: Source Serif 4 or a similarly restrained research/editorial serif
- Body: IBM Plex Sans
- Chinese fallback: Noto Serif SC for display, Noto Sans SC for body
- Utility/data: IBM Plex Mono

Avoid generic glass cards, gradient blobs, oversized metric counters, and decorative network particles.

### Desktop wireframe

```text
+--------------------------------------------------------------+
| ZHANHENG NIE              Research  Publications  About  CV  |
+--------------------------------------------------------------+
| Research thesis, role, links          | portrait / route motif|
| concise supporting statement          |                       |
+---------------- adaptive route -------------------------------+
| Research focus: Representation -> Adaptation -> Generation    |
+--------------------------------------------------------------+
| Selected research story 01: MOON series       [wide visual]   |
| Selected research story 02: H-MoMaE            [visual]       |
| Selected research story 03: HMoLA-Diff         [visual]       |
+--------------------------------------------------------------+
| Publications                                                   |
+--------------------------------------------------------------+
| Experience            | Selected recognition                  |
+--------------------------------------------------------------+
| Short bio, collaboration interests, contact, CV               |
+--------------------------------------------------------------+
```

On mobile, all sections become single-column; figures use cropped previews with an optional full-image viewer. The route motif becomes a vertical progress line and is disabled when reduced motion is requested.

## 5. Technical Recommendation

Use **Astro + TypeScript + plain CSS/custom properties** for the first version.

Reasons:

- The site is content-heavy and mostly static.
- Astro produces minimal client JavaScript and strong SEO by default.
- Publications and projects can live in typed content collections instead of being hard-coded into components.
- It supports later bilingual routes without requiring an application framework.
- Static output can be deployed to GitHub Pages, Cloudflare Pages, or another static host.

Avoid adding a CMS initially. Maintain content in version-controlled YAML/JSON/Markdown. Add a CMS only if updates become frequent or are delegated.

Proposed repository shape:

```text
personal_site/
  PLAN.md
  README.md
  astro.config.mjs
  package.json
  public/
    assets/
      portrait/
      projects/
    cv/
  src/
    components/
    content/
      publications/
      projects/
      news/
    data/
      profile.ts
      experience.ts
      awards.ts
    layouts/
    pages/
      index.astro
      zh/index.astro        # phase 2
    styles/
  tests/
```

## 6. End-to-End Workflow

### Phase 0: Public-disclosure gate

1. Confirm that a personal academic site may mention the Alibaba role and MOON deployment.
2. Confirm which business metrics, internal project names, product imagery, and dataset descriptions may be public.
3. Confirm whether each submitted paper is safe to list during double-blind review.
4. Confirm rights to reuse each selected figure.

Exit criterion: a written allow/omit decision for every potentially sensitive claim and asset.

### Phase 1: Establish a single source of truth

1. Create a canonical profile data file.
2. Reconcile English name, degree wording, institution name, internship team name, and date formatting.
3. Reconcile every publication's title, author order, equal contribution, venue, status, date, and URL.
4. Mark each claim as verified, pending, private, or prohibited.
5. Remove unsupported superlatives and business claims from public copy.

Exit criterion: no homepage fact is sourced from an unreviewed draft or conflicting CV version.

### Phase 2: Content writing

1. Write 40-word and 120-word biographies in English.
2. Write the research thesis and three research-focus descriptions.
3. Write three selected-project summaries at 70-100 words each.
4. Prepare publication metadata and contribution statements.
5. Select 4-6 awards and concise experience entries.
6. Prepare image alt text and link labels.
7. Run a factual, privacy, and tone review.

Exit criterion: complete real copy exists before visual implementation begins.

### Phase 3: Asset preparation

1. Obtain a natural professional portrait.
2. Export approved figures to web-ready SVG or WebP/AVIF.
3. Create consistent project thumbnails rather than placing dense full paper diagrams directly on cards.
4. Remove internal paths, confidential labels, and tiny unreadable text from exports.
5. Generate responsive image sizes and meaningful alt text.
6. Place only approved assets under `personal_site/public/`.

Exit criterion: every public asset has an owner, source, permission status, optimized format, and alt text.

### Phase 4: Low-fidelity structure

1. Build desktop and mobile wireframes with real copy.
2. Test whether the key research identity is clear within the first viewport.
3. Verify that publication statuses and contribution roles are scannable.
4. Remove sections that do not have enough content.

Exit criterion: information hierarchy is approved before styling.

### Phase 5: Visual system

1. Finalize typefaces, color tokens, spacing, grid, and image treatment.
2. Prototype the adaptive route signature in static form first.
3. Add only one coordinated motion sequence if it improves comprehension.
4. Define focus, hover, active, reduced-motion, dark-mode, and print behavior as applicable.

Exit criterion: one reviewed desktop composition and one mobile composition.

### Phase 6: Implementation

1. Initialize Astro and strict TypeScript.
2. Implement semantic landmarks and reusable content components.
3. Add typed publication/project collections.
4. Implement responsive layouts and optimized images.
5. Add SEO metadata, canonical URL, Open Graph image, favicon, sitemap, and structured data (`Person` and `ScholarlyArticle` where valid).
6. Add a privacy-respecting analytics solution only if needed.

Exit criterion: all content comes from canonical data, not duplicated markup.

### Phase 7: Quality assurance

1. Verify all facts and links against primary sources.
2. Test at 320, 375, 768, 1024, 1440, and wide desktop widths.
3. Test keyboard navigation, focus visibility, skip link, headings, and alt text.
4. Test reduced motion, high zoom, color contrast, and screen-reader landmarks.
5. Run formatting, type checks, build, link check, and browser tests.
6. Run Lighthouse and inspect real screenshots on desktop and mobile.
7. Ensure no private file, metadata, key, internal URL, or unpublished artifact is bundled.

Exit criterion: no critical accessibility issue, broken link, console error, overflow, or disclosure violation.

### Phase 8: Deployment

1. Choose domain and hosting.
2. Configure HTTPS, canonical URL, redirects, and cache headers.
3. Connect Search Console/Bing Webmaster Tools if public discoverability is desired.
4. Test production social previews and CV download.
5. Record deployment and update procedures in `README.md`.

Exit criterion: production URL is stable and reproducible from a clean checkout.

### Phase 9: Maintenance

1. Monthly link and status check.
2. Update publication status immediately after acceptance/publication.
3. Quarterly content and dependency review.
4. Annual portrait, bio, CV, awards, and research-direction refresh.
5. Never edit status text in multiple places; update canonical data only.

## 7. Missing Materials

### Required before implementation

- Confirmation of preferred public name: `Zhanheng Nie`, `Zhanheng Nie (聂湛恒)`, or another format
- Approved 40-word and 120-word bios, or permission to draft them
- Final current publication status and official URL for all six works
- Explicit public/private decision for Alibaba role, MOON descriptions, datasets, and any business metrics
- Verified GitHub profile URL
- Verified Hugging Face profile URL and ownership of `ZHNie/MBE2.0`
- Latest public English CV to distribute
- Decision on English-only versus bilingual launch
- Approved list of project figures and reuse rights
- Hosting target and domain name

### Strongly recommended

- Natural professional portrait, ideally landscape and square crops, at least 1600 px on the long side
- ORCID, personal GitHub, and stable project/code URLs
- One-sentence personal research philosophy in the author's own voice
- Three to five dated news items if a News section is desired
- Poster/slides links for accepted presentations, with permission
- Public code licenses and cleaned READMEs for projects intended to be linked
- A custom social-preview image and simple favicon/monogram

### Optional later

- Chinese translations reviewed by the author
- Teaching, service, invited talks, media, or mentoring records
- Short research notes/blog posts
- Citation metadata import automation
- Privacy-friendly analytics

## 8. Immediate Decisions Needed

Answer these before implementation starts:

1. Is the site primarily for Ph.D. applications, academic collaboration, industry recruiting, or all three in that priority order?
2. Should the first release be English-only or bilingual?
3. Which Alibaba and MOON claims have explicit external-disclosure approval?
4. What are the current official statuses of TCSVT and ICXR submissions?
5. Which domain and hosting platform should be used?
6. Should the existing ID photo be used temporarily, or should implementation wait for a new portrait?

## 9. Definition of Done for Version 1

- The first viewport clearly communicates identity, institution, and research thesis.
- Three selected research stories use verified descriptions and approved visuals.
- Every publication has accurate authorship, status, date, and working links.
- No confidential metric, internal path, private submission detail, or credential is shipped.
- Mobile and desktop layouts are intentional, not merely scaled versions of each other.
- Keyboard navigation, reduced motion, semantic headings, contrast, and alt text pass review.
- Production build is fast, indexable, and reproducible.
- Updating a publication requires changing one canonical data record only.
