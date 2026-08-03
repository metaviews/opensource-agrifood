# Local-language verification pass: G-GS-05 across five languages and G-OSA-19 implementation status

Research date: 2026-08-03
Method: bounded local-language cycle targeting (a) G-GS-05 — whether the confirmed absence of farmer-led, explicitly licensed open hardware in the Global South is an English-language artifact — and (b) G-OSA-19 — China's agricultural digital infrastructure implementation status. Ten query sets in Spanish, Portuguese, French, Hindi, and Chinese; sources read in full: National Smart Agriculture Action Plan 2024-2028 (full text, 农市发[2024]4号, via tzxm.gov.cn), MARA interpretation (scs.moa.gov.cn), Digital Agriculture and Rural Development Plan 2019-2025 (FAOLEX), chaojima.com company page (All Farmers Code co-developer), Chierchie & Fressoli 2025 (Revista 180/SciELO), Chance & Meyer 2017 (Techniques & Culture 67), OS Farm France 2030 synthesis deck, 孙姗 2024 (agricultural data rights paper), National Data Administration press conference (May 2025). Verification tools: GitHub API (Ekylibre), HTTP liveness (osfarm.org, ekylibre.com, chaojima.com). Three records added (Ekylibre curated; OS Farm candidate; All Farmers Code candidate); one lead recorded (zhihu tractor maker, evidence gap).

## Why this cell

The register named two local-language targets: G-GS-05's confirmed-absence finding was English-language only ("the 'absent' finding is an English-language finding"), and G-OSA-19's implementation status was absent from the English-language record ("public documentation of implementation is absent"). Both hypotheses are now tested with queries written in the target languages.

## Headline finding

**Both gaps move, and neither resolves the way the English-language record suggested.** (1) G-GS-05's absence is NOT an English-language artifact: no farmer-led, explicitly licensed, maintained open-hardware project with public design files was found in Spanish, Portuguese, French, Hindi, or Chinese either — but the pass refines the landscape into four new shapes: Argentine research-led open design (Chierchie & Fressoli 2025, UNSAM/CONICET — the same institution as Bioleft), Brazilian social-technology distribution (the Tecnologia Social movement, PAIS again the boundary), a Chinese maker-media lead (a physics PhD publishing full tractor drawings — zhihu article, headline-level evidence only), and Hindi-language extension material circulating the open-source-seed-licence concept. (2) G-OSA-19 is now partially resolved from Chinese primary sources: the Action Plan's full text (2024-10-23) carries dated implementation milestones (2025 data standards; end-2026 foundation-model library; end-2028 national big-data platform complete with ≥32% production informatization rate), the All Farmers Code (全农码) is operationally evidenced (launched 2023 by MARA's Big Data Development Center with a private co-developer/operator, company-reported 700M+ cumulative uses across 14 provincial and 101 local applications), and Zhejiang is the live pilot (浙农码-全农码 linkage, 1000+ digital factories and 100 future farms targeted by 2028). The pass also surfaced Ekylibre — an active AGPL-3.0 open-source farm management system (487 stars, pushed 2026-07-26) — and OS Farm, a France 2030-funded "100% open source" agritech interoperability consortium.

## Currents

### Current 1 — China: plan-to-implementation is now documented (G-OSA-19 partially resolved)

The National Smart Agriculture Action Plan (全国智慧农业行动计划 2024-2028, 农市发[2024]4号, issued 2024-10-23) specifies 3 actions and 8 tasks with dated milestones: 2025 — data-management systems and standards basically established; end-2026 — agricultural foundation-model and algorithm open platform plus model library basically built; end-2028 — national agricultural and rural big-data platform functionally complete, production informatization rate ≥32%, 20+ foundation-model algorithms/general tools in use. Zhejiang is the designated pilot (浙农码↔全农码 linkage, 1000+ digital factories, 100 future farms by 2028, "Fuxi Farm" exploration). The All Farmers Code (全农码) platform is operationally evidenced: launched 2023, developed by MARA's Big Data Development Center under a joint-lab agreement (2022) with private company Zhejiang Oracle Supercode Technology (chaojima), which describes itself as co-developer and operator. Company-reported scale: 14 provincial applications, 101 local applications, 360+ agricultural services, 700M+ cumulative code uses, 20M+ mu of farmland served, 12,000+ modern farms. The data-elements regime is operationalizing in agriculture (National Data Administration "Data Elements x" press conference, May 2025: data-enabled fertilization +5.5% yield, marine-ranch biomass +5.3x). Governance twist: the "national" digital-identity platform is co-produced and operated by a private tech company under a MARA joint lab — state-private co-production with self-reported usage claims and no located farmer-facing benefit measurement (G-CN-02 persists).

### Current 2 — G-GS-05 across languages: absence robust, landscape refined

No farmer-led licensed hardware in any of the five languages. The refined shapes: (a) Spanish — Argentine research-led open design: Chierchie & Fressoli (2025, Revista 180) analyze two Argentine open-design cases (a small-scale milk pasteurizer; packaging for agroecological horticulture) across technical/access/IP/documentation dimensions, arguing open design as a participatory path; UNSAM/CONICET — the same institution as Bioleft, extending the Argentine open-agroecology research current (REGOSH). (b) Portuguese — the Tecnologia Social movement (UFBA thesis analyzing PAIS as social technology; CONTAG/Conab fairs) produces institutional and commercial distribution, not explicitly licensed open designs — the PAIS boundary case holds. (c) Chinese — a maker-media lead: a physics PhD who hand-built a tractor and published all design drawings, positioned against proprietary machinery (zhihu article; page not extractable — G-LL-01), plus academic open-hardware teaching platforms (DONG 2023) and the AgOpenGPS ecosystem reaching Chinese-language audiences (u-blox zh blog; translated DIY autosteer builds). (d) Hindi — no hardware; the open-source-seed-licence concept circulates in Hindi extension material (MANAGE natural-farming study guide mentions  खुला स्रोत बीज लाइसेंस).

### Current 3 — The French institutional open-agritech current

Two findings beyond L'Atelier Paysan (already in the collection): Ekylibre — an open-source FMIS (AGPL-3.0, created 2011, 487 stars, 170 forks, pushed 2026-07-26, not archived), French-origin, documented in the academic literature (Chance & Meyer 2017, "L'agriculture libre", Techniques & Culture 67, cited 24, analyzing Ekylibre and L'Atelier Paysan as two materializations of open source in agriculture); and OS Farm — a France 2030 (AAP) consortium of 6 companies and 2 research labs proposing a "100% open source" agritech interoperability standard (API protocol, hardware component protocol, gateway, pilot-farm tests, OS Farm labelling protocol, central resource platform), built on AgOpenGPS + Centipède RTK + Ekylibre, with a franchise/subscription business model (12,500-34,000€ setup; 3,500-9,500€/yr) and claims of 5-15% fuel reduction and equipment life extended from 10 to 30 years. OS Farm is the French state's answer to the same problem OADA addressed in the US — an open interoperability standard for farm equipment — but company-consortium-led and paid-services-based.

### Current 4 — The maker-media and extension layer (leads and signals)

The local-language pass's least-documented but most suggestive findings: the Chinese maker-media current (zhihu as the distribution channel for "challenge the monopoly" open-design narratives — headline-level evidence only), and the Hindi extension layer (open-seed-licence concept present in government extension material — evidence the OSSL concept has reached non-English extension discourse). Both are leads, not verified records.

## Working matrix

Language x what was found x farmer-led x explicitly licensed x status. `●` = located; `—` = not located.

| Language | Open ag tech content found | Farmer-led | Licensed (explicit) | Status |
|---|---|---|---|---|
| Spanish | Chierchie & Fressoli 2025 (open design analysis, Argentina); FONTAGRO digitalization report | research-led `—` | CC BY-SA (papers) `—` | academic current |
| Portuguese | Tecnologia Social movement (PAIS, CONTAG/Conab fairs); UFBA thesis | institutional `—` | `—` | distribution, not design commons |
| French | OS Farm (France 2030); Ekylibre; L'agriculture libre (Chance & Meyer 2017); L'Atelier Paysan (existing) | consortium/coop `—` | AGPL (Ekylibre); OS Farm "100% open source" claim | active software; consortium status unverified |
| Hindi | MANAGE extension material (OSSL concept) | `—` | `—` | extension discourse only |
| Chinese | zhihu tractor-maker lead (G-LL-01); academic OSH teaching platforms; AgOpenGPS zh community | maker-media (unverified) | unverified | leads |

## Contested claims

- **"The All Farmers Code is a national platform serving farmers" (company/MARA framing).** Asserting: chaojima company page (14 provincial, 101 local applications, 360+ services, 700M+ uses, 20M+ mu, 12,000+ farms); MARA Action Plan. Contesting: all scale figures are company self-reported; the platform is co-developed and operated by a private company under a MARA joint-lab agreement; farmer-facing benefit and consent are unmeasured (G-CN-02). Last reviewed: 2026-08-03.
- **"OS Farm is 100% open source" (2023 France 2030 deck).** Asserting: OS Farm synthesis deck. Contesting: the deck itself is marked "Confidentiel"; the business model is franchise + subscription (12.5-34k€ setup); "open source" attaches to the interoperability standard and resource platform, while deployment is commercial; post-2023 operational status unverified. Open-core with paid services, French state-funded. Last reviewed: 2026-08-03.
- **"The Global South open-hardware absence is an English-language artifact" (prior hypothesis).** Asserting: the original G-GS-05 finding was English-language only. Contesting: this pass — absence robust across Spanish, Portuguese, French, Hindi, and Chinese; refined shapes are research-led, institutional, or maker-media, none farmer-led licensed. Hypothesis rejected; the finding stands. Last reviewed: 2026-08-03.
- **"A physics PhD published complete tractor drawings challenging machinery monopolies" (zhihu headline).** Asserting: zhihu article title/search index. Contesting: page not extractable in this pass; the maker's identity, farmer status, licence, and design-file location are unverified. Headline-level lead only (G-LL-01). Last reviewed: 2026-08-03.

## Gaps

- **G-LL-01 — Chinese maker-media open-design cases (zhihu tractor).** Identity, licence, design-file location, and farmer status unverified; zhihu articles are JS-walled and were not readable. Plausibility: high that similar maker-media cases exist (zhihu is the distribution channel). Searched: zhihu, general web. Last searched: 2026-08-03.
- **G-LL-02 — OS Farm post-2023 operational status.** Site live (2026-08-03); the 2023 deck documents the proposal; pilot-farm results, labelling-protocol use, and consortium deployment unverified. Last searched: 2026-08-03.
- **G-LL-03 — All Farmers Code platform openness.** API access, licences, data-governance terms, and independent verification of usage figures unverified; company-reported only. Maps to G-OSA-19 residual and G-CN-03. Last searched: 2026-08-03.
- Residual of G-OSA-19: progress against the end-2026 foundation-model-library milestone is pending as of the research date; farmer agency unaddressed (G-CN-02).

## Actors (critical lens)

- **MARA Big Data Development Center + chaojima (Zhejiang Oracle Supercode)** — the state-private co-production at the heart of China's ag digital identity layer; the private operator's self-reported scale is the load-bearing evidence.
- **UNSAM/CONICET (Chierchie, Fressoli)** — the Argentine research current on open design in agriculture; Bioleft's institution, extending the REGOSH/Bioleft ecosystem.
- **OS Farm consortium** — the France 2030 open-agritech interoperability experiment; the French state answer to the OADA problem.
- **Ekylibre** — the active French-origin open-source FMIS; a software-layer case the collection was missing.
- **Counterweights, named to position:** chaojima's marketing framing (state-adjacent vendor), the proprietary ag machinery incumbents OS Farm and the zhihu maker both position against, PAIS/Sebrae/Livelihoods (the social-technology distribution boundary, again).

## Freshness model

- Action Plan text and milestones: `fact` (2024-10-23, primary) — re-verify annually against milestone progress.
- All Farmers Code usage figures: `claim` — company self-reported; re-verify annually, prefer independent sources.
- Ekylibre repository state: `fact` — re-verify annually.
- OS Farm status: `claim` — verify before promotion from candidate.
- Chierchie & Fressoli 2025: `framework` — re-verify every 2 years.
- zhihu tractor-maker case: `gap` — actively sought, not verified.

## What this pass does not yet do

- **No Chinese government portal-level verification.** MARA portals, ModelScope model cards, and platform APIs were not accessed; implementation evidence rests on the plan text, the private operator's page, and secondary Chinese sources.
- **No WeChat / Douyin search.** The actual maker-media substrate in China is WeChat official accounts and short video; the zhihu lead is the visible fraction.
- **No francophone West Africa pass.** French-language coverage of farm-level open hardware in Senegal, Burkina Faso, or Mali was not systematically searched beyond the general French queries.
- **No Brazilian maker-community search.** Instructables PT, Embrapa open tools, and maker fairs were not searched in depth.
- **No Hindi YouTube search.** YouTube is the main Hindi-language agricultural content channel; not searched.
- **No licence census for the located shapes.** The Argentine pasteurizer/packaging designs and the Chinese maker designs were not audited for explicit licences (G-OSA-13 scope).

## Sources

- National Smart Agriculture Action Plan 2024-2028 (full text, 农市发[2024]4号): https://new.tzxm.gov.cn/zckd/fzgh/202410/t20241031_1394151.shtml ; MARA interpretation: https://scs.moa.gov.cn/zcjd/202410/t20241028_6465095.htm ; Baidu Baike: https://baike.baidu.com/item/全国智慧农业行动计划（2024—2028年）/65039097
- Digital Agriculture and Rural Development Plan 2019-2025 (FAOLEX): https://faolex.fao.org/docs/pdf/chn193207C.pdf
- chaojima (All Farmers Code co-developer/operator): https://www.chaojima.com/appH5/aboutUs.html ; 孙姗 2024 (全农码 platform, 2023): http://www.d1ae.com/cn/article/pdf/preview/10.19998/j.cnki.2095-1795.2024.04.005.pdf
- National Data Administration "Data Elements x" press conference (2025-05-29): https://www.nda.gov.cn/sjj/swdt/xwfb/0529/20250529231654702250601_pc.html
- Chierchie & Fressoli (2025), "Tecnologías agrícolas abiertas", Revista 180 56: https://www.scielo.cl/scielo.php?pid=S0718-669X2025000200048&script=sci_arttext&tlng=es ; companion paper (SciELO Argentina): https://www.scielo.org.ar/scielo.php?pid=S1853-35232025000400047&script=sci_arttext&tlng=es
- Chance & Meyer (2017), "L'agriculture libre", Techniques & Culture 67: https://journals.openedition.org/tc/8511
- OS Farm France 2030 synthesis: https://www.osfarm.org/docs/osfarm_fr.pdf ; site: https://www.osfarm.org/
- Ekylibre: https://github.com/ekylibre/ekylibre (API-verified 2026-08-03)
- zhihu tractor-maker lead: https://zhuanlan.zhihu.com/p/1964757189815154218 (headline-level; page not extractable)
- MANAGE Hindi natural-farming study material (OSSL mention): https://www.manage.gov.in/NaturalFarming/Files/TranslatedMaterial/Hindi.pdf
- UFBA thesis on PAIS as social technology: https://repositorio.ufba.br/ri/bitstream/ri/17599/1/Souza%2C%20Edirlan%20Miranda%20de%20Oliveira.pdf

Not legal advice.
