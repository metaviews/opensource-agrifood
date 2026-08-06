# Open Source Agrifood: gap and research-question register

Research date: 2026-08-01

Updated 2026-08-02: G-OSA-13..15 added from the open-hardware/robotics/sensing discovery cycle (research/2026-08-open-hardware-robotics-sensing-scan.md); G-OSA-16 added from the machine-data-access/telematics cycle (research/2026-08-machine-data-access-telematics-scan.md); G-OSA-15 partially addressed and G-OSA-17 added from the Global South cycle (research/2026-08-global-south-open-hardware-scan.md); G-OSA-18 added from the DPI-for-agriculture cycle (research/2026-08-dpi-agriculture-scan.md); G-OSA-19 added from the China cycle (research/2026-08-china-ag-digital-infrastructure-scan.md); G-OSA-15 further addressed by the farm-level targeted pass (research/2026-08-global-south-farm-level-open-hardware-scan.md); G-OSA-20 added from the data-cooperatives cycle (research/2026-08-data-cooperatives-scan.md); G-OSA-21 added from the biological-commons cycle (research/2026-08-biological-commons-scan.md); G-OSA-08 partially addressed by the maintenance/funding profiles pass (research/2026-08-maintenance-funding-profiles.md); C-OSA-01..04 re-scored with provisional verdicts and the priority queue re-ranked by the landscape synthesis (research/2026-08-landscape-synthesis.md); G-OSA-01 resolved into shapes and C-OSA-01 verdict hardened by the OADA implementation/adoption verification scan (research/2026-08-oada-implementation-scan.md); G-OSA-20 SAOS/GISC leads verified and Q-OSA-07 answered in the negative by the data-coop durability follow-up (research/2026-08-data-coop-durability-followup.md; records saos.md curated, gisc.md candidate); G-OSA-19 partially resolved from Chinese primary sources and G-OSA-15's local-language residual closed by the five-language verification pass (research/2026-08-local-language-verification-pass.md; records ekylibre.md curated, osfarm.md and quannongma-all-farmers-code.md candidate); G-OSA-03 resolved into shapes and C-OSA-03 split by the Common Voice agrifood applications scan (research/2026-08-common-voice-agrifood-applications.md; records farmerchat.md and bhashini.md curated, kallaama.md candidate); the landscape synthesis was updated to v2 the same day (research/2026-08-landscape-synthesis-v2.md supersedes v1 — C-OSA-01 hardened to contested-evidenced, C-OSA-03 split with the language layer partially evidenced, Q-OSA-07 negative, language/speech column added to the cross-cell matrix); programme briefing added for external readers (research/2026-08-programme-briefing.md); G-OSA-22 opened on 2026-08-06 (greenhouse/CEA automation open layer — cell registered, not yet cycled).

This register is independent of the Agrifood AI Field Guide’s gap IDs. The field guide remains a useful discovery source and comparative research base: https://agrifood.metaviews.ca/. The questions below are not settled negative findings. They identify where the first transfer found incomplete, dated, or contested evidence.

## Gap register

| ID | Gap | Why it matters | Evidence currently available | Next verification | Status |
|---|---|---|---|---|---|
| G-OSA-01 | OADA implementation and adoption scale | Open standards only reduce lock-in if vendors and services implement them | Resolved into shapes (2026-08-03): active standards core — modern Apache-2.0 reference server (Kafka/ArangoDB), Purdue OATS-maintained, commits 2026-08-01, org updated 2026-07-16; legacy spec layer owner-archived (May 2024), conformance suite archived 2016; adoption layer absent — no verified OADA-compliant third-party implementation, no farmer-facing deployment, WinField 2015 intent unverified, server forks are student copies; ADC/NAPDC explicitly disclaims OADA (FAQ Q16); market answers elsewhere (Leaf aggregator, AgGateway ADAPT) | Residual G-OADA-01: vendor outreach to former OADA members/WinField for conformance claims; AGAPECert/Mask & Link status under ADC (G-OADA-02) | Resolved (2026-08-03; scan research/2026-08-oada-implementation-scan.md; record updated) |
| G-OSA-02 | Current JoinData membership and operating scale | Historical scale cannot be presented as current deployment | Current JoinData site plus 2023 case study | Request or locate current membership, participating parties, fees, governance, and geographic reach | Dated |
| G-OSA-03 | Common Voice agrifood applications | An open language dataset is not automatically an agricultural deployment | Resolved into shapes (2026-08-03): Common Voice itself has no farmer-facing deployment — verified uses are (a) a research chain (Common Voice → XLS-R → CIMMYT/Farm Radio International farmer voice analysis, Swahili/Hausa, Jones-Garcia 2022) and (b) a program-funded pilot (Mozilla Common Voice Kiswahili program → Haki des Femmes land-rights voice app, DRC). The wider open-language-data layer does show deployment evidence: Bhashini-powered PM-KISAN voice chatbot (11 languages), Ama KrushAI (Odia audio advisory), FarmerChat (1.6M farmers, 5 countries, Apache-2.0 code + CC-BY-4.0 data), Kallaama (open agricultural speech dataset, Wolof/Pulaar/Sereer, CC BY 4.0) | G-CV-01: farmer-benefit outcomes for the deployed language layer; G-CV-02: francophone/Lusophone Common Voice agrifood uses; G-CV-03: Kallaama downstream use; G-CV-04: AgriGPT-Omni release verification | Resolved into shapes (2026-08-03; scan research/2026-08-common-voice-agrifood-applications.md; records farmerchat.md and bhashini.md curated, kallaama.md candidate; common-voice.md updated) |
| G-OSA-04 | OSSI geographic and farmer adoption | Pledged-variety and partner counts do not establish farmer use or regional distribution | OSSI homepage provides current public counts | Verify current seed catalogue distribution, farmer adoption, breeding participation, and non-US deployments | Open |
| G-OSA-05 | GODAN current institutional and measurable impact | Current public framing is clear, but historical and impact claims vary | GODAN 2.0 site; public counters include placeholders | Trace current organisation, funding, active communities, datasets, and independently documented outcomes | Unclear |
| G-OSA-06 | ODK agrifood deployment inventory | The field guide names multiple cases, but each requires claim-level evidence | Field-guide deployment leads; ODK project site | Retrieve original papers and programme records for Nigeria, Sierra Leone, Tanzania, Ghana, and other cases | Open |
| G-OSA-07 | AgriLLM asset-level openness | Public-good or multilateral framing does not prove that every asset is open | Public Hugging Face model card; CGIAR announcement; FAO STI record | Verify Q&A dataset, benchmark, document corpus, code, model terms, underlying Llama terms, and deployment documentation | Partially resolved |
| G-OSA-08 | Open-project maintenance economics | Technical openness does not explain who pays for maintenance | 2026-08-02 profiles doc: six funding archetypes across all 49 records; anchors re-verified (OADA, GODAN 2.0, farmOS, ODK all active); L'Atelier Paysan liquidation as the strongest fragility case | Residual: ~15 records carry unverified maintenance status requiring organisation-level verification | Partially addressed (2026-08-02; taxonomy and per-record matrix complete, organisation-level verification outstanding) |
| G-OSA-09 | Farmer and Indigenous governance beyond named exemplars | A few strong cases can obscure weak representation elsewhere | JoinData, OADA, OSSI, CARE-related leads | Add farmer-led, Indigenous, women-led, and community-governed cases from multiple regions | Open |
| G-OSA-10 | Interoperability beyond standards declarations | Standards can exist without integration or exit rights in practice | OADA principles; JoinData permission model | Compare real data flows, API implementations, export rights, and switching experience | Open |
| G-OSA-11 | Open agrifood AI deployment evidence | General open-AI statistics cannot be converted into agrifood statistics | Field-guide warning; CGIAR and Common Voice leads | Build a sector-specific deployment evidence set with explicit denominator and geography | Open |
| G-OSA-12 | Licensing boundaries across layers | “Open source” is used across code, data, models, seeds, and governance with different legal consequences | OADA, Common Voice, OSSI, CGIAR leads | Record asset-specific licences and restrictions for every dossier entry | Open |
| G-OSA-13 | Open-hardware licensing and certification ambiguity | Only FarmBot commits to the OSHWA definition; none of the located hardware cases holds certification; CERN OHL absent | FarmBot policy page; per-asset licences in hardware records | Audit OSHWA/CERN OHL adoption across open agrifood hardware; record per-asset licences for every hardware record | Open (added 2026-08-02, hardware cycle) |
| G-OSA-14 | Open agrifood hardware replication evidence | Published designs are routinely treated as deployment evidence; independent builds are rarely documented | OSE anecdotal replication threads; FarmBot DIY support boundary; Vinduino single-farm | Establish an evidence standard distinguishing “designs published” from “machines built and used”; collect independent build reports | Open (added 2026-08-02, hardware cycle) |
| G-OSA-15 | Global South open agrifood hardware | Cost barriers to commercial equipment are highest where open designs would be cheapest entry points | Two 2026-08-02 passes: network/transfer layers (Think Oggún, Flying Labs, AfricaOSH, REGOSH); farm-level layer resolved into three shapes (Appropedia/OSAT design commons, NGO-published designs such as Farm Africa/NECPA solar dryer, affordable-but-closed commercial hardware) | Local-language searches completed 2026-08-03 (Spanish/Portuguese/French/Hindi/Chinese): absence of farmer-led licensed hardware robust across five languages; refined shapes — Argentine research-led open design (Chierchie/Fressoli 2025, UNSAM), Brazilian social-technology distribution (PAIS), Chinese maker-media lead (zhihu tractor, G-LL-01), Hindi OSSL in extension material only | Partially addressed (2026-08-02 x2 + 2026-08-03 local-language pass; residual: farmer-led licensed layer confirmed absent, field verification and maker-media case verification outstanding) |
| G-OSA-16 | Machine-data ownership and portability | Open telematics and repair access do not establish who owns, can port, or can delete machine data; the July 2026 FTC/Deere order mandates repair access, not data openness | ISOBlue (data on farmer's device by design); AgIsoStack++ (open ISOBUS implementation); FTC/Deere stipulated order 2026-07-08 | Establish evidence on machine-data ownership, portability, and deletion rights across vendor and open systems; track settlement implementation | Open (added 2026-08-02, machine-data cycle) |
| G-OSA-17 | Ownership and licensing of manufacturing-transfer models | "Open system" manufacturing models may combine open framing with paid licensing; who owns designs after transfer is unresolved | Think Oggún primary source: 5-year technology licence fee after 100% in-country manufacture; no public design files located | Track Oggún distributors and licence terms; identify comparable open-manufacturing transfer models and their licence reality | Open (added 2026-08-02, Global South cycle) |
| G-OSA-18 | Farmer agency in DPI-for-agriculture | Consent architecture is documented across national stacks and data spaces, but consent in practice (grievance, opt-out, verification, farmer awareness) is unmeasured | AgriStack consent architecture vs Rethink Aadhaar/IFF 2022 review; CEADS governance analysis (farmers advisory-only); WAGRI membership model | Collect evidence on consent in practice, grievance mechanisms, and opt-out experience across AgriStack, WAGRI, CEADS, and DPG-based deployments | Open (added 2026-08-02, DPI cycle) |
| G-OSA-19 | China ag digital infrastructure implementation status | The Smart Agriculture Action Plan 2024-2028 names a national agricultural and rural big data platform, "one map", and "All Farmers Code", but public documentation of implementation is absent in the English-language record | Partially resolved (2026-08-03, Chinese-language sources): Action Plan full text (农市发[2024]4号, 2024-10-23) with dated milestones — 2025 data standards, end-2026 foundation-model open platform/library, end-2028 platform complete + ≥32% production informatization rate; All Farmers Code (全农码) launched 2023 by MARA Big Data Development Center with private co-developer/operator chaojima (company-reported: 14 provincial + 101 local apps, 360+ services, 700M+ uses); Zhejiang pilot (浙农码↔全农码, 1000+ factories/100 future farms by 2028); data-elements operationalized (National Data Administration, May 2025) | Residual G-LL-03: platform openness (APIs/licences), independent usage verification, end-2026 milestone progress, and farmer agency (G-CN-02) | Partially resolved (2026-08-03; local-language pass research/2026-08-local-language-verification-pass.md; record quannongma-all-farmers-code.md candidate) |
| G-OSA-20 | Data cooperative durability beyond JoinData | Cooperative and consent-governance forms exist outside the Netherlands (NAPDC/GADC US, Agdatahub EU, SAOS Scotland, GISC US), but membership scale, usage, and farmer control outcomes are unverified | Partially resolved (2026-08-03): SAOS/GISC verified — GISC in maintenance mode (2026-08-03) with lineage folded into GADC/AgXchange/NAPDC and scale never published; SAOS/ScotEID is durable federation-owned traceability infrastructure (2008-2026, gov-contracted, share ownership deferred by design); SAOS farmer-owned data platform feasibility-stage; Scottish Agriculture Data Partnership announced late 2025, details thin; Q-OSA-07 answered in the negative — no data co-op outside NL at verified scale | Member-level verification for NAPDC/GADC/Agdatahub; G-DC-04 Data Partnership details; G-DC-05 ScotEID ownership-transfer intent; G-DC-06 AgXchange operational status; track FBN IPO data-handling question | Partially resolved (2026-08-03; follow-up research/2026-08-data-coop-durability-followup.md; records saos.md curated, gisc.md candidate) |
| G-OSA-21 | Open seed licence enforcement and uptake | The OSSL binds derivatives contractually and is the enforceable counterpart to the OSSI pledge, but no court-tested case, derivative-tracking record, or licensee count is public; Global South uptake of licence-based seed systems is absent from the record | OSSL registry (Sunviva tomato, Convento C wheat, etc.); Kotschi 2018 legal design; OSSI pledge contrast | Track OSSL enforcement and licensee scale; search for licence-based seed systems in the Global South; monitor whether derivatives remain open in practice | Open (added 2026-08-02, biological-commons cycle) |
| G-OSA-22 | Open layer in greenhouse / controlled-environment (CEA) automation | Protected cultivation is the most automation-dense production segment — climate computers, fertigation, lighting, labour — and in several regions the fastest-growing (NL; Korea's Smart Farm Innovation Valleys; Canada's Leamington cluster and Haven Greens); its control stack is where vendor lock-in is sharpest (proprietary climate computers, closed data formats), making it the strongest test of the openness thesis; links to G-OSA-10 and G-OSA-16 | No CEA records in this corpus; the open-hardware cell covered field machinery, not greenhouse control (FarmBot is garden/greenhouse-scale CNC, OSHWA-committed — not commercial climate control); field-guide protected-cultivation layer is closed-commercial or research-stage (Haven Greens, ioCrops FTVC, Sollum sun-as-a-service, Hoogendoorn IIVO/LetsGrow.com, Tencent×WUR Autonomous Greenhouse Challenge, Vineland harvester) | Search open greenhouse climate-control / fertigation / LED software and hardware (open grow computers, climate-data formats, DPGA registry, GitHub API licence/activity checks); separate garden-scale (FarmBot) from commercial CEA; verify whether WUR/AGC competition outputs are openly released; record asset-by-asset openness per corpus convention | Open (added 2026-08-06; cell opened, not yet cycled) |

## Research-question register

### Definitions and boundaries

- Q-OSA-01: What should count as open software, open data, open weights, open standards, digital public goods, commons governance, or biological commons in this project?
- Q-OSA-02: Which combinations of open layers are necessary for a system to be meaningfully farmer-controllable?
- Q-OSA-03: When should “open-source agrifood” be used, and when is “open agrifood infrastructure” the more accurate term?

### Infrastructure and interoperability

- Q-OSA-04: Which OADA-compatible implementations exist today, and what evidence demonstrates active use?
- Q-OSA-05: How do farmers actually export, revoke, transfer, or reuse data across systems using open standards?
- Q-OSA-06: What technical and institutional conditions make interoperability durable rather than merely declarative?
- Q-OSA-21: Which layers of the greenhouse/controlled-environment automation stack have open implementations, and who controls the closed ones?

### Governance and sovereignty

- Q-OSA-07: Which data cooperatives outside the Netherlands have achieved durable farmer participation and control?
- Q-OSA-08: How are Indigenous data governance principles applied when agricultural data, genetic resources, or traditional knowledge enter open systems?
- Q-OSA-09: Who has authority to define consent, access, deletion, reuse, and benefit sharing in open agrifood projects?

### Language, access, and deployment

- Q-OSA-10: Where are Common Voice or other open language datasets being used in agricultural extension or farm systems?
- Q-OSA-11: Which open tools work under low-bandwidth, offline, feature-phone, or low-literacy conditions, and what evidence supports that claim?
- Q-OSA-12: How do local-language and voice-first systems handle accuracy, consent, dialect variation, and community ownership?

### Maintenance, funding, and value capture

- Q-OSA-13: Who pays for maintenance after grant-funded development ends?
- Q-OSA-14: Which open projects have durable contributor communities, institutional homes, or service revenues?
- Q-OSA-15: Where does value created by open agrifood infrastructure accumulate: farmers, communities, vendors, funders, institutions, or intermediaries?
- Q-OSA-16: Which cooperative, public, multilateral, or blended models have supported long-term maintenance?

### Evidence and scale

- Q-OSA-17: What is the minimum evidence required before describing a project as deployed, adopted, farmer-controlled, or impactful?
- Q-OSA-18: How can agrifood-specific open-source AI deployment be measured without borrowing global AI denominators?
- Q-OSA-19: Which regions and languages are systematically missing from current evidence?
- Q-OSA-20: How often do open agrifood projects become inactive, forked, absorbed, or commercially enclosed?

## Contested claims to track

### C-OSA-01: “Open standards solve vendor lock-in.”

- Supporting logic: open APIs and portable data can improve switching and competition.
- Counterpoint: standards without vendor implementation, governance, or usable export mechanisms may not change practical lock-in.
- Current status: contested, evidenced by OADA's own trajectory (2026-08-03: active standards/reference layer with zero verified third-party implementations or farmer-facing deployments — possibility of portability stands, practice unfulfilled; G-OSA-01 resolved into shapes, residual G-OADA-01 vendor outreach); linked to G-OSA-10.

### C-OSA-02: “Open data creates farmer benefit.”

- Supporting logic: access and reuse can improve services, research, and innovation.
- Counterpoint: data release can redistribute value toward platforms or intermediaries unless rights, consent, and benefit sharing are governed.
- Current status: split (2026-08-03 synthesis: benefit possible, value capture undetermined; hinge G-OSA-20); linked to JoinData, GODAN, CARE, and data-cooperative research.

### C-OSA-03: “Open-source AI is ready for agrifood deployment.”

- Supporting logic: open models and supporting infrastructure may be technically capable.
- Counterpoint: agrifood-specific deployment, data quality, local-language performance, safety, maintenance, and accountability remain insufficiently evidenced.
- Current status: split, language layer partially evidenced (2026-08-03: FarmerChat 1.6M farmers/5 countries with Apache-2.0 code and CC-BY-4.0 data, Bhashini PM-KISAN voice chatbot in 11 languages, Ama KrushAI, Kallaama open ag speech dataset — but these are state-DPI/NGO managed deployments on open foundations, not open-model deployments; farmer-benefit unmeasured; Common Voice itself remains research/pilot only; model/weights layer still unproven via Sinong/AgriLLM); global AI figures must not be treated as agrifood evidence.

### C-OSA-04: “Open-source seed licensing is equivalent to open-source software licensing.”

- Supporting logic: both seek to preserve downstream freedoms.
- Counterpoint: biological reproduction, breeding, material transfer, patents, plant-variety rights, and traditional knowledge create distinct legal and ecological conditions.
- Current status: rejected as a simple equivalence (2026-08-03 synthesis adds cross-cell evidence: OSSL enforcement untested per G-OSA-21, customary governance misrepresented by open-source framing); the pledge-vs-licence trade-off is the live sub-question.

## Verification protocol

For every question advanced into a published scan:

1. Identify the exact claim being tested.
2. Search the primary project or institution first.
3. Add independent or academic evidence where available.
4. Record the geographic scope and date of the evidence.
5. Separate project existence from deployment, adoption, impact, and sustainability.
6. Record uncertainty instead of filling gaps with field-guide synthesis.
7. Add the source and verification date to `research/sources/` practices.

## Immediate priority queue

Re-ranked 2026-08-03 by the landscape synthesis (research/2026-08-landscape-synthesis.md) on one criterion: which gap, resolved, would change the synthesis most. G-OSA-01 (OADA), G-OSA-20 (SAOS/GISC), the local-language cycle (G-OSA-19 partially; G-OSA-15 residual), and G-OSA-03 (Common Voice) were resolved or advanced by verification scans on 2026-08-03. All previously opened public-source-verifiable queue items are now exhausted; the queue is tracking-only plus fieldwork-bound items, with one new public-source cycle opened on 2026-08-06 (G-OSA-22).

1. Next public-source cycle: G-OSA-22 (open layer in greenhouse/CEA automation — cell opened 2026-08-06, not yet cycled).
2. Track: G-OSA-21 (OSSL enforcement/uptake — re-check annually), G-OADA-02 (AGAPECert under ADC), G-DC-04 (Scottish Agriculture Data Partnership), G-LL-01 (Chinese maker-media), G-CV-01..04 (language-layer outcomes, Kallaama downstream, AgriGPT-Omni release).
3. Fieldwork-bound (not public-source cycles): G-OSA-18 (farmer agency in practice — the project's central question), G-OSA-02 (JoinData membership — org request), G-OSA-08 residual (~15 unverified maintenance statuses), G-GS-05 residual (farmer-led licensed Global South hardware — field verification).

G-OSA-18 remains the project's central question but is fieldwork-bound; public-source cycles can only add architecture-level evidence.

Not legal advice.
