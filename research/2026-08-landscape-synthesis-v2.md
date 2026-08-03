# Open-source agrifood landscape: synthesis of the 2026 discovery programme (v2)

Research date: 2026-08-03 (v2, same date as v1)
Method: v2 supersedes v1 (research/2026-08-landscape-synthesis.md) and incorporates four verification cycles run after v1 on the same day: OADA implementation/adoption (G-OSA-01 resolved; research/2026-08-oada-implementation-scan.md), SAOS/GISC data-cooperative durability (G-OSA-20 partially resolved; research/2026-08-data-coop-durability-followup.md), the five-language local-language pass (G-OSA-15 residual closed, G-OSA-19 partially resolved; research/2026-08-local-language-verification-pass.md), and Common Voice agrifood applications (G-OSA-03 resolved into shapes; research/2026-08-common-voice-agrifood-applications.md). No new research beyond those cycles; every position traces to a scan doc or record; uncertainty is recorded rather than filled. The twelve discovery cycles plus these verification passes sit behind this document: 58 records, 13 scan docs, G-OSA-01..21, Q-OSA-01..20, C-OSA-01..04.

## Why a v2

One day of verification cycles moved the ledger more than any discovery cycle did. C-OSA-01 hardened from leaning-contested to contested-evidenced. C-OSA-03 split, with the language layer gaining the strongest deployment evidence in the open-AI stack. Q-OSA-07 was answered in the negative with evidence. The Global South hardware absence was proven language-robust, not an English-language artifact. And China's implementation gap closed in part from primary sources. The v1 structure held; this v2 sharpens the verdicts, expands three currents with new anchors, and adds a language column to the matrix.

## Headline finding

**The v1 headline — openness is layered, the layers decouple, and farmer agency is the scarcest layer — is now load-bearing across every verification cycle.** Four additional shapes confirm it: (1) OADA is the canonical case of decoupling — an actively maintained open standards core (Purdue OATS, commits 2026-08-01) with zero verified third-party implementations and zero farmer-facing deployments; (2) farmer agency is scarce even where cooperative governance is real — SAOS's ScotEID is durable federation-owned infrastructure with farmer share-ownership explicitly deferred, and no data cooperative outside the Netherlands operates at verified farmer-controlled scale (Q-OSA-07 negative); (3) the one open-AI layer with deployment evidence — language and speech — is deployed as managed state-DPI and NGO services on open foundations (Bhashini's 11-language PM-KISAN voice chatbot, FarmerChat's 1.6M farmers), not as farmer-controlled or open-model deployments; (4) the Global South farmer-led licensed hardware absence survives five languages, refined into research-led (Argentina), social-technology (Brazil), maker-media (China), and extension-discourse (Hindi) shapes. Where capital or the state is present, openness is absent or managed; where openness is real, farmer control and durable maintenance remain the scarce resources.

## Currents

Seven currents, updated with the new anchors.

### Current 1 — Farmer-maker and cooperative self-build

Unchanged core (L'Atelier Paysan, AgOpenGPS/Tischler, Vinduino, Reimer, Farm Hack; liquidation as fragility case). v2 addition: the G-GS-05 absence is robust across Spanish, Portuguese, French, Hindi, and Chinese — the farmer-led, explicitly licensed, maintained open-hardware layer is absent in every language searched, not just English. Refined shapes: Argentine research-led open design (Chierchie & Fressoli 2025, UNSAM — Bioleft's institution), Brazilian social-technology distribution (PAIS boundary holds), a Chinese maker-media lead (zhihu tractor, headline-level only — G-LL-01), and Hindi extension material circulating the open-seed-licence concept (MANAGE).

### Current 2 — State and supranational infrastructure

Expanded and more operational than v1 knew. New anchors: Bhashini (India's language DPI, MeitY) — the PM-KISAN voice chatbot runs 11 regional languages with voice-to-text for spoken farmer queries; the All Farmers Code (全农码) — launched 2023 by MARA's Big Data Development Center with private co-developer/operator chaojima (company-reported 14 provincial + 101 local applications, 700M+ uses); the Smart Agriculture Action Plan's dated milestones (2025 standards; end-2026 foundation-model library; end-2028 platform complete, ≥32% production informatization rate; Zhejiang pilot with 浙农码-全农码 linkage). The governance pattern repeats and extends: the "national" platform is state-private co-production, scale is vendor self-reported, and farmer agency remains unaddressed (G-CN-02).

### Current 3 — The open-core + paid-services hybrid

Expanded across three layers — the only self-sustaining open model now spans software, hardware, and AI. Software: Ekylibre joins farmOS/ODK (active AGPL-3.0 FMIS, 487 stars, 15 years, company-maintained). Hardware: OS Farm is the state-funded variant (France 2030 consortium, "100% open source" interoperability standard, franchise/subscription deployment — open standard, commercial deployment). AI: FarmerChat is the open-foundation variant (Digital Green; Apache-2.0 code, CC-BY-4.0 data, agronomist-reviewed pipeline, managed deployment with partnership tiers). The archetype's signature — open foundation, paid or managed services, minority scale — holds everywhere it appears.

### Current 4 — Commons governance without licences

Expanded with the cooperative-infrastructure shape. SAOS/ScotEID: the most durable located farmer-organization data infrastructure (est. 2008, government-contracted livestock traceability, expanded 2026, near-eradication of BVD as the proven outcome) — owned by a wholly-owned federation subsidiary with share ownership explicitly deferred to "as the subsidiaries mature." GISC: the US grower-owned cooperative form now behind a maintenance-mode site, scale never published, lineage folded into GADC/AgXchange/NAPDC. Verdict: the cooperative form is durable where it owns regulated infrastructure and unverified where it depends on voluntary farmer data exchange. Q-OSA-07 is answered in the negative; the licence/pledge/customary trichotomy from v1 stands.

### Current 5 — The donor-funded "farmer-centric" paradigm

Unchanged core; v2 addition: FarmerChat shows the paradigm's operationalized form — foundation-funded (Rockefeller, Gates, BMZ), agronomist-reviewed, RLHF-improved, deployed at 1.6M farmers — with the same structural caveat: the paradigm delivers managed services on open foundations, not farmer-owned infrastructure. The recommendation-versus-demonstration gap narrows at deployment scale and persists at governance scale.

### Current 6 — Openness as trust-and-transfer in the Global South

Unchanged core (Oggún, Flying Labs, AfricaOSH, REGOSH; G-GS-05 absent). v2 addition from the language layer: Kallaama (open agricultural speech dataset, Wolof/Pulaar/Sereer, 125 hours, CC BY 4.0) and Haki des Femmes (Mozilla Common Voice Kiswahili program-funded land-rights voice app, DRC) show the Global South language layer producing open resources and program-funded pilots — research and pilot shapes, not deployed farmer services.

### Current 7 — Regulation and standards as access, not control

Unchanged; OADA is now its canonical evidence: a published standard with an active reference implementation and no verifiable adoption — the possibility of portability stands, its practice is unfulfilled.

## Contested claims: v2 verdicts

### C-OSA-01: "Open standards solve vendor lock-in." — Contested, evidenced by OADA's own trajectory.

OADA is the canonical test and the strong form of the claim fails: an active, institutionally maintained standards core (Purdue OATS) with zero verified compliant implementations, zero farmer-facing deployments, the family's own farmer-centric repository (ADC/NAPDC) explicitly disclaiming OADA, and the market answering the interoperability problem elsewhere (Leaf aggregator, AgGateway ADAPT). Possibility of portability stands; practice unfulfilled. Hinge resolved (G-OSA-01); residual is vendor outreach (G-OADA-01).

### C-OSA-02: "Open data creates farmer benefit." — Split; value capture remains undetermined.

Unchanged in structure; the hinge (G-OSA-20) partially resolved: no cooperative outside the Netherlands shows verified farmer-controlled scale (Q-OSA-07 negative); SAOS/ScotEID shows durable infrastructure without direct member ownership; GISC shows the form's fragility. Benefit possible; capture undetermined; the farmer-benefit measurement gap (G-CV-01) now extends to the deployed language layer.

### C-OSA-03: "Open-source AI is ready for agrifood deployment." — Split; the language layer is partially evidenced, the full claim is unproven.

New verdict. Evidence for: FarmerChat (1.6M farmers, five countries, open foundation), Bhashini PM-KISAN voice chatbot (11 languages), Ama KrushAI (Odia audio advisory), Kallaama (open ag speech corpus). Evidence against: these are managed state-DPI and NGO deployments on open foundations — not open-model deployments; Common Voice itself remains research-chain and program-pilot only; farmer-benefit outcomes unmeasured; the model/weights layer stays unproven (Sinong weights-only, AgriLLM asset-level unresolved); the field's newest ag speech data is synthetic (AgriGPT-Omni: 492K synthetic vs 1.4K real samples, release unverified). Deployment at scale without farmer control — the language layer is the strongest instance of the headline finding in the AI stack.

### C-OSA-04: "Open-source seed licensing is equivalent to open-source software licensing." — Rejected, reinforced.

Unchanged; the biological-commons evidence (OSSL untested enforcement, OSSI pledge without enforcement, Potato Park customary governance, CSB community-defined access) stands, now joined by the Hindi-language extension-material circulation of the OSSL concept — the licence travels, the enforcement question does not.

### Cross-cutting verdicts (unchanged, now with canonical instances)

- Repair access ≠ open (FTC/Deere; OADA's ADC FAQ is the cooperative-family instance).
- Open weights ≠ open source (Sinong; AgriGPT-Omni's promised release unverified).
- Local capacity ≠ farmer control (Flying Labs; FarmerChat's managed deployment is the AI-layer instance).
- Openly published ≠ open-licensed (Farm Africa/NECPA; Kallaama is the positive counter-instance — an ag dataset with an explicit CC BY 4.0).

## Cross-cell matrix (v2)

Region x openness layer, with a language/speech column added. `●` = representative record(s); `○` = thin/contrast; `—` = gap. Farmer-agency grade: `●●●` structural, `●●` consent/co-design, `●` access/use, `○` none documented, `—` not located.

| Region | Hardware / machinery | Machine data / telematics | Data governance / DPI | Open AI / weights | Language / speech | Biological commons |
|---|---|---|---|---|---|---|
| North America | FarmBot `●`; Tischler `●●●` | ISOBlue `●`; AgIsoStack++ `●●`; FTC/Deere `●` | NAPDC `●●`; FBN `○`; OADA `●` (unadopted) | — | — | OSSI `●●` |
| Europe | L'Atelier Paysan `●●●` (liquidated); OS Farm `●` | AgIsoStack++ `●●` | JoinData `●●`; Agdatahub `●●`; CEADS `●` | — | — | OSSL `●●` |
| Latin America | REGOSH `●●`; Oggún `○` | — | REGOSH co-design `●●` | — | — | Potato Park `●●●`; Bioleft `●●` |
| Africa | Appropedia/OSAT `●●`; Farm Africa/NECPA `●` | — | FarmStack `●●`; ODK `●●` | AgriLLM `●` | Kallaama `●` (dataset); Haki des Femmes `●` (pilot) | ACB `○`; CSB literature `●` |
| South / SE Asia | — | — | AgriStack `●` (contested); ONDC `●●`; Bhashini `●●` (language DPI) | — | Bhashini voice chatbot `●●` (deployed) | Navdanya `●`; SEARICE `●●` |
| China | maker-media lead `○` (G-LL-01) | — | Nat'l data centers `●`; All Farmers Code `●` (state-private) | Sinong `●` (weights only) | — | — |
| Global / digital | ArduPilot `●●`; ROMI `●` | AgIsoStack++ `●●` | FarmStack `●●`; DPG paradigm | Common Voice `●` (research chain); FarmerChat `●●` (deployed, managed) | Common Voice `●`; SYSPIN `●` | Appropedia `●●`; OSSI `●●` |

Named gaps the v2 matrix makes visible: company-backed open farm machinery still does not exist; machine-data ownership unopened anywhere (G-OSA-16); cross-border DPI interoperability undocumented; farmer-led licensed Global South hardware absent in five languages (G-GS-05); open-source-licensed seeds absent from the Global South (G-BC-02); China's seed commons uncovered; and the language column's deployments are all managed — no farmer-governed voice infrastructure exists in the record.

## Maintenance and value capture (v2)

The six archetypes stand. v2 integration: the hybrid open-core + paid-services archetype now spans software (Ekylibre, farmOS, ODK), hardware (FarmBot, OS Farm), and AI (FarmerChat) — the only self-sustaining pattern, still minority scale everywhere. State/institutional hosting gained a language-layer instance (Bhashini) and an operational China layer (All Farmers Code — private co-developer under MARA joint lab, the venture/state hybrid in national infrastructure). The grant-fragility modal finding (12 records) stands; L'Atelier Paysan's liquidation remains the strongest instance.

## What this synthesis does not do (v2)

- It does not resolve fieldwork-bound questions: farmer agency in practice (G-OSA-18), JoinData membership (G-OSA-02), the ~15 unverified maintenance statuses (G-OSA-08 residual), or field verification of the Global South absence (G-GS-05 residual).
- It does not verify vendor self-reports: All Farmers Code usage figures, FarmerChat's 1.6M reach, OS Farm's impact claims.
- It does not rank or score projects; farmer-agency grades remain descriptive of the record.
- It is not a funding, procurement, or policy recommendation.
- It is not v1's replacement in substance — v1's positions remain valid where v2 does not revise them.

## Synthesis-driven priority queue (v2)

Exhausted. All public-source-verifiable gaps from the v1 re-rank were resolved or advanced on 2026-08-03 (G-OSA-01, G-OSA-20, G-OSA-19, G-OSA-15 residual, G-OSA-03). Remaining work:

1. Track-only (re-check annually): G-OSA-21 (OSSL enforcement), G-OADA-02 (AGAPECert under ADC), G-DC-04 (Scottish Agriculture Data Partnership), G-LL-01 (Chinese maker-media), G-CV-01..04 (language-layer outcomes, Kallaama downstream, francophone/Lusophone Common Voice, AgriGPT-Omni release).
2. Fieldwork-bound: G-OSA-18 (the project's central question — consent and control in practice), G-OSA-02 (org request), G-OSA-08 residual, G-GS-05 residual.

## Freshness model

- This document: `framework` — re-verify every 2 years, or immediately when a cycle changes any current or verdict.
- Verdicts on C-OSA-01..04: `claim` — re-verify annually; hinges listed per claim.
- Farmer-agency grades: `framework` — re-verify every 2 years, or on any record promotion.

## Sources

v1 (research/2026-08-landscape-synthesis.md) remains the base; this v2 adds the four verification scans (research/2026-08-oada-implementation-scan.md, research/2026-08-data-coop-durability-followup.md, research/2026-08-local-language-verification-pass.md, research/2026-08-common-voice-agrifood-applications.md), the records added by them (saos.md, gisc.md, ekylibre.md, osfarm.md, quannongma-all-farmers-code.md, farmerchat.md, bhashini.md, kallaama.md), and the updated register (field-guide-gap-and-question-register.md). Primary sources per scan doc.

Not legal advice.
