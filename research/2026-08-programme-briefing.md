# Open Source Agrifood: programme briefing

Date: 2026-08-03
Audience: collaborators, funders, and future contributors who have not followed the session-by-session work. This briefing distils the discovery programme, its verdicts, and the state of the knowledge base into one readable document. Every claim traces to a scan doc or record in this repository; the register (research/field-guide-gap-and-question-register.md) is the machine-readable index.

## 1. What this project is

Open Source Agrifood is a research and knowledge-building project that asks one central question: **who controls the systems — hardware, data, standards, models, seeds, governance — that make up open agrifood, and who benefits from them?** It stands on its own as a sourced body of knowledge: environmental scans, verified example records, analytical frameworks, and research leads. It is not an event project, not a vendor catalogue, and not a list of everything that uses the word "open." The comparative synthesis is an output of the programme, not a gate on it — identifying and verifying what exists is itself a stated goal.

The project's evidence discipline: "open" is recorded asset by asset (open code does not imply open data; open weights do not imply open training data; public-interest framing does not imply open source); claims are grounded in primary sources; gaps, contested claims, negative findings, and freshness are recorded explicitly; uncertainty is recorded rather than filled.

## 2. Method

Twelve bounded discovery cycles (2026-08-01/02) each targeted one named thin cell with a fixed query budget, GitHub API verification of licences and activity, full extraction of key sources, and a record bar (lead → candidate → curated → featured). Each cycle produced a scan doc with the headline finding first, a working matrix, contested claims with asserters and contesters, named gaps, and an honest "what this does not do" section that named the next cycle. Four verification passes (2026-08-03) then resolved the synthesis's top-priority gaps with the same discipline.

## 3. What was mapped

Coverage across the landscape, cell by cell:

- Hardware family: open machinery, robotics, sensing (L'Atelier Paysan, FarmBot, Open Source Ecology, ArduPilot, Vinduino, Farm Hack, ROMI, Tischler, Reimer); machine-data access and telematics (ISOBlue, AgIsoStack++, the July 2026 FTC/Deere repair settlement); Global South hardware in two passes (Think Oggún, Flying Labs, AfricaOSH, REGOSH; then the farm-level pass resolving the gap into three shapes).
- DPI for agriculture: AgriStack (India), WAGRI (Japan), CEADS/AgriDataSpace (EU), ONDC/Beckn, FarmStack — plus, in verification passes, Bhashini (India's language DPI) and the All Farmers Code (China's digital identity platform).
- China's agricultural digital infrastructure: Sinong (open-weight model), ET Agricultural Brain (closed contrast), national scientific data centers, and the Smart Agriculture Action Plan's implementation.
- Data cooperatives and farmer data governance: JoinData (Netherlands), NAPDC/ADC, Agdatahub, FBN — plus SAOS (Scotland) and GISC (US) in the follow-up pass.
- Biological commons: OSSI, Bioleft, OpenSourceSeeds/OSSL, Potato Park, SEARICE, Navdanya.
- Maintenance and funding profiles: a comparative verification of all records, producing a six-archetype taxonomy.
- Language and speech data: Common Voice, Kallaama, and the deployed layer (FarmerChat, Bhashini, Ama KrushAI).
- Canadian and foundation passes: farmer-led open-source cases (Brian Tischler, Matt Reimer), seed sovereignty, federal open models, plus the initial environmental scan.

The collection stands at 58 records spanning every region and most openness layers, from farmer-led open machinery in Canada to state-private digital identity in China to Indigenous biocultural commons in Peru.

## 4. What the programme found

### The headline

**Openness in agrifood is layered, the layers decouple, and farmer agency is the scarcest layer of all.** Where capital or the state is present, openness is absent or managed; where openness is real, maintenance is fragile and farmer control is rare. Regulation and standards create access; they do not transfer control.

### The seven currents

1. Farmer-maker and cooperative self-build — the strongest farmer-control claims and the clearest fragility (L'Atelier Paysan's 2026 liquidation is the canonical instance).
2. State and supranational infrastructure — the largest scale and the weakest farmer agency (AgriStack's contested consent, CEADS's advisory-only farmers, China's unaddressed agency).
3. The open-core + paid-services hybrid — the only self-sustaining open model, spanning software (Ekylibre, farmOS, ODK), hardware (FarmBot, OS Farm), and AI (FarmerChat); minority scale everywhere.
4. Commons governance without licences — licence (OSSL), pledge (OSSI), and customary governance (Potato Park) are three different mechanisms; cooperative data infrastructure (SAOS/ScotEID) is durable only where it owns regulated infrastructure.
5. The donor-funded "farmer-centric" paradigm — recommends governance it does not durably fund; its operationalized form (FarmerChat) delivers managed services on open foundations.
6. Openness as trust-and-transfer in the Global South — the farmer-led, explicitly licensed open-hardware layer is confirmed absent across five languages; what fills the niche is closed commercial hardware.
7. Regulation and standards as access, not control — the FTC/Deere order, ISOBUS, and the EU Data Governance Act open doors without transferring control; OADA is the canonical case of a standard without adoption.

### The verdicts

The contested-claims ledger, re-scored with evidence:

- **C-OSA-01 — "Open standards solve vendor lock-in": contested, evidenced by OADA's own trajectory.** An actively maintained standards core (Purdue OATS, commits August 2026) with zero verified compliant implementations and zero farmer-facing deployments; the family's own farmer-centric repository disclaims it. Possibility of portability stands; practice is unfulfilled.
- **C-OSA-02 — "Open data creates farmer benefit": split.** Benefit is possible; value capture is undetermined. No data cooperative outside the Netherlands operates at verified farmer-controlled scale (Q-OSA-07 answered in the negative); the strongest infrastructure case (ScotEID) defers farmer share-ownership by design.
- **C-OSA-03 — "Open-source AI is ready for agrifood deployment": split, with the language layer partially evidenced.** The open-language-data layer shows the strongest deployment evidence in the open-AI stack — FarmerChat (1.6M farmers, five countries, Apache-2.0 code, CC-BY-4.0 data), Bhashini's 11-language voice chatbot, Ama KrushAI, Kallaama — but these are managed state-DPI and NGO deployments on open foundations, not open-model deployments, and farmer benefit is unmeasured. The model/weights layer remains unproven.
- **C-OSA-04 — "Open-source seed licensing is equivalent to software licensing": rejected**, with cross-cell evidence (untested OSSL enforcement, the pledge's unenforceability, customary governance misrepresented by open-source framing).

Cross-cutting verdicts that recur: repair access is not openness; open weights are not open source; openly published is not open-licensed; local capacity is not farmer control; affordable is not open.

### The negative findings that matter

- The Global South's farmer-led, explicitly licensed open hardware is confirmed absent — tested across Spanish, Portuguese, French, Hindi, and Chinese, not just English.
- No data cooperative outside the Netherlands shows verified durable farmer participation at scale.
- OADA — the flagship open interoperability standard — has no verified adoption.
- Common Voice itself has no farmer-facing deployment; its agrifood uses are a research chain and program-funded pilots.

## 5. State of the knowledge base

- 58 records in examples/records/ (catalogue: examples/catalog.md), each with an "open layer" audited asset by asset and an explicit "what it does not demonstrate."
- 13 scan docs plus the two-version landscape synthesis (research/2026-08-landscape-synthesis-v2.md supersedes v1) in research/.
- Gap register (G-OSA-01..21), research-question register (Q-OSA-01..20), contested-claims ledger (C-OSA-01..04), verification protocol, and an immediate priority queue.
- All public-source-verifiable queue items were resolved or advanced on 2026-08-03. The remaining queue is tracking-only plus fieldwork-bound items.

## 6. What remains

- Tracking (re-check annually): OSSL enforcement (G-OSA-21), AGAPECert under ADC (G-OADA-02), the Scottish Agriculture Data Partnership (G-DC-04), Chinese maker-media open designs (G-LL-01), language-layer outcomes and release verification (G-CV-01..04).
- Fieldwork-bound: farmer agency in practice (G-OSA-18 — the project's central question: consent, grievance, opt-out, and benefit as experienced by farmers), JoinData membership (G-OSA-02), the ~15 unverified maintenance statuses (G-OSA-08 residual), and field verification of the Global South hardware absence (G-GS-05 residual).

## 7. How to use this repository

- README.md — project framing, scope, research posture, current phase.
- research/2026-08-landscape-synthesis-v2.md — the synthesis: currents, verdicts, cross-cell matrix, queue. Start here.
- research/field-guide-gap-and-question-register.md — the living index of gaps, questions, claims, and priority.
- research/2026-08-*.md — the individual scan docs, one per cycle, headline-first with sources.
- examples/catalog.md and examples/README.md — the browseable collection with per-record questions.
- examples/records/*.md — the verified records.

Freshness: facts are re-verified annually, frameworks every two years; each record and scan doc carries its last-checked date. This briefing is a framework document — re-verify every two years or when a cycle changes a verdict.

Not legal advice.
