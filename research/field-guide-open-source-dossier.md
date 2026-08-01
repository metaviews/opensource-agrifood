# Open Source Agrifood: curated research dossier

Research date: 2026-08-01

Status: initial transfer from the Agrifood AI Field Guide into an independent, source-grounded Open Source Agrifood research base.

The Agrifood AI Field Guide remains a useful adjacent research base and discovery layer: https://agrifood.metaviews.ca/. This dossier does not copy the field guide wholesale. It selects cases, re-anchors them in original sources, separates open layers, and records what still needs verification.

## How to read this dossier

“Open” is not one condition. Each case is classified across distinct layers:

- software and code;
- models or weights;
- datasets and data infrastructure;
- standards and protocols;
- governance and commons institutions;
- biological materials and seed systems;
- public or multilateral infrastructure.

A project can be open at one layer and closed at another. A public description is not evidence of adoption scale, impact, financial sustainability, or farmer control unless the cited source establishes that claim.

## 1. Open interoperability standards: OADA

### What it is

The Open Ag Data Alliance (OADA) is an open standards software effort focused on secure data exchange, privacy, interoperability, and farmer access to agricultural data. OADA explicitly frames the farmer as owning data generated or entered by the farmer, employees, or farm machinery. It is a standards and software project, not a cooperative, certification body, vendor, or data repository.

### What is open

- open standards and API specifications;
- open reference implementations and technical community participation;
- a public RAML API specification and GitHub project;
- a verification-suite concept for testing implementation compliance.

### Agrifood relevance

OADA addresses the infrastructure layer beneath farm applications: incompatible systems, walled gardens, data access, privacy, and vendor lock-in. Its distributed model is a useful contrast with centralized vendor platforms.

### Evidence and limits

The OADA Principles page describes the mission, governance intent, farmer-data principle, API approach, and intended verification mechanisms. The current GitHub organisation shows a public reference server, client, formats, certificates, and CLI. The reference server repository was updated on 2026-08-01, while the original `oada-api-spec` repository is archived and its draft specification is old. This suggests a live implementation layer alongside a stale historical specification layer; it does not establish broad vendor adoption or farmer use.

- Original sources: https://openag.io/principles/ ; https://openag.io/ ; https://github.com/OADA ; https://github.com/OADA/oada-api-spec
- Open layer: standards, software, interoperability
- Operating model: non-commercial open project / standards community
- Verification: `verified-primary` for mission and public repositories; adoption scale `stale-or-uncertain`
- Field-guide context: `units/oada-open-ag-data-alliance.md`

## 2. Farmer-controlled data sharing: JoinData

### What it is

JoinData presents itself as an independent platform through which farmers can see who may access their data, approve or revoke permissions, and share agricultural data under agreed purposes. Its public materials emphasize putting the farmer “behind the wheel,” with encrypted data and permission-based access.

### What is open or commons-oriented

JoinData is not an open-source software case in the same sense as OADA. Its relevance is institutional: farmer-controlled data sharing, cooperative governance, permission management, and a non-profit operating model. It should therefore be classified as a data-governance and commons case, not collapsed into software openness.

### Agrifood relevance

JoinData is a concrete example of an operational response to platform fragmentation and opaque data permissions. The field-guide case study reports 16,000+ farmer members and a fee model, but those figures require current verification before reuse as present-day statistics.

### Evidence and limits

The current JoinData site supports the permission-control and farmer-governance claims. The 2023 Development Gateway / USAID case study supports the historical membership and operating-model claims. Neither should automatically be treated as current 2026 scale.

- Original sources: https://join-data.nl/en/ ; https://join-data.nl/en/about-joindata/ ; https://developmentgateway.org/wp-content/uploads/2023/02/Agricultural-Data_CaseStudy_Feb2023.pdf
- Open layer: governance, data rights, cooperative infrastructure
- Operating model: independent platform / cooperative-oriented non-profit
- Verification: `verified-primary` for current mission and permissions; `verified-independent` for 2023 case-study figures; current scale `stale-or-uncertain`
- Field-guide context: `units/joindata-netherlands.md`

## 3. Community-led language data: Mozilla Common Voice

### What it is

Mozilla Common Voice describes itself as a free, open-source platform for community-led data creation. Participants can create, validate, and curate text and speech datasets. The current public site reports 290 languages and growing, with scripted speech, spontaneous speech, and language-text contributions.

### What is open

- community contribution and curation infrastructure;
- publicly accessible speech and language datasets;
- a platform designed to support multilingual and underrepresented languages;
- open participation rather than a proprietary data-collection pipeline.

The dataset’s exact licence and release-specific composition should be verified from the relevant dataset release before making licensing or volume claims. The public homepage establishes the platform’s purpose and current language count, not agrifood deployment scale.

### Agrifood relevance

Common Voice is an upstream language and voice-data substrate for agricultural extension, voice-first interfaces, local-language advisory, and low-literacy access. It is not itself an agrifood deployment. Any claim connecting it to agriculture requires a separate application or deployment source.

### Evidence and limits

The current source supports community-led, open, multilingual dataset claims. It does not establish that Common Voice is being used in a specific agrifood system, nor that a given language dataset is suitable for a particular agricultural model.

- Original sources: https://commonvoice.mozilla.org/ ; https://mozilladatacollective.com/
- Open layer: datasets, language infrastructure, community governance
- Operating model: foundation-supported open community
- Verification: `verified-primary` for platform claims; agrifood use `field-guide-lead` until application-level sources are collected
- Field-guide context: `units/mozilla-common-voice-african-languages.md`

## 4. Open-source seed governance: Open Source Seed Initiative

### What it is

The Open Source Seed Initiative (OSSI) uses a pledge for seeds: recipients retain freedom to use OSSI-pledged seeds and derivatives, while agreeing not to restrict others’ use through patents or other means and to pass the pledge along with transfers.

### What is open

- rights to use, save, replant, share, and breed with pledged materials, subject to the pledge’s terms;
- a legal and institutional mechanism intended to keep genetic resources from being locked away;
- a community of breeders, farmers, seed companies, and other participants.

This is a biological-commons and licensing case, not software open source. Its legal structure should be analysed on its own terms.

### Agrifood relevance

OSSI directly addresses concentration in commercial breeding and restrictive intellectual-property arrangements. It connects openness to seed sovereignty, breeding access, biodiversity, and farmer agency.

### Evidence and limits

OSSI’s current homepage reports more than 550 pledged varieties, 52 plant breeders, and 78 seed-company partners. These are current public claims and should be date-stamped whenever used. They do not by themselves establish geographic distribution, farmer adoption, or outcomes in Africa or other regions.

- Original source: https://osseeds.org/
- Open layer: biological materials, licensing, seed commons
- Operating model: non-profit initiative with breeder and seed-company partners
- Verification: `verified-primary` for pledge and current homepage figures; geographic deployment `field-guide-lead` until independently checked
- Field-guide context: `units/open-source-seed-initiative-africa.md`

## 5. International open agricultural data coordination: GODAN

### What it is

GODAN presents itself as Global Open Data for Agriculture and Nutrition and currently frames its work around transforming food systems through open data, youth-led innovation, and inclusive digital infrastructure. Its public site reports 200+ communities empowered and presents an expanded food-systems framework.

### What is open

GODAN is primarily a coordination and framework actor rather than one software repository. Its relevance includes open-data advocacy, agricultural data coordination, interoperability, FAIR-oriented practice, and institutional networking.

### Agrifood relevance

GODAN provides a bridge between open-data principles and agricultural research, nutrition, extension, and food-system governance. It belongs in the institutional and public-interest infrastructure layer.

### Evidence and limits

The current GODAN site establishes its present framing and public initiatives. Some older field-guide claims about historical chapters, partnerships, side events, or global reach require individual source checks. The current site’s impact counters include zero-valued placeholders in places, so they should not be used as impact evidence without clarification.

- Original source: https://www.godan.info/
- Open layer: data coordination, institutional infrastructure, frameworks
- Operating model: international coordination initiative
- Verification: `verified-primary` for current framing; historical scale and impact `stale-or-uncertain`
- Field-guide context: `units/godan-2-0-africa-open-data.md`

## 6. Open mobile data collection: Open Data Kit

### What it is

Open Data Kit (ODK) is an open-source suite for building data-collection and information services, with a strong history in low-connectivity and field-research contexts. The field-guide material identifies agricultural and development deployments across multiple African countries, but each deployment should be cited at the application level.

### What is open

- open-source mobile data-collection tools;
- extensible forms and workflows;
- offline-first and low-bandwidth patterns;
- community-maintained software and integrations.

### Agrifood relevance

ODK is an enabling layer for agricultural surveys, extension, monitoring, farm typologies, crop tracking, and government or development programmes. It is not itself a farmer-data-governance institution; deployment governance depends on the organisation collecting and using the data.

### Evidence and limits

The field-guide unit contains useful named deployment leads, including Nigeria, Sierra Leone, Tanzania, and Ghana. These are not all transferred as verified claims here because the initial source pass did not independently retrieve each underlying paper or programme document. The next scan pass should verify deployment status, licence, data governance, and outcomes case by case.

- Original source: https://getodk.org/
- Open layer: software, field data collection, offline infrastructure
- Operating model: open-source project / implementation ecosystem
- Verification: `field-guide-lead` for named agrifood deployments pending claim-level checks
- Field-guide context: `units/open-data-kit-africa-agritech.md`

## 7. Multilateral agricultural AI and public-interest infrastructure: CGIAR / AgriLLM

### What it is

CGIAR is an international agricultural research system. The field-guide material identifies AgriLLM as a CGIAR-linked, smallholder-oriented AI initiative involving local-language, voice, low-bandwidth, and knowledge-grounded approaches. This is a useful lead for the public and multilateral infrastructure layer, but it must not be classified as fully open merely because it is framed as a public good or because partners use open-source language.

### What may be open

Potentially open or public-interest layers include:

- research and agricultural knowledge;
- training and evaluation materials;
- open-access publications and FAIR data infrastructure;
- possibly models, tools, or datasets, subject to project-specific licences.

The openness status of AgriLLM’s model, weights, data, and deployment code requires direct confirmation from CGIAR or the project repository. The field-guide unit alone is insufficient.

### Agrifood relevance

### Evidence and limits

The openness question has advanced since the first pass. AI71 has published `AI71ai/Llama-agrillm-3.3-70B` on Hugging Face, with downloadable model files, a model card, Transformers usage instructions, and a stated LoRA fine-tuning relationship to Meta's Llama 3.3 70B Instruct. The model card describes four intended open public goods: fine-tuned LLMs, supervised agriculture Q&A data, an evaluation benchmark, and an agricultural document corpus. The FAO STI Portal independently describes AgriLLM as open-source and reports more than 7,400 human-generated Q&A pairs.

This is now verified evidence of a publicly released model artifact and open-building-block intention. It is not yet sufficient to conclude that all four public goods are released, that the training data are fully downloadable, or that the model's terms permit every form of reuse. The underlying Llama licence and any additional model-specific terms remain material. AgriLLM should therefore be classified as `open model artifact / openness partially verified`, not as an unqualified open-source stack.

- Original sources: https://huggingface.co/AI71ai/Llama-agrillm-3.3-70B ; https://www.cgiar.org/news-events/news/agrillm-how-cgiar-is-developing-an-ai-powered-agricultural-advisory-service-for-global-south ; https://sti-portal.fao.org/innovations/agrillm-open-source-large-language-model-grounded-cgiar-knowledge-deliver-accurate-and
- Open layer: model artifact; intended data, benchmark, and document corpus; multilateral research infrastructure
- Operating model: multilateral research system with external partnerships
- Verification: `verified-primary` for public model artifact and CGIAR project; `verified-independent` for FAO description; asset-level completeness and reuse terms `stale-or-uncertain`

## Cross-case matrix

| Case | Code / software | Models / weights | Data | Standards | Governance / commons | Biological commons | Deployment evidence | Current confidence |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| OADA | ● | — | ● | ●● | ● | — | ○ | Primary mission verified; adoption gap |
| JoinData | — | — | ● | ○ | ●● | — | ● | Current platform verified; scale dated |
| Common Voice | ● | — | ●● | ○ | ● | — | ○ | Platform verified; agrifood use gap |
| OSSI | — | — | — | — | ●● | ●● | ● | Pledge and current figures verified |
| GODAN | ○ | — | ●● | ● | ●● | — | ○ | Current framing verified; impact claims uneven |
| ODK | ●● | — | ● | ○ | ○ | — | ● | Agrifood deployment leads need source checks |
| CGIAR / AgriLLM | ○ | ○ | ● | ○ | ●● | — | ○ | Institutional anchor strong; openness unresolved |

Legend: `●●` substantial / mature evidence; `●` moderate or deployed evidence; `○` emerging or incomplete evidence; `—` not the case’s primary layer or no evidence found. A blank or dash is not proof of absence.

## Provisional analytical findings

1. Open agrifood is a stack, not a single licensing category. OADA, JoinData, Common Voice, OSSI, GODAN, ODK, and CGIAR occupy different layers.
2. Interoperability and permission control are separate problems. OADA addresses open technical exchange; JoinData addresses farmer-facing authorisation and control.
3. Open datasets are upstream infrastructure, not automatically agrifood applications. Common Voice requires application-level evidence before it can support claims about agricultural deployment.
4. Biological commons require distinct legal analysis. OSSI’s pledge should not be treated as a software licence analogue without examining its actual terms.
5. Public-interest framing does not establish openness. CGIAR / AgriLLM requires direct licence and repository verification.
6. Deployment evidence is uneven. ODK has many named leads, but a defensible deployment inventory requires checking each underlying case rather than inheriting the field guide’s synthesis.
7. Maintenance and adoption remain central unresolved questions. OADA’s implementation scale, GODAN’s current impact, and the long-term operating models of open projects require further research.

## What this initial transfer does not yet do

- It does not provide a complete global inventory.
- It does not establish current adoption or impact for every named project.
- It does not verify all licences, repositories, model weights, or data-governance arrangements.
- It does not yet provide a balanced regional scan beyond the selected cases.
- It does not make claims about event programming or event requirements.

## Next research pass

- verify OADA repository activity and implementation/adoption evidence;
- retrieve the current JoinData cooperative and membership status;
- document Common Voice licence and agrifood application cases;
- verify OSSI’s current partner and geographic distribution claims;
- trace GODAN’s current institutional structure and measurable outputs;
- verify ODK agrifood deployments against original papers and programme records;
- obtain direct AgriLLM model, data, code, and licence evidence;
- add African, Latin American, Asian, Indigenous, and farmer-led cases beyond this initial set.

Attribution note: This dossier was informed by CC BY 4.0 material in the Agrifood AI Field Guide (https://agrifood.metaviews.ca/), but the dossier’s claims are deliberately narrowed and re-anchored in the original sources listed above. Field-guide-derived leads remain labelled where independent verification is incomplete.

Not legal advice.
