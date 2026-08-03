# China's agricultural digital infrastructure: discovery scan

Research date: 2026-08-02
Method: fifth bounded discovery cycle, targeting the named China thin cell from the DPI-for-agriculture scan. Scope: China's agricultural digital infrastructure — policy programmes, national data infrastructure, agricultural AI, platform layer, and the data-governance regime. Six query sets plus follow-up verification; key sources read in full (EastFruit on Sinong, Alibaba Cloud ET Agricultural Brain press release, National Basic Science Data Center page, USDA FAS National Smart Agriculture Action Plan report); repository state verified via GitHub API.

## Why this cell

The DPI cycle's "what this does not do" named China as the missing piece of the Asia-Pacific coverage. China matters to this project's central question at the largest possible scale: a state-led agricultural data programme (national big data platform, "All Farmers Code"), a national scientific data infrastructure, state-adjacent open-weight agricultural AI, and a corporate platform layer — with a regulatory data-governance regime unlike any other jurisdiction in the collection.

## Currents

### Current 1 — State-led policy programme
MARA's National Smart Agriculture Action Plan 2024-2028 (per the USDA FAS report and DCZ summary) targets a national agricultural and rural big data platform, a unified "one map" for agricultural and rural land use, foundational model algorithms, data classification standards, a shared data catalog, and the "All Farmers Code" for unified coding of agricultural resources and products. It sits within the broader Digital Village strategy (2019 outline; eight areas incl. rural digital infrastructure and smart agriculture) and guidelines integrating private capital into agricultural digital infrastructure.

### Current 2 — National scientific data infrastructure
China's 20 national scientific data centers, developed on a national science and technology resource-sharing platform across CAS, MARA, MOE, and MIIT institutions; the cross-domain National Basic Science Data Center holds 2.7PB with 23 national standards and open-data portals. Agriculture is a designated domain. Policy framing subordinates individual interest to national interest in scientific data sharing.

### Current 3 — State-adjacent open-weight agricultural AI
Sinong (Nanjing Agricultural University, January 2026): China's first agriculture-specific open-weight LLM, 8B/32B scales on ModelScope and GitHub, trained on a proprietary corpus (~9,000 books, 240,000+ papers, ~20,000 policy documents). Framed in state media as national agricultural AI infrastructure; part of the broader open-weight ecosystem documented by Stanford HAI.

### Current 4 — Closed platform layer
The dominant commercial form: Alibaba Cloud's ET Agricultural Brain (2018) — company-owned AI for pig farming and fruit/vegetable production, with enterprise adopters (Tequ Group, Haisheng) and data flowing into the Alibaba ecosystem. No open layer.

### Current 5 — Data-governance regime
Agricultural data sits inside China's national data-elements regime: the "Twenty Data Measures" (December 2022), data property rights registration, and market-oriented allocation of data elements. Ag-specific governance research (Guo et al. 2025) and the "assetizing, trading, franchising" strategy (Asia Society) frame data as a state-managed economic factor.

## Working matrix

Governance form x what is open x farmer agency. `●●` = well documented; `●` = single strong source; `○` = thin.

| Infrastructure | What is open | Governance | Farmer agency | Evidence |
|---|---|---|---|---|
| Smart Agriculture Action Plan 2024-2028 | planned platforms, "one map", All Farmers Code | state (MARA) | not addressed in plan framing | `●` |
| National scientific data centers | open research-data portals, standards | state (CAS/MARA etc.) | n/a (research data) | `●●` |
| Sinong model | open weights (8B/32B); training data closed | state university | unverified | `●●` |
| ET Agricultural Brain | nothing | company (Alibaba) | none documented | `●` |
| Data-elements regime | data as tradable factor | state | unmeasured | `●` |

Blank cells: no located mechanism opens farmer-level agency or consent in China's ag digital infrastructure; no public documentation of the "All Farmers Code" implementation status was found.

## Cases added by this pass

| Case | Region | Open layer | Governance | Status |
|---|---|---|---|---|
| Sinong (Shennong) | China / global distribution | open weights 8B/32B; proprietary corpus | state university | curated |
| Alibaba ET Agricultural Brain | China | none (closed contrast) | company | candidate |
| National agricultural scientific data infrastructure | China | open research-data portals and standards | state (CAS/MARA etc.) | candidate |

## Contested claims

- **Sinong is "fully open-sourced" (press framing) vs weights-only openness.** Asserting: Xinhua/People's Daily/EastFruit ("fully released as open source"). Contesting: training data is proprietary; the GitHub repository has no SPDX licence detectable via API as of 2026-08-02; "open source" here means downloadable weights on ModelScope/GitHub. Open weights are not open source, not open data, not open training. Last reviewed: 2026-08-02.
- **China's open-weight agricultural AI "contributes to a global agricultural AI ecosystem" (EastFruit framing).** Asserting: east-fruit/state media framing of open-sourcing as a strategic contribution. Contesting: Stanford HAI situates Chinese open-weight models in a state-adjacent strategic ecosystem; JSTOR ("Data, Drones, and Dependency") analyses smart agriculture as reconfiguring sovereignty and technological dependence. Openness claims and strategic positioning are not separable. Last reviewed: 2026-08-02.
- **Agricultural data as an economic factor benefits farmers (data-elements framing).** Asserting: the "Twenty Data Measures" and data property rights registration framing. Contesting: analyses describe the regime as assetizing and trading data with the state as manager; farmer-level benefit and consent are unmeasured. Last reviewed: 2026-08-02.
- **Digital village / smart agriculture policy effectiveness.** Asserting: policy and platform framing (Frontiers 2025 reports measured positive impacts; MARA reports). Contesting: integration of private capital into agricultural digital infrastructure (MDPI 2025) raises capture questions; measured impacts vary by indicator and region. Last reviewed: 2026-08-02.

## Gaps

- **G-CN-01 — Implementation status of the national agricultural and rural big data platform and the "All Farmers Code".** The Action Plan names them; public documentation of implementation status was not located in this pass. Registered as G-OSA-19.
- **G-CN-02 — Farmer agency and consent in China's ag digital infrastructure.** No civil-society counterweight comparable to India's AgriStack critiques exists in the located English-language record; the farmer-agency question from G-OSA-18 is essentially unmeasurable from public sources. Last searched: 2026-08-02.
- **G-CN-03 — Open agricultural datasets and licence terms in the national data-center ecosystem.** The agriculture-domain center's portal, dataset licences, and reuse terms were not read; whether ag science data achieves practical openness is unverified. Last searched: 2026-08-02.

## Actors (critical lens)

- **Nanjing Agricultural University (Sinong)** — state-adjacent open weights; the openness claim needs the most scrutiny.
- **National scientific data centers (CAS CNIC system)** — institutional open-data infrastructure with national-interest framing.
- **Alibaba Cloud (ET Agricultural Brain)** — the closed platform reference.
- **Counterweights, named to position:** MARA (policy programme), state media framing, Stanford HAI and JSTOR critical analyses of the strategic layer.

## Freshness model

- Sinong repository state: `fact` — re-verify annually.
- Action Plan targets: `claim` — re-verify annually; implementation unverified.
- Data-center system structure: `framework` — re-verify every 2 years.
- ET Agricultural Brain status: `claim` — re-verify annually; 2018-era evidence.

## What this scan does not yet do

- **No Chinese-language source work.** All sources are English-language; Chinese government portals, ModelScope model cards, and agronomic literature in Chinese were not read.
- **No licence audit of Sinong's model cards.** The ModelScope card and any custom licence terms were not read (only the GitHub repo was checked).
- **No platform-layer inventory.** JD, Pinduoduo, Huawei, and XAG agricultural platforms were not searched; ET Agricultural Brain stands for the category.
- **No verification of the "All Farmers Code" or the "one map".** Implementation status is unverified (G-CN-01).
- **No farmer-level fieldwork or Chinese civil-society sourcing.** The farmer-agency question (G-CN-02) remains largely unmeasurable from public English sources.

## Sources

- EastFruit on Sinong (read in full): https://east-fruit.com/en/trending/china-launches-its-first-open-source-ai-model-for-agriculture-what-sinong-means-for-the-sector/ ; repo: https://github.com/njauzzx/Sinong
- USDA FAS, "National Smart Agriculture Action Plan Published" (CH2024-0148): https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileName?fileName=National%20Smart%20Agriculture%20Action%20Plan%20Published_Beijing_China%20-%20People%27s%20Republic%20of_CH2024-0148.pdf ; DCZ summary: https://www.dcz-china.org/2024/10/31/china-releases-smart-agriculture-action-plan/
- National Basic Science Data Center (read in full): https://english.cnic.cas.cn/platform/202303/t20230323_328657.html ; Sun et al. 2021: https://www.engineering.org.cn/sscae/EN/10.15302/J-SSCAE-2021.04.002
- Alibaba Cloud ET Agricultural Brain (read in full): https://www.alibabacloud.com/en/press-room/alibaba-cloud-launches-et-agricultural-brain-at-the-shanghai-computing
- Digital village: Frontiers 2025: https://www.frontiersin.org/journals/sustainable-food-systems/articles/10.3389/fsufs.2025.1650488/full ; FAO policy brief: https://openknowledge.fao.org/bitstreams/3df9b7a5-1f6f-4f00-b8df-bd1e0271b8dd/download
- Data regime: ICAS: https://chinaus-icas.org/research/chinas-data-governance-and-cybersecurity-regime/ ; Asia Society: https://asiasociety.org/policy-institute/assetizing-trading-franchising-chinas-strategy-building-national-data-economy
- Critical analysis: JSTOR "Data, Drones, and Dependency": https://www.jstor.org/stable/27489143 ; Stanford HAI: https://hai.stanford.edu/policy/beyond-deepseek-chinas-diverse-open-weight-ai-ecosystem-and-its-policy-implications

Not legal advice.
