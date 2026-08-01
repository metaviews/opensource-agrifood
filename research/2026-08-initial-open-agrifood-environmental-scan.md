# Initial environmental scan: open agrifood infrastructure

Research date: 2026-08-01

Status: first working scan following the transfer map and initial source-grounded dossier.

## Purpose and scope

This scan establishes a first independent view of open agrifood infrastructure. It does not attempt a complete inventory or a literature review. It tests whether the field guide's layered framing survives contact with current original sources, identifies the strongest currents, and records where evidence remains thin.

The Agrifood AI Field Guide is used as a discovery and comparative research base: https://agrifood.metaviews.ca/. Claims in this scan are narrowed to the original sources listed below wherever possible.

The scan covers:

- open software and field infrastructure;
- open data and language datasets;
- interoperability standards;
- farmer-controlled data governance;
- biological commons and seed licensing;
- international and multilateral public-interest infrastructure;
- maintenance, adoption, and value capture.

## Executive finding

The first source pass supports a layered rather than singular meaning of “open” in agrifood. OADA is an open standards and software project; JoinData is a farmer-permission and data-governance platform; Common Voice is community-led language-data infrastructure; OSSI is a biological-commons licensing initiative; GODAN is an open-data coordination body; ODK is open field-data software; and CGIAR / AgriLLM now has a publicly released agriculture model artifact, while the completeness and terms of its wider open-building-block stack remain to be verified.

The central pattern is not simply “open tools exist.” It is that different projects address different control points: access to data, interoperability, language representation, biological reproduction, field data collection, institutional coordination, or model development. The central unresolved issue is whether these open layers connect into durable systems that farmers and communities can govern, maintain, and leave.

## Currents in the field

### 1. Open interoperability and data agency

OADA frames agricultural data problems as incompatible walled gardens, weak privacy, uncertain ownership, and vendor lock-in. Its proposed response is open standards, secure exchange protocols, farmer data ownership, public technical discussion, and distributed rather than centralized infrastructure.

JoinData addresses a related problem through permissions and farmer-facing control. Its current public materials emphasize visibility into who can access data, purpose-bound authorisation, revocation, encryption, and putting the farmer “behind the wheel.”

These are complementary rather than identical currents. OADA addresses technical exchange; JoinData addresses institutional permission and control. Neither source pass establishes that open standards or permission systems have achieved broad adoption across agriculture.

### 2. Open community data for language and access

Mozilla Common Voice describes a free, open-source platform for community-led creation, validation, and curation of speech and text datasets. Its current site reports 290 languages and growing, with scripted speech, spontaneous speech, and language-text contributions.

This is important agrifood infrastructure because agricultural advice and data systems often fail at language, literacy, connectivity, and cultural fit. However, Common Voice is not itself an agrifood deployment. The agricultural relevance is an infrastructure hypothesis until specific extension, farm, or food-system applications are documented.

### 3. Biological commons and non-software openness

OSSI uses a seed pledge rather than a software licence. The pledge preserves the freedom to use OSSI-pledged seeds and derivatives while requiring recipients not to restrict others’ use and to pass the pledge along with transfers. OSSI’s current homepage reports more than 550 pledged varieties, 52 plant breeders, and 78 seed-company partners.

This is a substantive open agrifood current, but it must not be collapsed into software open source. Biological reproduction, plant-breeding rights, seed transfer, patents, traditional knowledge, and ecological stewardship create different legal and governance conditions.

### 4. Open field infrastructure and public-interest coordination

ODK is an open-source data-collection platform designed for field use, including offline operation. Its agrifood importance lies in enabling surveys, monitoring, extension, crop tracking, and research. The first pass confirms the platform’s current existence but leaves the field-guide’s named agrifood deployments for claim-level verification.

GODAN currently presents itself as an international open-data and food-systems coordination initiative. Its current site frames open data alongside youth-led innovation, inclusive digital infrastructure, and sustainable food systems. The present framing is clear; historical impact and current measurable outputs require more careful verification.

### 5. Multilateral AI and the unresolved meaning of “open”

CGIAR provides a major institutional anchor for smallholder-oriented agricultural AI. CGIAR documents AgriLLM as a project involving local-language, voice, low-bandwidth, and farmer-informed approaches. AI71 has now published a downloadable `Llama-agrillm-3.3-70B` model artifact on Hugging Face, and the FAO STI Portal independently describes AgriLLM as open source. The exact release status and reuse terms for the supervised Q&A data, evaluation benchmark, document corpus, and any code remain to be established.

This remains a key boundary case: public-interest, multilateral, accessible, or open-data work is not automatically an open-source AI stack. Here, one model artifact is now verified as public; asset-level openness across the whole initiative still must be documented.

## Activity matrix

| Layer / current | OADA | JoinData | Common Voice | OSSI | GODAN | ODK | CGIAR / AgriLLM |
|---|---:|---:|---:|---:|---:|---:|---:|
| Open software / code | ●● | — | ● | — | ○ | ●● | ○ |
| Models / weights | — | — | — | — | — | — | ● |
| Data infrastructure | ● | ●● | ●● | — | ●● | ● | ● |
| Standards / protocols | ●● | ○ | ○ | — | ● | ○ | ○ |
| Governance / commons | ● | ●● | ● | ●● | ● | ○ | ● |
| Biological commons | — | — | — | ●● | — | — | — |
| Current agrifood deployment evidence | ○ | ● | ○ | ● | ○ | ● | ● |
| Maintenance / funding evidence | ○ | ● | ○ | ● | ○ | ○ | ○ |

Legend: `●●` substantial evidence in the current source pass; `●` moderate or current project evidence; `○` emerging, indirect, dated, or unresolved; `—` not the case’s primary layer or no evidence found. A blank cell is a research gap, not evidence of absence.

## Geographic and institutional pattern

The first set is institutionally broad but geographically uneven:

- North American and international civil-society infrastructure: OADA, Mozilla Common Voice, OSSI, ODK.
- European farmer-data governance: JoinData in the Netherlands.
- International coordination: GODAN.
- Multilateral agricultural research and Global South orientation: CGIAR / AgriLLM.
- African agrifood deployment evidence is present in the field-guide leads, especially for ODK, local-language voice, CGIAR, and seed-sovereignty work, but the current pass has not yet verified enough original deployment records to support a balanced regional comparison.

A major finding is therefore methodological: the field guide provides many African leads, but a source-grounded Open Source Agrifood scan must verify each case rather than inherit regional scale claims from the intermediary.

## Gaps

### G-OSA-01 — OADA adoption

OADA’s principles and technical intent are well documented. The public GitHub organisation shows current activity in a reference server, formats, and related tooling, while the original API-spec repository is archived. Current compliant vendors, independent deployments, and real farmer use remain unclear.

### G-OSA-02 — JoinData current scale

The current platform and permission model are documented. Historical membership and operating figures need current verification before being reused as 2026 statistics.

### G-OSA-03 — Common Voice agrifood applications

The open language infrastructure is current and substantial. Specific agricultural uses, languages, model integrations, and outcomes remain to be documented.

### G-OSA-04 — OSSI geographic reach and farmer use

Current pledge, breeder, and partner counts are available. Geographic distribution, farmer adoption, and African deployment require independent evidence.

### G-OSA-05 — GODAN outputs and sustainability

The current public framing is clear, but current institutional structure, funding, measurable outputs, and active data assets need further verification.

### G-OSA-06 — ODK agrifood deployment inventory

Named cases exist in the field-guide substrate. The original programme reports and papers need to be gathered and coded individually for country, user, data governance, licence, and outcome.

### G-OSA-07 — AgriLLM asset-level openness

A public model artifact and open-building-block intention are now verified. The release status, licensing, and reuse terms of the Q&A data, evaluation benchmark, document corpus, and code remain unresolved.

### G-OSA-08 — Maintenance and value capture

The initial sources describe missions and current initiatives more clearly than they describe long-term maintenance, contributor retention, service revenue, or value distribution.

## Contested claims

### C-OSA-01 — “Open standards solve vendor lock-in.”

OADA provides a credible theory of change: open APIs and portable data can enable choice. The counterclaim is that standards without adoption, usable export, governance, or switching support do not alter practical lock-in. This remains unresolved.

### C-OSA-02 — “Open data creates farmer benefit.”

Open data can support research, innovation, and services. It can also shift value toward intermediaries if permission, consent, benefit-sharing, and governance are weak. JoinData makes the control question visible; GODAN provides the coordination frame. The benefit claim remains conditional.

### C-OSA-03 — “Public-interest agricultural AI is open AI.”

CGIAR / AgriLLM may produce public-interest infrastructure and accessible tools. That does not establish open code, open weights, or open training data. The claim should remain unmade until asset-level evidence is found.

### C-OSA-04 — “Open seed and open software are the same licensing problem.”

Both preserve downstream freedoms, but the underlying assets and legal regimes differ. OSSI should be analysed as a biological commons and pledge system, not treated as a direct software-licence analogue.

## Actor map

### Technical and standards actors

- Open Ag Data Alliance: open interoperability and farmer data access.
- Open Data Kit: open field data collection and offline infrastructure.
- Mozilla Common Voice: community-led speech and language data.

### Cooperative and commons actors

- JoinData: farmer permission and data-sharing infrastructure.
- Open Source Seed Initiative: seed commons and non-restrictive pledge.
- Farmer, breeder, and community organisations: require expansion beyond the current named exemplars.

### Institutional and multilateral actors

- GODAN: open agricultural data coordination.
- CGIAR: agricultural research, FAIR and responsible-data infrastructure, and AI deployment leads.
- FAO, national agricultural systems, and development partners: require case-specific evidence rather than generic institutional attribution.

### Critical and missing voices

The current scan is still weak on farmer organisations, Indigenous governance authorities, women-led organisations, labour, local-language practitioners, and communities affected by data extraction. These should be added before the project makes broad claims about sovereignty or benefit.

## Freshness-tagged sources

| Source | Claim type | Freshness | Last checked |
|---|---|---|---|
| OADA Principles | framework / example | annual for project status; two years for framework | 2026-08-01 |
| JoinData current site | current platform / governance | annual | 2026-08-01 |
| Development Gateway / USAID JoinData case | historical statistic / case | annual if figures reused | 2026-08-01 |
| Mozilla Common Voice | current platform / example | annual | 2026-08-01 |
| OSSI homepage | current figures / pledge | annual | 2026-08-01 |
| GODAN 2.0 | current institutional framework | annual | 2026-08-01 |
| ODK official site | current software / example | annual | 2026-08-01 |
| CGIAR official site and AI partnership material | institutional claim / project lead | annual | 2026-08-01 |
| Agrifood AI Field Guide | comparative synthesis / research lead | annual for inherited claims | 2026-08-01 |

## What this scan does not yet do

- It is not a complete global inventory.
- It does not establish current adoption, farmer impact, or financial sustainability for every case.
- It does not verify every licence, repository, dataset, model, or deployment claim inherited as a lead from the field guide.
- It does not yet provide adequate regional, Indigenous, farmer-led, or gender-balanced coverage.
- It does not make event-programming or event-planning recommendations.

## Next scan priorities

1. Verify OADA implementation and adoption evidence beyond repository activity.
2. Retrieve direct AgriLLM dataset, benchmark, document-corpus, code, and licence evidence.
3. Verify ODK agrifood deployments against original papers and programme records.
4. Find specific Common Voice agricultural applications.
5. Map maintenance and funding arrangements across the seven cases.
6. Add farmer-led, Indigenous, African, Latin American, and Asian cases using original sources.

## Sources

- OADA Principles: https://openag.io/principles/
- OADA: https://openag.io/
- OADA GitHub organisation: https://github.com/OADA
- OADA API specification archive: https://github.com/OADA/oada-api-spec
- JoinData: https://join-data.nl/en/
- JoinData About: https://join-data.nl/en/about-joindata/
- Development Gateway / USAID JoinData case study: https://developmentgateway.org/wp-content/uploads/2023/02/Agricultural-Data_CaseStudy_Feb2023.pdf
- Mozilla Common Voice: https://commonvoice.mozilla.org/
- Mozilla Data Collective: https://mozilladatacollective.com/
- Open Source Seed Initiative: https://osseeds.org/
- GODAN 2.0: https://www.godan.info/
- Open Data Kit: https://getodk.org/
- CGIAR: https://www.cgiar.org/
- CGIAR AI partnership search result: https://www.cgiar.org/news-events/news/partnerships-powering-ai-advances-agriculture
- CGIAR AgriLLM announcement: https://www.cgiar.org/news-events/news/agrillm-how-cgiar-is-developing-an-ai-powered-agricultural-advisory-service-for-global-south
- AI71 AgriLLM model card: https://huggingface.co/AI71ai/Llama-agrillm-3.3-70B
- FAO STI AgriLLM record: https://sti-portal.fao.org/innovations/agrillm-open-source-large-language-model-grounded-cgiar-knowledge-deliver-accurate-and
- Agrifood AI Field Guide: https://agrifood.metaviews.ca/

Attribution: This scan was informed by CC BY 4.0 material from the Agrifood AI Field Guide, but it is an independent Open Source Agrifood document with claims narrowed to the sources above where possible.

Not legal advice.
